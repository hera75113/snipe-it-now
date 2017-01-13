<?php
namespace App\Http\Controllers;

use App\Models\CustomField;
use Image;
use Input;
use Lang;
use App\Models\AssetModel;
use Redirect;
use Auth;
use DB;
use Str;
use Validator;
use View;
use App\Models\Asset;
use App\Models\Company;
use Config;
use App\Helpers\Helper;
use Illuminate\Http\Request;

use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * This class controls all actions related to asset models for
 * the Snipe-IT Asset Management application.
 *
 * @version    v1.0
 * @author [A. Gianotto] [<snipe@snipe.net>]
 */
class AssetModelsController extends Controller
{
    /**
    * Returns a view that invokes the ajax tables which actually contains
    * the content for the accessories listing, which is generated in getDatatable.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @see AssetModelsController::getDatatable() method that generates the JSON response
    * @since [v1.0]
    * @return View
    */
    public function index()
    {
        // Show the page
        return View::make('models/index');
    }

    /**
    * Returns a view containing the asset model creation form.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @return View
    */
    public function create()
    {
        // Show the page
        return View::make('models/edit')
        ->with('category_list', Helper::categoryList('asset'))
        ->with('depreciation_list', Helper::depreciationList())
        ->with('manufacturer_list', Helper::manufacturerList())
        ->with('item', new AssetModel);
    }


    /**
    * Validate and process the new Asset Model data.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @return Redirect
    */
    public function store(Request $request)
    {

        // Create a new asset model
        $model = new AssetModel;

        // Save the model data
        $model->eol = $request->input('eol');
        $model->depreciation_id = $request->input('depreciation_id');
        $model->name                = $request->input('name');
        $model->model_number        = $request->input('model_number');
        $model->manufacturer_id     = $request->input('manufacturer_id');
        $model->category_id         = $request->input('category_id');
        $model->notes               = $request->input('notes');
        $model->user_id             = Auth::guard('api')->user();
        $model->requestable         = Input::has('requestable');

        if ($request->input('custom_fieldset')!='') {
            $model->fieldset_id = e($request->input('custom_fieldset'));
        }

        if (Input::file('image')) {
            $image = Input::file('image');
            $file_name = str_random(25).".".$image->getClientOriginalExtension();
            $path = public_path('uploads/models/'.$file_name);
            Image::make($image->getRealPath())->resize(500, null, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            })->save($path);
            $model->image = $file_name;
        }

