<?php
namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Http\Requests\AssetCheckinRequest;
use App\Http\Requests\AssetCheckoutRequest;
use App\Http\Requests\AssetFileRequest;
use App\Http\Requests\AssetRequest;
use App\Http\Requests\ItemImportRequest;
use App\Models\Actionlog;
use App\Models\Asset;
use App\Models\AssetModel;
use App\Models\Company;
use App\Models\CustomField;
use App\Models\Import;
use App\Models\Location;
use App\Models\Setting;
use App\Models\User;
use Artisan;
use Auth;
use Carbon\Carbon;
use Config;
use DB;
use Gate;
use Illuminate\Http\Request;
use Image;
use Input;
use Lang;
use League\Csv\Reader;
use Log;
use Mail;
use Paginator;
use Redirect;
use Response;
use Slack;
use Str;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use TCPDF;
use Validator;
use View;

/**
 * This class controls all actions related to assets for
 * the Snipe-IT Asset Management application.
 *
 * @version    v1.0
 * @author [A. Gianotto] [<snipe@snipe.net>]
 */
class AssetsController extends Controller
{
    protected $qrCodeDimensions = array( 'height' => 3.5, 'width' => 3.5);
    protected $barCodeDimensions = array( 'height' => 2, 'width' => 22);


    public function __construct()
    {
        $this->middleware('auth');
        parent::__construct();
    }

    /**
    * Returns a view that invokes the ajax tables which actually contains
    * the content for the assets listing, which is generated in getDatatable.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @see AssetController::getDatatable() method that generates the JSON response
    * @since [v1.0]
    * @return View
    */
    public function index(Request $request)
    {
        $this->authorize('index', Asset::class);
        if ($request->has('company_id')) {
            $company = Company::find($request->input('company_id'));
        } else {
            $company = null;
        }
        return view('hardware/index')->with('company',$company);
    }

    /**
     * Searches the assets table by asset tag, and redirects if it finds one
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @since [v3.0]
     * @return Redirect
     */
    public function getAssetByTag()
    {
        $topsearch = (Input::get('topsearch')=="true");

        if (!$asset = Asset::where('asset_tag', '=', Input::get('assetTag'))->first()) {
            return redirect()->route('hardware.index')->with('error', trans('admin/hardware/message.does_not_exist'));
        }
        $this->authorize('view', $asset);
        return redirect()->route('hardware.show', $asset->id)->with('topsearch', $topsearch);

    }

    /**
     * Returns a view that presents a form to create a new asset.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @since [v1.0]
     * @param Request $request
     * @return View
     * @internal param int $model_id
     */
    public function create(Request $request)
    {
        $this->authorize('create', Asset::class);
        $view = View::make('hardware/edit')
            ->with('supplier_list', Helper::suppliersList())
            ->with('company_list', Helper::companyList())
            ->with('model_list', Helper::modelList())
            ->with('statuslabel_list', Helper::statusLabelList())
            ->with('location_list', Helper::locationsList())
            ->with('item', new Asset)
            ->with('manufacturer', Helper::manufacturerList()) //handled in modal now?
            ->with('category', Helper::categoryList('asset')) //handled in modal now?
            ->with('statuslabel_types', Helper::statusTypeList()) //handled in modal now?
            ->with('users_list', Helper::usersList())
            ->with('assets_list', Helper::assetsList())
            ->with('locations_list', Helper::locationsList());

        if ($request->has('model_id')) {
            $selected_model = AssetModel::find($request->input('model_id'));
            $view->with('selected_model', $selected_model);
        } else {
        }

        return $view;
    }

