<?php
namespace App\Http\Controllers\Api;

use App\Helpers\Helper;
use App\Http\Requests\AssetRequest;
use App\Models\Asset;
use App\Models\AssetModel;
use App\Models\Company;
use App\Models\CustomField;
use App\Models\Location;
use App\Models\User;
use Artisan;
use Auth;
use Config;
use DB;
use Gate;
use Illuminate\Http\Request;
use Input;
use Lang;
use Log;
use Mail;
use Paginator;
use Response;
use Slack;
use Str;
use TCPDF;
use Validator;
use View;
use App\Http\Controllers\Controller;

/**
 * This class controls all actions related to assets for
 * the Snipe-IT Asset Management application.
 *
 * @version    v1.0
 * @author [A. Gianotto] [<snipe@snipe.net>]
 */
class AssetsController extends Controller
{

    /**
     * Returns JSON listing of all assets
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @param int $assetId
     * @since [v4.0]
     * @return JsonResponse
     */
    public function index(Request $request, $status = null)
    {
        $this->authorize('index', 'App\Models\Asset');
        
        $assets = Company::scopeCompanyables(Asset::select('assets.*'))->with(
            'assetLoc', 'assetstatus', 'defaultLoc', 'assetlog', 'company',
            'model.category', 'model.manufacturer', 'model.fieldset');

        $request->has('search') ? $assets = $assets->TextSearch(e($request->get('search'))) : '';
        $offset = request('offset', 0);
        $limit = request('limit', 50);
        $request->has('order_number') ? $assets->where('order_number', '=', e($request->get('order_number'))) : '';



        switch ($status) {
            case 'Deleted':
                $assets->withTrashed()->Deleted();
                break;
            case 'Pending':
                $assets->Pending();
                break;
            case 'RTD':
                $assets->RTD();
                break;
            case 'Undeployable':
                $assets->Undeployable();
                break;
            case 'Archived':
                $assets->Archived();
                break;
            case 'Requestable':
                $assets->RequestableAssets();
                break;
            case 'Deployed':
                $assets->Deployed();
                break;
        }

        $request->has('status_id') ? $assets->where('status_id', '=', e($request->get('status_id'))) : '';

        $allowed_columns = [
            'id',
            'name',
            'asset_tag',
            'serial',
            'model',
            'model_number',
            'last_checkout',
            'category',
            'manufacturer',
            'notes',
            'expected_checkin',
            'order_number',
            'companyName',
            'location',
            'image',
            'status_label',
            'assigned_to',
            'created_at',
            'purchase_date',
            'purchase_cost'
        ];
        $all_custom_fields = CustomField::all(); //used as a 'cache' of custom fields throughout this page load
        foreach ($all_custom_fields as $field) {
            $allowed_columns[]=$field->db_column_name();
        }

        $order = $request->get('order') === 'asc' ? 'asc' : 'desc';
        $sort = in_array($request->get('sort'), $allowed_columns) ? $request->get('sort') : 'asset_tag';

        switch ($sort) {
            case 'model':
                $assets = $assets->OrderModels($order);
                break;
            case 'model_number':
                $assets = $assets->OrderModelNumber($order);
                break;
            case 'category':
                $assets = $assets->OrderCategory($order);
                break;
            case 'manufacturer':
                $assets = $assets->OrderManufacturer($order);
                break;
            case 'companyName':
                $assets = $assets->OrderCompany($order);
                break;
            case 'location':
                $assets = $assets->OrderLocation($order);
                break;
            case 'status_label':
                $assets = $assets->OrderStatus($order);
                break;
            case 'assigned_to':
                $assets = $assets->OrderAssigned($order);
                break;
            default:
                $assets = $assets->orderBy($sort, $order);
                break;
        }

        $assets = $assets->skip($offset)->take($limit)->get();
        $assetCount = $assets->count();

        $rows = array();
        foreach ($assets as $asset) {
            $row = $asset->present()->forDataTable($all_custom_fields);
            if (($request->has('report')) && ($request->get('report')=='true')) {
                $rows[]= Helper::stripTagsFromJSON($row);
            } else {
                $rows[]= $row;
            }

        }
        $data = array('total' => $assetCount, 'rows' => $rows);
        return $data;

    }


     /**
     * Returns JSON with information about an asset for detail view.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @param int $assetId
     * @since [v4.0]
     * @return JsonResponse
     */
    public function show($id)
    {

        if ($asset = Asset::withTrashed()->find($id)) {
            $this->authorize('view', $asset);
            $asset = $asset->present()->detail();
            return $asset;
        }

        return response()->json(Helper::formatStandardApiResponse('error', null, trans('admin/hardware/message.does_not_exist')), 404);

    }