            // Was it created?
        if ($model->save()) {
            // Redirect to the new model  page
            return redirect()->route("models.index")->with('success', trans('admin/models/message.create.success'));
        }
        return redirect()->back()->withInput()->withErrors($model->getErrors());
    }

    /**
     * Validates and stores new Asset Model data created from the
     * modal form on the Asset Creation view.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @since [v2.0]
     * @param Request $request
     * @return String JSON
     */
    public function apiStore(Request $request)
    {
      //COPYPASTA!!!! FIXME
        $model = new AssetModel;

        $settings=Input::all();
        $settings['eol']= null;

        $model->name=$request->input('name');
        $model->manufacturer_id = $request->input('manufacturer_id');
        $model->category_id = $request->input('category_id');
        $model->model_number = $request->input('model_number');
        $model->user_id = Auth::id();
        $model->notes            = $request->input('notes');
        $model->eol= null;

        if ($request->input('fieldset_id')=='') {
            $model->fieldset_id = null;
        } else {
            $model->fieldset_id = e($request->input('fieldset_id'));
        }

        if ($model->save()) {
            return JsonResponse::create($model);
        } else {
            return JsonResponse::create(["error" => "Failed validation: ".print_r($model->getErrors()->all('<li>:message</li>'), true)], 500);
        }
    }


    /**
    * Returns a view containing the asset model edit form.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @param int $modelId
    * @return View
    */
    public function edit($modelId = null)
    {
        // Check if the model exists
        if (is_null($item = AssetModel::find($modelId))) {
            // Redirect to the model management page
            return redirect()->route('models.index')->with('error', trans('admin/models/message.does_not_exist'));
        }

        $view = View::make('models/edit', compact('item'));
        $view->with('category_list', Helper::categoryList('asset'));
        $view->with('depreciation_list', Helper::depreciationList());
        $view->with('manufacturer_list', Helper::manufacturerList());
        return $view;
    }


    /**
    * Validates and processes form data from the edit
    * Asset Model form based on the model ID passed.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @param int $modelId
    * @return Redirect
    */
    public function update(Request $request, $modelId = null)
    {
        // Check if the model exists
        if (is_null($model = AssetModel::find($modelId))) {
            // Redirect to the models management page
            return redirect()->route('models.index')->with('error', trans('admin/models/message.does_not_exist'));
        }

        $model->depreciation_id = $request->input('depreciation_id');
        $model->eol = $request->input('eol');
        $model->name                = $request->input('name');
        $model->model_number        = $request->input('model_number');
        $model->manufacturer_id     = $request->input('manufacturer_id');
        $model->category_id         = $request->input('category_id');
        $model->notes               = $request->input('notes');

        $model->requestable = Input::has('requestable');

        if ($request->input('custom_fieldset')=='') {
            $model->fieldset_id = null;
        } else {
            $model->fieldset_id = $request->input('custom_fieldset');
        }

        if (Input::file('image')) {
            $image = Input::file('image');
            $file_name = str_random(25).".".$image->getClientOriginalExtension();
            $path = public_path('uploads/models/'.$file_name);
            Image::make($image->getRealPath())->resize(300, null, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            })->save($path);
            $model->image = $file_name;
        }

        if ($request->input('image_delete') == 1 && Input::file('image') == "") {
            $model->image = null;
        }

        if ($model->save()) {
            return redirect()->route("models.index")->with('success', trans('admin/models/message.update.success'));
        }
        return redirect()->back()->withInput()->withErrors($model->getErrors());
    }

    /**
    * Validate and delete the given Asset Model. An Asset Model
    * cannot be deleted if there are associated assets.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @param int $modelId
    * @return Redirect
    */
    public function destroy($modelId)
    {
        // Check if the model exists
        if (is_null($model = AssetModel::find($modelId))) {
            return redirect()->route('models.index')->with('error', trans('admin/models/message.not_found'));
        }

        if ($model->assets()->count() > 0) {
            // Throw an error that this model is associated with assets
            return redirect()->route('models.index')->with('error', trans('admin/models/message.assoc_users'));
        }
        // Delete the model
        $model->delete();

        // Redirect to the models management page
        return redirect()->route('models.index')->with('success', trans('admin/models/message.delete.success'));
    }


    /**
    * Restore a given Asset Model (mark as un-deleted)
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @param int $modelId
    * @return Redirect
    */
    public function getRestore($modelId = null)
    {

        // Get user information
        $model = AssetModel::withTrashed()->find($modelId);

        if (isset($model->id)) {

            // Restore the model
            $model->restore();

            // Prepare the success message
            $success = trans('admin/models/message.restore.success');

            // Redirect back
            return redirect()->route('models.index')->with('success', $success);

        }
        return redirect()->back()->with('error', trans('admin/models/message.not_found'));

    }


    /**
    * Get the model information to present to the model view page
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @param int $modelId
    * @return View
    */
    public function show($modelId = null)
    {
        $model = AssetModel::withTrashed()->find($modelId);

        if (isset($model->id)) {
            return View::make('models/view', compact('model'));
        }
        // Prepare the error message
        $error = trans('admin/models/message.does_not_exist', compact('id'));

        // Redirect to the user management page
        return redirect()->route('models.index')->with('error', $error);
    }

    /**
    * Get the clone page to clone a model
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @param int $modelId
    * @return View
    */
    public function getClone($modelId = null)
    {
        // Check if the model exists
        if (is_null($model_to_clone = AssetModel::find($modelId))) {
            return redirect()->route('models.index')->with('error', trans('admin/models/message.does_not_exist'));
        }

        $model = clone $model_to_clone;
        $model->id = null;

        // Show the page
        $view = View::make('models/edit');
        $view->with('category_list', Helper::categoryList('asset'));
        $view->with('depreciation_list', Helper::depreciationList());
        $view->with('manufacturer_list', Helper::manufacturerList());
        $view->with('item', $model);
        $view->with('clone_model', $model_to_clone);
        return $view;

    }


    /**
    * Get the custom fields form
    *
    * @author [B. Wetherington] [<uberbrady@gmail.com>]
    * @since [v2.0]
    * @param int $modelId
    * @return View
    */
    public function getCustomFields($modelId)
    {
        $model = AssetModel::find($modelId);
        return View::make("models.custom_fields_form")->with("model", $model);
    }



    /**
     * Get the asset information to present to the model view detail page
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @since [v2.0]
     * @param Request $request
     * @param $modelID
     * @return String JSON
     * @internal param int $modelId
     */
    public function getDataView(Request $request, $modelID)
    {
        $assets = Asset::where('model_id', '=', $modelID)->with('company', 'assetstatus');

        if (Input::has('search')) {
            $assets = $assets->TextSearch(e($request->input('search')));
        }
        $offset = request('offset', 0);
        $limit = request('limit', 50);


        $allowed_columns = ['name', 'serial','asset_tag'];
        $order = $request->input('order') === 'asc' ? 'asc' : 'desc';
        $sort = in_array($request->input('sort'), $allowed_columns) ? e($request->input('sort')) : 'created_at';

        $assets = $assets->orderBy($sort, $order);

        $assetsCount = $assets->count();
        $assets = $assets->skip($offset)->take($limit)->get();

        $rows = array();

        $all_custom_fields = CustomField::all();
        foreach ($assets as $asset) {

            $rows[] = $asset->present()->forDataTable($all_custom_fields);
        }

        $data = array('total' => $assetsCount, 'rows' => $rows);

        return $data;
    }
}