    /**
    * Validate and process new asset form data.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @return Redirect
    */
    public function store(AssetRequest $request)
    {
        $this->authorize(Asset::class);
        // create a new model instance
        $asset = new Asset();
        $asset->model()->associate(AssetModel::find(e(Input::get('model_id'))));

        $asset->name                    = Input::get('name');
        $asset->serial                  = Input::get('serial');
        $asset->company_id              = Company::getIdForCurrentUser(Input::get('company_id'));
        $asset->model_id                = Input::get('model_id');
        $asset->order_number            = Input::get('order_number');
        $asset->notes                   = Input::get('notes');
        $asset->asset_tag               = Input::get('asset_tag');
        $asset->user_id                 = Auth::id();
        $asset->archived                = '0';
        $asset->physical                = '1';
        $asset->depreciate              = '0';
        $asset->status_id               = request('status_id', 0);
        $asset->warranty_months         = request('warranty_months', null);
        $asset->purchase_cost           = Helper::ParseFloat(Input::get('purchase_cost'));
        $asset->purchase_date           = request('purchase_date', null);
        $asset->assigned_to             = request('assigned_to', null);
        $asset->supplier_id             = request('supplier_id', 0);
        $asset->requestable             = request('requestable', 0);
        $asset->rtd_location_id         = request('rtd_location_id', null);

        // Create the image (if one was chosen.)
        if (Input::has('image')) {

            $image = Input::get('image');

            // After modification, the image is prefixed by mime info like the following:
            // data:image/jpeg;base64,; This causes the image library to be unhappy, so we need to remove it.
            $header = explode(';', $image, 2)[0];
            // Grab the image type from the header while we're at it.
            $extension = substr($header, strpos($header, '/')+1);
            // Start reading the image after the first comma, postceding the base64.
            $image = substr($image, strpos($image, ',')+1);

            $file_name = str_random(25).".".$extension;

            $directory= public_path('uploads/assets/');
            // Check if the uploads directory exists.  If not, try to create it.
            if (!file_exists($directory)) {
                mkdir($directory, 0755, true);
            }
            $path = public_path('uploads/assets/'.$file_name);
            try {
                Image::make($image)->resize(500, 500, function ($constraint) {
                    $constraint->aspectRatio();
                    $constraint->upsize();
                })->save($path);
                $asset->image = $file_name;
            } catch (\Exception $e) {
                \Input::flash();
                $messageBag = new \Illuminate\Support\MessageBag();
                $messageBag->add('image', $e->getMessage());
                \Session()->flash('errors', \Session::get('errors', new \Illuminate\Support\ViewErrorBag)
                    ->put('default', $messageBag));
                return response()->json(['image' => $e->getMessage()], 422);
            }

        }


        // Update custom fields in the database.
        // Validation for these fields is handled through the AssetRequest form request
        // FIXME: No idea why this is returning a Builder error on db_column_name.
        // Need to investigate and fix. Using static method for now.
        $model = AssetModel::find($request->get('model_id'));



        if ($model->fieldset) {
            foreach ($model->fieldset->fields as $field) {

                if ($field->field_encrypted=='1') {
                    if (Gate::allows('admin')) {
                        $asset->{$field->convertUnicodeDbSlug()} = \Crypt::encrypt($request->input($field->convertUnicodeDbSlug()));
                    }

                } else {
                    $asset->{$field->convertUnicodeDbSlug()} = $request->input($field->convertUnicodeDbSlug());
                }

            }
        }

            // Was the asset created?
        if ($asset->save()) {
            $asset->logCreate();
            if(request('assigned_user')) {
                $target = User::find(request('assigned_user'));
            } elseif(request('assigned_asset')) {
                $target = Asset::find(request('assigned_asset'));
            } elseif(request('assigned_location')) {
                $target = Location::find(request('assigned_location'));
            }
            if (isset($target)) {
                $asset->checkOut($target, Auth::user(), date('Y-m-d H:i:s'), '', 'Checked out on asset creation', e(Input::get('name')));
            }
            // Redirect to the asset listing page
            \Session::flash('success', trans('admin/hardware/message.create.success'));
            return response()->json(['redirect_url' => route('hardware.index')]);
        }
        \Input::flash();
        \Session::flash('errors', $asset->getErrors());
        return response()->json(['errors' => $asset->getErrors()], 500);
    }

    /**
    * Returns a view that presents a form to edit an existing asset.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @param int $assetId
    * @since [v1.0]
    * @return View
    */
    public function edit($assetId = null)
    {
        if (!$item = Asset::find($assetId)) {
            // Redirect to the asset management page with error
            return redirect()->route('hardware.index')->with('error', trans('admin/hardware/message.does_not_exist'));
        }
        //Handles company checks and permissions.
        $this->authorize($item);

        return view('hardware/edit', compact('item'))
        ->with('model_list', Helper::modelList())
        ->with('supplier_list', Helper::suppliersList())
        ->with('company_list', Helper::companyList())
        ->with('locations_list', Helper::locationsList())
        ->with('statuslabel_list', Helper::statusLabelList())
        ->with('assigned_to', Helper::usersList())
        ->with('manufacturer', Helper::manufacturerList())
        ->with('statuslabel_types', Helper::statusTypeList())
        ->with('category', Helper::categoryList('asset'));
    }


    /**
    * Validate and process asset edit form.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @param int $assetId
    * @since [v1.0]
    * @return Redirect
    */