    /**
     * Accepts a POST request to create a new asset
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @param Request $request
     * @since [v4.0]
     * @return JsonResponse
     */
    public function store(AssetRequest $request)
    {
        $this->authorize('create', Asset::class);

        $asset = new Asset();
        $asset->model()->associate(AssetModel::find(e($request->get('model_id'))));

        $asset->name                    = $request->get('name');
        $asset->serial                  = $request->get('serial');
        $asset->company_id              = Company::getIdForCurrentUser($request->get('company_id'));
        $asset->model_id                = $request->get('model_id');
        $asset->order_number            = $request->get('order_number');
        $asset->notes                   = $request->get('notes');
        $asset->asset_tag               = $request->get('asset_tag');
        $asset->user_id                 = Auth::id();
        $asset->archived                = '0';
        $asset->physical                = '1';
        $asset->depreciate              = '0';
        $asset->status_id               = $request->get('status_id', 0);
        $asset->warranty_months         = $request->get('warranty_months', null);
        $asset->purchase_cost           = Helper::ParseFloat($request->get('purchase_cost'));
        $asset->purchase_date           = $request->get('purchase_date', null);
        $asset->assigned_to             = $request->get('assigned_to', null);
        $asset->supplier_id             = $request->get('supplier_id', 0);
        $asset->requestable             = $request->get('requestable', 0);
        $asset->rtd_location_id         = $request->get('rtd_location_id', null);

        // Update custom fields in the database.
        // Validation for these fields is handled through the AssetRequest form request
        // Need to investigate and fix. Using static method for now.
        $model = AssetModel::find($request->get('model_id'));
        if ($model->fieldset) {
            foreach ($model->fieldset->fields as $field) {
                $asset->{CustomField::name_to_db_name($field->name)} = e($request->input(CustomField::name_to_db_name($field->name)));
            }
        }

        if ($asset->save()) {
            $asset->logCreate();
            if($request->get('assigned_user')) {
                $target = User::find(request('assigned_user'));
            } elseif($request->get('assigned_asset')) {
                $target = Asset::find(request('assigned_asset'));
            } elseif($request->get('assigned_location')) {
                $target = Location::find(request('assigned_location'));
            }
            if (isset($target)) {
                $asset->checkOut($target, Auth::user(), date('Y-m-d H:i:s'), '', 'Checked out on asset creation', e($request->get('name')));
            }
            return response()->json(Helper::formatStandardApiResponse('success', $asset->id,  trans('admin/hardware/message.create.success')));

        }
        return response()->json(Helper::formatStandardApiResponse('error', null, $asset->getErrors()), 500);


    }


    /**
     * Accepts a POST request to update an asset
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @param Request $request
     * @since [v4.0]
     * @return JsonResponse
     */
    public function update(Request $request, $id)
    {
        $this->authorize('create', Asset::class);

        if ($asset = Asset::find($id)) {

            ($request->has('model_id')) ?
                $asset->model()->associate(AssetModel::find($request->get('model_id'))) : '';
            ($request->has('name')) ? $asset->name = $request->get('name') : '';
            ($request->has('serial')) ? $asset->serial = $request->get('serial') : '';
            ($request->has('model_id')) ? $asset->model_id = $request->get('model_id') : '';
            ($request->has('order_number')) ? $asset->order_number = $request->get('order_number') : '';
            ($request->has('notes')) ? $asset->notes = $request->get('notes') : '';
            ($request->has('asset_tag')) ? $asset->asset_tag = $request->get('asset_tag') : '';
            ($request->has('archived')) ? $asset->archived = $request->get('archived') : '';
            ($request->has('status_id')) ? $asset->status_id = $request->get('status_id') : '';
            ($request->has('warranty_months')) ? $asset->warranty_months = $request->get('warranty_months') : '';
            ($request->has('purchase_cost')) ?
                $asset->purchase_cost = Helper::ParseFloat($request->get('purchase_cost')) : '';
            ($request->has('purchase_date')) ? $asset->purchase_date = $request->get('purchase_date') : '';
            ($request->has('assigned_to')) ? $asset->assigned_to = $request->get('assigned_to') : '';
            ($request->has('supplier_id')) ? $asset->supplier_id = $request->get('supplier_id') : '';
            ($request->has('requestable')) ? $asset->name = $request->get('requestable') : '';
            ($request->has('archived')) ? $asset->name = $request->get('archived') : '';
            ($request->has('rtd_location_id')) ? $asset->name = $request->get('rtd_location_id') : '';
            ($request->has('company_id')) ?
                $asset->company_id = Company::getIdForCurrentUser($request->get('company_id')) : '';

            if ($request->has('model_id')) {
                if ($model = AssetModel::find($request->get('model_id'))) {
                    foreach ($model->fieldset->fields as $field) {
                        if ($request->has(CustomField::name_to_db_name($field->name))) {
                            $asset->{CustomField::name_to_db_name($field->name)} = e($request->input(CustomField::name_to_db_name($field->name)));
                        }

                    }
                }
            }



            if ($asset->save()) {

                $asset->logCreate();
                if($request->get('assigned_user')) {
                    $target = User::find(request('assigned_user'));
                } elseif($request->get('assigned_asset')) {
                    $target = Asset::find(request('assigned_asset'));
                } elseif($request->get('assigned_location')) {
                    $target = Location::find(request('assigned_location'));
                }

                if (isset($target)) {
                    $asset->checkOut($target, Auth::user(), date('Y-m-d H:i:s'), '', 'Checked out on asset update', e($request->get('name')));
                }

                return response()->json(Helper::formatStandardApiResponse('success', $asset,  trans('admin/hardware/message.update.success')));

            }
            return response()->json(Helper::formatStandardApiResponse('error', null, $asset->getErrors()), 500);

        }


        return response()->json(Helper::formatStandardApiResponse('error', null,  trans('admin/hardware/message.does_not_exist')), 404);


    }


    /**
     * Delete a given asset (mark as deleted).
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @param int $assetId
     * @since [v4.0]
     * @return JsonResponse
     */
    public function destroy($id)
    {

        if ($asset = Asset::find($id)) {
            $this->authorize('delete', $asset);

            DB::table('assets')
                ->where('id', $asset->id)
                ->update(array('assigned_to' => null));

            $asset->delete();
            return response()->json(Helper::formatStandardApiResponse('success', null,  trans('admin/hardware/message.delete.success')));

        }
        return response()->json(Helper::formatStandardApiResponse('error', null,  trans('admin/hardware/message.does_not_exist')), 404);

    }



}
