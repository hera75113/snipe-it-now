<?php
namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Http\Requests\ImageUploadRequest;
use App\Models\CustomField;
use App\Models\Manufacturer;
use Auth;
use Exception;
use Gate;
use Input;
use Lang;
use Redirect;
use Str;
use View;
use Illuminate\Http\Request;
use Image;

/**
 * This controller handles all actions related to Manufacturers for
 * the Snipe-IT Asset Management application.
 *
 * @version    v1.0
 */
class ManufacturersController extends Controller
{
    /**
    * Returns a view that invokes the ajax tables which actually contains
    * the content for the manufacturers listing, which is generated in getDatatable.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @see Api\ManufacturersController::index() method that generates the JSON response
    * @since [v1.0]
    * @return \Illuminate\Contracts\View\View
     */
    public function index()
    {
        return view('manufacturers/index', compact('manufacturers'));
    }


    /**
    * Returns a view that displays a form to create a new manufacturer.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @see ManufacturersController::store()
    * @since [v1.0]
    * @return \Illuminate\Contracts\View\View
     */
    public function create()
    {
        return view('manufacturers/edit')->with('item', new Manufacturer);
    }


    /**
     * Validates and stores the data for a new manufacturer.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @see ManufacturersController::create()
     * @since [v1.0]
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(ImageUploadRequest $request)
    {

        $manufacturer = new Manufacturer;
        $manufacturer->name            = $request->input('name');
        $manufacturer->user_id          = Auth::user()->id;
        $manufacturer->url     = $request->input('url');
        $manufacturer->support_url     = $request->input('support_url');
        $manufacturer->support_phone    = $request->input('support_phone');
        $manufacturer->support_email    = $request->input('support_email');


        if ($request->file('image')) {
            $image = $request->file('image');
            $file_name = str_slug($image->getClientOriginalName()).".".$image->getClientOriginalExtension();
            $path = public_path('uploads/manufacturers/'.$file_name);
            Image::make($image->getRealPath())->resize(200, null, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            })->save($path);
            $manufacturer->image = $file_name;
        }



        if ($manufacturer->save()) {
            return redirect()->route('manufacturers.index')->with('success', trans('admin/manufacturers/message.create.success'));
        }
        return redirect()->back()->withInput()->withErrors($manufacturer->getErrors());
    }

    /**
    * Returns a view that displays a form to edit a manufacturer.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @see ManufacturersController::update()
    * @param int $manufacturerId
    * @since [v1.0]
    * @return \Illuminate\Contracts\View\View
     */
    public function edit($id = null)
    {
        // Check if the manufacturer exists
        if (is_null($item = Manufacturer::find($id))) {
            return redirect()->route('manufacturers.index')->with('error', trans('admin/manufacturers/message.does_not_exist'));
        }
        // Show the page
        return view('manufacturers/edit', compact('item'));
    }


    /**
     * Validates and stores the updated manufacturer data.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @see ManufacturersController::getEdit()
     * @param Request $request
     * @param int $manufacturerId
     * @return \Illuminate\Http\RedirectResponse
     * @since [v1.0]
     */
    public function update(Request $request, $manufacturerId = null)
    {
        // Check if the manufacturer exists
        if (is_null($manufacturer = Manufacturer::find($manufacturerId))) {
            // Redirect to the manufacturer  page
            return redirect()->route('manufacturers.index')->with('error', trans('admin/manufacturers/message.does_not_exist'));
        }

        // Save the  data
        $manufacturer->name     = $request->input('name');
        $manufacturer->url     = $request->input('url');
        $manufacturer->support_url     = $request->input('support_url');
        $manufacturer->support_phone    = $request->input('support_phone');
        $manufacturer->support_email    = $request->input('support_email');

        if ($request->file('image')) {
            $image = $request->file('image');
            $file_name = str_slug($image->getClientOriginalName()).".".$image->getClientOriginalExtension();
            $path = public_path('uploads/manufacturers/'.$file_name);
            $old_image = $path.$manufacturer->image;

            try  {
                unlink($old_image);
            } catch (\Exception $e) {
                \Log::error($e);
            }


            Image::make($image->getRealPath())->resize(200, null, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            })->save($path);
            $manufacturer->image = $file_name;
        } elseif ($request->input('image_delete')=='1') {
            $manufacturer->image = null;
        }


        if ($manufacturer->save()) {
            return redirect()->route('manufacturers.index')->with('success', trans('admin/manufacturers/message.update.success'));
        }
        return redirect()->back()->withInput()->withErrors($manufacturer->getErrors());
    }

    /**
    * Deletes a manufacturer.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @param int $manufacturerId
    * @since [v1.0]
    * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($manufacturerId)
    {
        // Check if the manufacturer exists
        if (is_null($manufacturer = Manufacturer::find($manufacturerId))) {
            // Redirect to the manufacturers page
            return redirect()->route('manufacturers.index')->with('error', trans('admin/manufacturers/message.not_found'));
        }

        if ($manufacturer->has_models() > 0) {
            // Redirect to the asset management page
            return redirect()->route('manufacturers.index')->with('error', trans('admin/manufacturers/message.assoc_users'));
        }

        if ($manufacturer->image) {
            try  {
                unlink(public_path().'/uploads/manufacturers/'.$manufacturer->image);
            } catch (\Exception $e) {
                \Log::error($e);
            }
        }


        // Delete the manufacturer
        $manufacturer->delete();
        // Redirect to the manufacturers management page
        return redirect()->route('manufacturers.index')->with('success', trans('admin/manufacturers/message.delete.success'));
    }

    /**
    * Returns a view that invokes the ajax tables which actually contains
    * the content for the manufacturers detail listing, which is generated via API.
    * This data contains a listing of all assets that belong to that manufacturer.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @param int $manufacturerId
    * @since [v1.0]
    * @return \Illuminate\Contracts\View\View
     */
    public function show($manufacturerId = null)
    {
        $manufacturer = Manufacturer::find($manufacturerId);

        if (isset($manufacturer->id)) {
            return view('manufacturers/view', compact('manufacturer'));
        }

        $error = trans('admin/manufacturers/message.does_not_exist');
        // Redirect to the user management page
        return redirect()->route('manufacturers.index')->with('error', $error);
    }

   


}