    public function update(AssetRequest $request, $assetId = null)
    {

        // Check if the asset exists
        if (!$asset = Asset::find($assetId)) {
            // Redirect to the asset management page with error
            return redirect()->route('hardware.index')->with('error', trans('admin/hardware/message.does_not_exist'));
        }
        $this->authorize($asset);

        $asset->status_id = $request->input('status_id', null);
        $asset->warranty_months = $request->input('warranty_months', null);
        $asset->purchase_cost = Helper::ParseFloat($request->input('purchase_cost', null));
        $asset->purchase_date = $request->input('purchase_date', null);
        $asset->supplier_id = $request->input('supplier_id', null);

        // If the box isn't checked, it's not in the request at all.
        $asset->requestable = $request->has('requestable');
        $asset->rtd_location_id = $request->input('rtd_location_id', null);

        if ($request->has('image_delete')) {
            unlink(public_path().'/uploads/assets/'.$asset->image);
            $asset->image = '';
        }


        // Update the asset data
        $asset->name         = $request->input('name');
        $asset->serial       = $request->input('serial');
        $asset->company_id   = Company::getIdForCurrentUser($request->input('company_id'));
        $asset->model_id     = $request->input('model_id');
        $asset->order_number = $request->input('order_number');
        $asset->asset_tag    = $request->input('asset_tag');
        $asset->notes        = $request->input('notes');
        $asset->physical     = '1';

        // Update the image
        if (Input::has('image')) {
            $image = $request->input('image');
            // See postCreate for more explaination of the following.
            $header = explode(';', $image, 2)[0];
            $extension = substr($header, strpos($header, '/')+1);
            $image = substr($image, strpos($image, ',')+1);

            $directory= public_path('uploads/assets/');
            // Check if the uploads directory exists.  If not, try to create it.
            if (!file_exists($directory)) {
                mkdir($directory, 0755, true);
            }

            $file_name = str_random(25).".".$extension;
            $path = public_path('uploads/assets/'.$file_name);
            try {
                Image::make($image)->resize(500, 500, function ($constraint) {
                    $constraint->aspectRatio();
                    $constraint->upsize();
                })->save($path);
                $asset->image = $file_name;
            } catch (\Exception $e) {
                \Input::flash();
                $messageBag = new \Illuminate\Support\MessageBag();
                $messageBag->add('image', $e->getMessage());
                \Session()->flash('errors', \Session::get('errors', new \Illuminate\Support\ViewErrorBag)
                    ->put('default', $messageBag));
                return response()->json(['image' => $e->getMessage()], 422);
            }
            $asset->image = $file_name;
        }

        // Update custom fields in the database.
        // Validation for these fields is handlded through the AssetRequest form request
        // FIXME: No idea why this is returning a Builder error on db_column_name.
        // Need to investigate and fix. Using static method for now.
        $model = AssetModel::find($request->get('model_id'));
        if ($model->fieldset) {
            foreach ($model->fieldset->fields as $field) {
                if ($field->field_encrypted=='1') {
                    if (Gate::allows('admin')) {
                        $asset->{$field->convertUnicodeDbSlug()} = \Crypt::encrypt(e($request->input($field->convertUnicodeDbSlug())));
                    }

                } else {
                    $asset->{$field->convertUnicodeDbSlug()} = $request->input($field->convertUnicodeDbSlug());
                }
            }
        }


        if ($asset->save()) {
            // Redirect to the new asset page
            \Session::flash('success', trans('admin/hardware/message.update.success'));
            return response()->json(['redirect_url' => route("hardware.show", $assetId)]);
        }
        \Input::flash();
        \Session::flash('errors', $asset->getErrors());
        return response()->json(['errors' => $asset->getErrors()], 500);

    }

    /**
    * Delete a given asset (mark as deleted).
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @param int $assetId
    * @since [v1.0]
    * @return Redirect
    */
    public function destroy($assetId)
    {
        // Check if the asset exists
        if (is_null($asset = Asset::find($assetId))) {
            // Redirect to the asset management page with error
            return redirect()->route('hardware.index')->with('error', trans('admin/hardware/message.does_not_exist'));
        }

        $this->authorize('delete', $asset);

        DB::table('assets')
        ->where('id', $asset->id)
        ->update(array('assigned_to' => null));

        $asset->delete();

        // Redirect to the asset management page
        return redirect()->route('hardware.index')->with('success', trans('admin/hardware/message.delete.success'));
    }

    /**
    * Returns a view that presents a form to check an asset out to a
    * user.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @param int $assetId
    * @since [v1.0]
    * @return View
    */
    public function getCheckout($assetId)
    {
        // Check if the asset exists
        if (is_null($asset = Asset::find(e($assetId)))) {
            // Redirect to the asset management page with error
            return redirect()->route('hardware.index')->with('error', trans('admin/hardware/message.does_not_exist'));
        }

        $this->authorize('checkout', $asset);

        // Get the dropdown of users and then pass it to the checkout view
        return view('hardware/checkout', compact('asset'))
            ->with('users_list', Helper::usersList())
            ->with('assets_list', Helper::assetsList())
            ->with('locations_list', Helper::locationsList());

    }

    /**
     * Validate and process the form data to check out an asset to a user.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @param AssetCheckoutRequest $request
     * @param int $assetId
     * @return Redirect
     * @since [v1.0]
     */
    public function postCheckout(AssetCheckoutRequest $request, $assetId)
    {
        // Check if the asset exists
        if (!$asset = Asset::find($assetId)) {
            return redirect()->route('hardware.index')->with('error', trans('admin/hardware/message.does_not_exist'));
        } elseif (!$asset->availableForCheckout()) {
            return redirect()->route('hardware.index')->with('error', trans('admin/hardware/message.checkout.not_available'));
        }
        $this->authorize('checkout', $asset);

        if(request('assigned_user')) {
            $target = User::find(request('assigned_user'));
        } elseif(request('assigned_asset')) {
            $target = Asset::find(request('assigned_asset'));
        } elseif(request('assigned_location')) {
            $target = Location::find(request('assigned_location'));
        }
        // $user = User::find(Input::get('assigned_to'));
        $admin = Auth::user();

        if ((Input::has('checkout_at')) && (Input::get('checkout_at')!= date("Y-m-d"))) {
            $checkout_at = Input::get('checkout_at');
        } else {
            $checkout_at = date("Y-m-d H:i:s");
        }

        if (Input::has('expected_checkin')) {
            $expected_checkin = Input::get('expected_checkin');
        } else {
            $expected_checkin = '';
        }
        if ($asset->checkOut($target, $admin, $checkout_at, $expected_checkin, e(Input::get('note')), Input::get('name'))) {
//           Redirect to the new asset page
            return redirect()->route("hardware.index")->with('success', trans('admin/hardware/message.checkout.success'));
        }

      // Redirect to the asset management page with error
        return redirect()->to("hardware/$assetId/checkout")->with('error', trans('admin/hardware/message.checkout.error'))->withErrors($asset->getErrors());
    }


    /**
    * Returns a view that presents a form to check an asset back into inventory.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @param int $assetId
    * @param string $backto
    * @since [v1.0]
    * @return View
    */
    public function getCheckin($assetId, $backto = null)
    {
        // Check if the asset exists
        if (is_null($asset = Asset::find($assetId))) {
            // Redirect to the asset management page with error
            return redirect()->route('hardware.index')->with('error', trans('admin/hardware/message.does_not_exist'));
        }

        $this->authorize('checkin', $asset);
        return view('hardware/checkin', compact('asset'))->with('statusLabel_list', Helper::statusLabelList())->with('backto', $backto);

    }


    /**
     * Validate and process the form data to check an asset back into inventory.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @param AssetCheckinRequest $request
     * @param int $assetId
     * @param null $backto
     * @return Redirect
     * @since [v1.0]
     */
    public function postCheckin(AssetCheckinRequest $request, $assetId = null, $backto = null)
    {
        // Check if the asset exists
        if (is_null($asset = Asset::find($assetId))) {
            // Redirect to the asset management page with error
            return redirect()->route('hardware.index')->with('error', trans('admin/hardware/message.does_not_exist'));
        }

        $this->authorize('checkin', $asset);

        $admin = Auth::user();
        $user = $asset->assignedUser;
        if (is_null($target = $asset->assignedTo)) {
            return redirect()->route('hardware.index')->with('error', trans('admin/hardware/message.checkin.already_checked_in'));
        }

        // This is just used for the redirect
        $return_to = $asset->assigned_to;
        $asset->expected_checkin = null;
        $asset->last_checkout = null;
        $asset->assigned_to = null;
        $asset->assignedTo()->disassociate($asset);
        $asset->accepted = null;
        $asset->name = e(Input::get('name'));

        if (Input::has('status_id')) {
            $asset->status_id =  e(Input::get('status_id'));
        }
        // Was the asset updated?
        if ($asset->save()) {
            $logaction = $asset->logCheckin($target, e(request('note')));

            $data['log_id'] = $logaction->id;
            $data['first_name'] = get_class($target) == User::class ? $target->first_name : '';
            $data['item_name'] = $asset->present()->name();
            $data['checkin_date'] = $logaction->created_at;
            $data['item_tag'] = $asset->asset_tag;
            $data['item_serial'] = $asset->serial;
            $data['note'] = $logaction->note;

            if ((($asset->checkin_email()=='1')) && (isset($user)) && (!config('app.lock_passwords'))) {
                Mail::send('emails.checkin-asset', $data, function ($m) use ($user) {
                    $m->to($user->email, $user->first_name . ' ' . $user->last_name);
                    $m->replyTo(config('mail.reply_to.address'), config('mail.reply_to.name'));
                    $m->subject(trans('mail.Confirm_Asset_Checkin'));
                });
            }

            if ($backto=='user') {
                return redirect()->to("admin/users/".$return_to.'/view')->with('success', trans('admin/hardware/message.checkin.success'));
            }
            return redirect()->route("hardware.index")->with('success', trans('admin/hardware/message.checkin.success'));
        }

        // Redirect to the asset management page with error
        return redirect()->route("hardware.index")->with('error', trans('admin/hardware/message.checkin.error'));
    }


    /**
    * Returns a view that presents information about an asset for detail view.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @param int $assetId
    * @since [v1.0]
    * @return View
    */
    public function show($assetId = null)
    {

        $asset = Asset::withTrashed()->find($assetId);
        $this->authorize('view', $asset);
        $settings = Setting::getSettings();
        $audit_log = Actionlog::where('action_type','=','audit')->where('item_id','=',$assetId)->where('item_type','=',Asset::class)->orderBy('created_at','DESC')->first();


        if (isset($asset)) {

            if (!is_null($asset->assetloc)) {
                $use_currency = $asset->assetloc->currency;
            } else {

                if ($settings->default_currency!='') {
                    $use_currency = $settings->default_currency;
                } else {
                    $use_currency = trans('general.currency');
                }
            }

            $qr_code = (object) array(
                'display' => $settings->qr_code == '1',
                'url' => route('qr_code/hardware', $asset->id)
            );

            return view('hardware/view', compact('asset', 'qr_code', 'settings'))
                ->with('use_currency', $use_currency)->with('audit_log',$audit_log);
        }

        return redirect()->route('hardware.index')->with('error', trans('admin/hardware/message.does_not_exist', compact('id')));
    }

    /**
    * Return a QR code for the asset
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @param int $assetId
    * @since [v1.0]
    * @return Response
    */
    public function getQrCode($assetId = null)
    {
        $settings = Setting::getSettings();

        if ($settings->qr_code == '1') {
            $asset = Asset::find($assetId);
            $size = Helper::barcodeDimensions($settings->barcode_type);
            $qr_file = public_path().'/uploads/barcodes/qr-'.str_slug($asset->asset_tag).'.png';

            if (isset($asset->id,$asset->asset_tag)) {

                if (file_exists($qr_file)) {
                    $header = ['Content-type' => 'image/png'];
                    return response()->file($qr_file, $header);
                } else {
                    $barcode = new \Com\Tecnick\Barcode\Barcode();
                    $barcode_obj =  $barcode->getBarcodeObj($settings->barcode_type, route('hardware.show', $asset->id), $size['height'], $size['width'], 'black', array(-2, -2, -2, -2));
                    file_put_contents($qr_file, $barcode_obj->getPngData());
                    return response($barcode_obj->getPngData())->header('Content-type', 'image/png');
                }
            }
        }

    }


    /**
     * Return a 2D barcode for the asset
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @param int $assetId
     * @since [v1.0]
     * @return Response
     */
    public function getBarCode($assetId = null)
    {
        $settings = Setting::getSettings();
        $asset = Asset::find($assetId);
        $barcode_file = public_path().'/uploads/barcodes/'.str_slug($settings->alt_barcode).'-'.str_slug($asset->asset_tag).'.png';

        if (isset($asset->id,$asset->asset_tag)) {

            if (file_exists($barcode_file)) {
                $header = ['Content-type' => 'image/png'];
                return response()->file($barcode_file, $header);
            } else {
                $barcode = new \Com\Tecnick\Barcode\Barcode();
                $barcode_obj = $barcode->getBarcodeObj($settings->alt_barcode, $asset->asset_tag, 250, 20);
                file_put_contents($barcode_file, $barcode_obj->getPngData());
                return response($barcode_obj->getPngData())->header('Content-type', 'image/png');
            }
        }

    }

    /**
    * Returns a view that presents a form to clone an asset.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @param int $assetId
    * @since [v1.0]
    * @return View
    */
    public function getClone($assetId = null)
    {
        // Check if the asset exists
        if (is_null($asset_to_clone = Asset::find($assetId))) {
            // Redirect to the asset management page
            return redirect()->route('hardware.index')->with('error', trans('admin/hardware/message.does_not_exist'));
        }

        $this->authorize('create', $asset_to_clone);

        $asset = clone $asset_to_clone;
        $asset->id = null;
        $asset->asset_tag = '';
        $asset->serial = '';
        $asset->assigned_to = '';

        return view('hardware/edit')
        ->with('supplier_list', Helper::suppliersList())
        ->with('model_list', Helper::modelList())
        ->with('statuslabel_list', Helper::statusLabelList())
        ->with('statuslabel_types', Helper::statusTypeList())
        ->with('assigned_to', Helper::usersList())
        ->with('item', $asset)
        ->with('locations_list', Helper::locationsList())
        ->with('manufacturer', Helper::manufacturerList())
        ->with('category', Helper::categoryList('asset'))
        ->with('users_list', Helper::usersList())
        ->with('assets_list', Helper::assetsList())
        ->with('company_list', Helper::companyList());
    }

    /**
     * Return history import view
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @since [v1.0]
     * @return View
     */
    public function getImportHistory()
    {
        $this->authorize('checkout', Asset::class);
        return view('hardware/history');
    }

    /**
     * Import history
     *
     * This needs a LOT of love. It's done very inelegantly right now, and there are
     * a ton of optimizations that could (and should) be done.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @since [v3.3]
     * @return View
     */
    public function postImportHistory(Request $request)
    {

        if (!ini_get("auto_detect_line_endings")) {
            ini_set("auto_detect_line_endings", '1');
        }

        $csv = Reader::createFromPath(Input::file('user_import_csv'));
        $csv->setNewline("\r\n");
        //get the first row, usually the CSV header
        //$headers = $csv->fetchOne();

        $results = $csv->fetchAssoc();
        $item = array();
        $status = array();
        $status['error'] = array();
        $status['success'] = array();


        foreach ($results as $row) {

            if (is_array($row)) {

                $row = array_change_key_case($row, CASE_LOWER);
                $asset_tag = Helper::array_smart_fetch($row, "asset tag");
                if (!array_key_exists($asset_tag, $item)) {
                    $item[$asset_tag] = array();
                }
                $batch_counter = count($item[$asset_tag]);

                $item[$asset_tag][$batch_counter]['checkout_date'] = Carbon::parse(Helper::array_smart_fetch($row, "date"))->format('Y-m-d H:i:s');

                $item[$asset_tag][$batch_counter]['asset_tag'] = Helper::array_smart_fetch($row, "asset tag");
                $item[$asset_tag][$batch_counter]['name'] = Helper::array_smart_fetch($row, "name");
                $item[$asset_tag][$batch_counter]['email'] = Helper::array_smart_fetch($row, "email");

                if ($asset = Asset::where('asset_tag', '=', $asset_tag)->first()) {

                    $item[$asset_tag][$batch_counter]['asset_id'] = $asset->id;

                    $base_username = User::generateFormattedNameFromFullName(Setting::getSettings()->username_format, $item[$asset_tag][$batch_counter]['name']);
                    $user = User::where('username', '=', $base_username['username']);
                    $user_query = ' on username '.$base_username['username'];

                    if ($request->input('match_firstnamelastname')=='1') {
                        $firstnamedotlastname = User::generateFormattedNameFromFullName('firstname.lastname', $item[$asset_tag][$batch_counter]['name']);
                        $item[$asset_tag][$batch_counter]['username'][] = $firstnamedotlastname['username'];
                        $user->orWhere('username', '=', $firstnamedotlastname['username']);
                        $user_query .= ', or on username '.$firstnamedotlastname['username'];
                    }

                    if ($request->input('match_flastname')=='1') {
                        $flastname = User::generateFormattedNameFromFullName('filastname', $item[$asset_tag][$batch_counter]['name']);
                        $item[$asset_tag][$batch_counter]['username'][] = $flastname['username'];
                        $user->orWhere('username', '=', $flastname['username']);
                        $user_query .= ', or on username '.$flastname['username'];
                    }
                    if ($request->input('match_firstname')=='1') {
                        $firstname = User::generateFormattedNameFromFullName('firstname', $item[$asset_tag][$batch_counter]['name']);
                        $item[$asset_tag][$batch_counter]['username'][] = $firstname['username'];
                        $user->orWhere('username', '=', $firstname['username']);
                        $user_query .= ', or on username '.$firstname['username'];
                    }
                    if ($request->input('match_email')=='1') {
                        if ($item[$asset_tag][$batch_counter]['email']=='') {
                            $item[$asset_tag][$batch_counter]['username'][] = $user_email = User::generateEmailFromFullName($item[$asset_tag][$batch_counter]['name']);
                            $user->orWhere('username', '=', $user_email);
                            $user_query .= ', or on username '.$user_email;
                        }
                    }

                    // A matching user was found
                    if ($user = $user->first()) {
                        $item[$asset_tag][$batch_counter]['checkedout_to'] = $user->id;
                        $item[$asset_tag][$batch_counter]['user_id'] = $user->id;

                        Actionlog::firstOrCreate(array(
                                'item_id' => $asset->id,
                                'item_type' => Asset::class,
                                'user_id' =>  Auth::user()->id,
                                'note' => 'Checkout imported by '.Auth::user()->present()->fullName().' from history importer',
                                'target_id' => $item[$asset_tag][$batch_counter]['user_id'],
                                'target_type' => User::class,
                                'created_at' =>  $item[$asset_tag][$batch_counter]['checkout_date'],
                                'action_type'   => 'checkout',
                            ));

                        $asset->assigned_to = $user->id;

                        if ($asset->save()) {
                            $status['success'][]['asset'][$asset_tag]['msg'] = 'Asset successfully matched for '.Helper::array_smart_fetch($row, "name").$user_query.' on '.$item[$asset_tag][$batch_counter]['checkout_date'];
                        } else {
                            $status['error'][]['asset'][$asset_tag]['msg'] = 'Asset and user was matched but could not be saved.';
                        }

                    } else {
                        $item[$asset_tag][$batch_counter]['checkedout_to'] = null;
                        $status['error'][]['user'][Helper::array_smart_fetch($row, "name")]['msg'] = 'User does not exist so no checkin log was created.';
                    }

                } else {
                    $item[$asset_tag][$batch_counter]['asset_id'] = null;
                    $status['error'][]['asset'][$asset_tag]['msg'] = 'Asset does not exist so no match was attempted.';
                }
            }
        }

        // Loop through and backfill the checkins
        foreach ($item as $key => $asset_batch) {
            $total_in_batch = count($asset_batch);
            for ($x = 0; $x < $total_in_batch; $x++) {
                $next = $x + 1;

                // Only do this if a matching user was found
                if ((array_key_exists('checkedout_to', $asset_batch[$x])) && ($asset_batch[$x]['checkedout_to']!='')) {

                    if (($total_in_batch > 1) && ($x < $total_in_batch) && (array_key_exists($next, $asset_batch))) {
                        $checkin_date = Carbon::parse($asset_batch[$next]['checkout_date'])->subDay(1)->format('Y-m-d H:i:s');
                        $asset_batch[$x]['real_checkin'] = $checkin_date;

                        Actionlog::firstOrCreate(array(
                                'item_id' => $asset_batch[$x]['asset_id'],
                                'item_type' => Asset::class,
                                'user_id' => Auth::user()->id,
                                'note' => 'Checkin imported by ' . Auth::user()->present()->fullName() . ' from history importer',
                                'target_id' => null,
                                'created_at' => $checkin_date,
                                'action_type' => 'checkin'
                            ));
                    }
                }
            }
        }
        return view('hardware/history')->with('status', $status);
    }

    /**
    * Retore a deleted asset.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @param int $assetId
    * @since [v1.0]
    * @return View
    */
    public function getRestore($assetId = null)
    {
        // Get asset information
        $asset = Asset::withTrashed()->find($assetId);
        $this->authorize('delete', $asset);
        if (isset($asset->id)) {
            // Restore the asset
            Asset::withTrashed()->where('id', $assetId)->restore();
            return redirect()->route('hardware.index')->with('success', trans('admin/hardware/message.restore.success'));
        }
        return redirect()->route('hardware.index')->with('error', trans('admin/hardware/message.does_not_exist'));
    }


    /**
     * Upload a file to the server.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @param AssetFileRequest $request
     * @param int $assetId
     * @return Redirect
     * @since [v1.0]
     */
    public function postUpload(AssetFileRequest $request, $assetId = null)
    {

        if (!$asset = Asset::find($assetId)) {
            return redirect()->route('hardware.index')->with('error', trans('admin/hardware/message.does_not_exist'));
        }
        $this->authorize('update', $asset);

        $destinationPath = config('app.private_uploads').'/assets';

        if (Input::hasFile('assetfile')) {
            foreach (Input::file('assetfile') as $file) {
                $extension = $file->getClientOriginalExtension();
                $filename = 'hardware-'.$asset->id.'-'.str_random(8);
                $filename .= '-'.str_slug($file->getClientOriginalName()).'.'.$extension;
                $upload_success = $file->move($destinationPath, $filename);
                //Log the deletion of seats to the log
                $asset->logUpload($filename, e(Input::get('notes')));
            }
        } else {
            return redirect()->back()->with('error', trans('admin/hardware/message.upload.nofiles'));
        }

        if ($upload_success) {
            return redirect()->back()->with('success', trans('admin/hardware/message.upload.success'));
        }
        return redirect()->back()->with('error', trans('admin/hardware/message.upload.error'));
    }

    /**
    * Delete the associated file
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @param  int  $assetId
    * @param  int  $fileId
    * @since [v1.0]
    * @return View
    */
    public function getDeleteFile($assetId = null, $fileId = null)
    {
        $asset = Asset::find($assetId);
        $this->authorize('update', $asset);
        $destinationPath = config('app.private_uploads').'/imports/assets';

        // the asset is valid
        if (isset($asset->id)) {
            $this->authorize('update', $asset);

            $log = Actionlog::find($fileId);
            $full_filename = $destinationPath.'/'.$log->filename;
            if (file_exists($full_filename)) {
                unlink($destinationPath.'/'.$log->filename);
            }
            $log->delete();
            return redirect()->back()->with('success', trans('admin/hardware/message.deletefile.success'));

        }
        // Prepare the error message
        $error = trans('admin/hardware/message.does_not_exist', compact('id'));

        // Redirect to the hardware management page
        return redirect()->route('hardware.index')->with('error', $error);
    }

    /**
    * Check for permissions and display the file.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @param  int  $assetId
    * @param  int  $fileId
    * @since [v1.0]
    * @return View
    */
    public function displayFile($assetId = null, $fileId = null)
    {
        $asset = Asset::find($assetId);
        // the asset is valid
        if (isset($asset->id)) {
            $this->authorize('view', $asset);

            $log = Actionlog::find($fileId);
            $file = $log->get_src('assets');
            $filetype = Helper::checkUploadIsImage($file);

            if ($filetype) {
                  $contents = file_get_contents($file);
                  return Response::make($contents)->header('Content-Type', $filetype);
            }
            return Response::download($file);
        }
        // Prepare the error message
        $error = trans('admin/hardware/message.does_not_exist', compact('id'));

        // Redirect to the hardware management page
        return redirect()->route('hardware.index')->with('error', $error);
    }

    /**
     * Display the bulk edit page.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @return View
     * @internal param int $assetId
     * @since [v2.0]
     */
    public function postBulkEdit(Request $request)
    {
        $this->authorize('update', Asset::class);



        if (!$request->has('ids')) {
            return redirect()->back()->with('error', 'No assets selected');
        }

        $asset_raw_array = $request->input('ids');
        foreach ($asset_raw_array as $asset_id => $value) {
            $asset_ids[] = $asset_id;
        }


        if ($request->has('bulk_actions')) {

            if ($request->input('bulk_actions')=='labels') {

                $count = 0;
                return view('hardware/labels')
                    ->with('assets', Asset::find($asset_ids))
                    ->with('settings', Setting::getSettings())
                    ->with('count', $count)
                    ->with('settings',
                    Setting::getSettings()
                );

            } elseif ($request->input('bulk_actions')=='delete') {
                $assets = Asset::with('assignedTo', 'assetloc')->find($asset_ids);
                $assets->each(function($asset) {
                    $this->authorize('delete',$asset);
                });
                return view('hardware/bulk-delete')->with('assets', $assets);

             // Bulk edit
            } elseif ($request->input('bulk_actions')=='edit') {
                return view('hardware/bulk')
                ->with('assets', request('ids'))
                ->with('supplier_list', Helper::suppliersList())
                ->with('statuslabel_list', Helper::statusLabelList())
                ->with('location_list', Helper::locationsList())
                ->with('models_list', Helper::modelList())
                ->with(
                    'companies_list',
                    array('' => '') + array('clear' => trans('general.remove_company')) + Helper::companyList()
                );
            }
        }
        return redirect()->back()->with('error', 'No action selected');
    }

    /**
     * Save bulk edits
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @return Redirect
     * @internal param array $assets
     * @since [v2.0]
     */
    public function postBulkSave()
    {
        $this->authorize('update', Asset::class);
        if (Input::has('ids')) {
            $assets = Input::get('ids');
            if ((Input::has('purchase_date'))
                ||  (Input::has('purchase_cost'))
                ||  (Input::has('supplier_id'))
                ||  (Input::has('order_number'))
                || (Input::has('warranty_months'))
                || (Input::has('rtd_location_id'))
                || (Input::has('requestable'))
                ||  (Input::has('company_id'))
                || (Input::has('status_id'))
                ||  (Input::has('model_id'))
            ) {
                foreach ($assets as $key => $value) {
                    $update_array = array();

                    if (Input::has('purchase_date')) {
                        $update_array['purchase_date'] =  e(Input::get('purchase_date'));
                    }
                    if (Input::has('purchase_cost')) {
                        $update_array['purchase_cost'] =  Helper::ParseFloat(e(Input::get('purchase_cost')));
                    }
                    if (Input::has('supplier_id')) {
                        $update_array['supplier_id'] =  e(Input::get('supplier_id'));
                    }
                    if (Input::has('model_id')) {
                        $update_array['model_id'] =  e(Input::get('model_id'));
                    }
                    if (Input::has('company_id')) {
                        if (Input::get('company_id')=="clear") {
                            $update_array['company_id'] =  null;
                        } else {
                            $update_array['company_id'] =  e(Input::get('company_id'));
                        }
                    }
                    if (Input::has('order_number')) {
                        $update_array['order_number'] =  e(Input::get('order_number'));
                    }
                    if (Input::has('warranty_months')) {
                        $update_array['warranty_months'] =  e(Input::get('warranty_months'));
                    }
                    if (Input::has('rtd_location_id')) {
                        $update_array['rtd_location_id'] = e(Input::get('rtd_location_id'));
                    }
                    if (Input::has('status_id')) {
                        $update_array['status_id'] = e(Input::get('status_id'));
                    }
                    if (Input::has('requestable')) {
                        $update_array['requestable'] = e(Input::get('requestable'));
                    }

                    DB::table('assets')
                    ->where('id', $key)
                    ->update($update_array);

                } // endforeach
                return redirect()->to("hardware")->with('success', trans('admin/hardware/message.update.success'));
            // no values given, nothing to update
            }
            return redirect()->to("hardware")->with('info', trans('admin/hardware/message.update.nothing_updated'));
        } // endif
        return redirect()->to("hardware");
    }

    /**
     * Save bulk deleted.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @return View
     * @internal param array $assets
     * @since [v2.0]
     */
    public function postBulkDelete()
    {
        $this->authorize('delete', Asset::class);
        
        
        if (Input::has('ids')) {
            $assets = Asset::find(Input::get('ids'));
            foreach ($assets as $asset) {
                $update_array['deleted_at'] = date('Y-m-d H:i:s');
                $update_array['assigned_to'] = null;

                DB::table('assets')
                ->where('id', $asset->id)
                ->update($update_array);

            } // endforeach
            return redirect()->to("hardware")->with('success', trans('admin/hardware/message.delete.success'));
            // no values given, nothing to update
        }
        return redirect()->to("hardware")->with('info', trans('admin/hardware/message.delete.nothing_updated'));
    }


    public function getBulkCheckout()
    {
        $this->authorize('checkout', Asset::class);
        // Filter out assets that are not deployable.
        $assets_list = Company::scopeCompanyables(Asset::RTD()->get(), 'assets.company_id')->pluck('detailed_name', 'id')->toArray();
        return view('hardware/bulk-checkout')
            ->with('users_list', Helper::usersList())
            ->with('assets_list', $assets_list);
    }

    public function postBulkCheckout(Request $request)
    {
        $this->validate($request, [
           "assigned_to"   => 'required'
        ]);

        $user = User::find(e(Input::get('assigned_to')));
        $admin = Auth::user();

        $asset_ids = array_filter(Input::get('selected_assets'));

        if ((Input::has('checkout_at')) && (Input::get('checkout_at')!= date("Y-m-d"))) {
            $checkout_at = e(Input::get('checkout_at'));
        } else {
            $checkout_at = date("Y-m-d H:i:s");
        }

        if (Input::has('expected_checkin')) {
            $expected_checkin = e(Input::get('expected_checkin'));
        } else {
            $expected_checkin = '';
        }

        $errors = [];
        DB::transaction(function () use ($user, $admin, $checkout_at, $expected_checkin, $errors, $asset_ids) {
          
            foreach ($asset_ids as $asset_id) {
                $asset = Asset::find($asset_id);
                $this->authorize('checkout', $asset);
                $error = $asset->checkOutToUser($user, $admin, $checkout_at, $expected_checkin, e(Input::get('note')), null);

                if ($error) {
                    array_merge_recursive($errors, $asset->getErrors()->toArray());
                }
            }
        });

        if (!$errors) {
          // Redirect to the new asset page
            return redirect()->to("hardware")->with('success', trans('admin/hardware/message.checkout.success'));
        }
          // Redirect to the asset management page with error
            return redirect()->to("hardware/bulk-checkout")->with('error', trans('admin/hardware/message.checkout.error'))->withErrors($errors);
    }

    public function audit(Request $request, $id)
    {
        $this->authorize('audit', Asset::class);

        $dt = Carbon::now()->addMonths(12)->toDateString();

        $asset = Asset::findOrFail($id);
        return view('hardware/audit')->with('asset', $asset)->with('next_audit_date', $dt);
    }

    public function auditStore(Request $request, $id)
    {
        $this->authorize('audit', Asset::class);

        $asset = Asset::findOrFail($id);
        $asset->next_audit_date = $request->input('next_audit_date');

        if ($asset->save()) {
            $asset->logAudit(request('note'));
            return redirect()->to("hardware")->with('success', trans('admin/hardware/message.audit.success'));
        }
    }


}
