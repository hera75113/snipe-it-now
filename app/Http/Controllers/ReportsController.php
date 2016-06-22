<?php
namespace App\Http\Controllers;

use App\Models\Accessory;
use App\Models\Actionlog;
use App\Models\Asset;
use App\Models\AssetMaintenance;
use Carbon\Carbon;
use Category;
use App\Models\Company;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\View;
use Input;
use League\Csv\Reader;
use App\Models\License;
use App\Models\Location;
use App\Models\AssetModel;
use Redirect;
use App\Models\Setting;
use App\Models\User;

/**
 * This controller handles all actions related to Reports for
 * the Snipe-IT Asset Management application.
 *
 * @version    v1.0
 */
class ReportsController extends Controller
{

    /**
    * Returns a view that displaysthe accessories report.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @return View
    */
    public function getAccessoryReport()
    {
        $accessories = Accessory::orderBy('created_at', 'DESC')->with('company')->get();

        return View::make('reports/accessories', compact('accessories'));
    }

    /**
    * Exports the accessories to CSV
    *
    * @deprecated Server-side exports have been replaced by datatables export since v2.
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @see ManufacturersController::getDatatable() method that generates the JSON response
    * @since [v1.0]
    * @return \Illuminate\Http\Response
    */
    public function exportAccessoryReport()
    {
        $accessories = Accessory::orderBy('created_at', 'DESC')->get();

        $rows = array();
        $header = array(
            trans('admin/accessories/table.title'),
            trans('admin/accessories/general.accessory_category'),
            trans('admin/accessories/general.total'),
            trans('admin/accessories/general.remaining')
        );
        $header = array_map('trim', $header);
        $rows[] = implode($header, ', ');

        // Row per accessory
        foreach ($accessories as $accessory) {
            $row = array();
            $row[] = e($accessory->accessory_name);
            $row[] = e($accessory->accessory_category);
            $row[] = e($accessory->total);
            $row[] = e($accessory->remaining);

            $rows[] = implode($row, ',');
        }

        $csv = implode($rows, "\n");
        $response = Response::make($csv, 200);
        $response->header('Content-Type', 'text/csv');
        $response->header('Content-disposition', 'attachment;filename=report.csv');

        return $response;
    }

    /**
    * Display asset report.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @return View
    */
    public function getAssetsReport()
    {
        $settings = \App\Models\Setting::first();
        // Grab all the assets
        $assets = Asset::with(
            'model',
            'assigneduser.userLoc',
            'assetstatus',
            'defaultLoc',
            'assetlog',
            'supplier',
            'model.manufacturer',
            'company'
        )
                       ->orderBy('created_at', 'DESC')
                       ->get();

        return View::make('reports/asset', compact('assets'))->with('settings', $settings);
    }

    /**
    * Exports the assets to CSV
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @return \Illuminate\Http\Response
    */
    public function exportAssetReport()
    {
        // Grab all the assets
        $assets = Asset::orderBy('created_at', 'DESC')->get();

        $rows = [ ];

        // Create the header row
        $header = [
            trans('admin/hardware/table.asset_tag'),
            trans('admin/hardware/form.manufacturer'),
            trans('admin/hardware/form.model'),
            trans('general.model_no'),
            trans('general.name'),
            trans('admin/hardware/table.serial'),
            trans('general.status'),
            trans('admin/hardware/table.purchase_date'),
            trans('admin/hardware/table.purchase_cost'),
            trans('admin/hardware/form.order'),
            trans('admin/hardware/form.supplier'),
            trans('admin/hardware/table.checkoutto'),
            trans('admin/hardware/table.location'),
            trans('general.notes'),
        ];
        $header = array_map('trim', $header);
        $rows[] = implode($header, ',');

        // Create a row per asset
        foreach ($assets as $asset) {
            $row   = [ ];
            $row[] = e($asset->asset_tag);
            if ($asset->model->manufacturer) {
                $row[] = e($asset->model->manufacturer->name);
            } else {
                $row[] = '';
            }
            $row[] = '"' . e($asset->model->name) . '"';
            $row[] = '"' . e($asset->model->modelno) . '"';
            $row[] = e($asset->name);
            $row[] = e($asset->serial);
            if ($asset->assetstatus) {
                $row[] = e($asset->assetstatus->name);
            } else {
                $row[] = '';
            }
            $row[] = $asset->purchase_date;
            $row[] = '"' . number_format($asset->purchase_cost, 2) . '"';
            if ($asset->order_number) {
                $row[] = e($asset->order_number);
            } else {
                $row[] = '';
            }
            if ($asset->supplier_id) {
                $row[] = e($asset->supplier->name);
            } else {
                $row[] = '';
            }

            if ($asset->assigned_to > 0) {
                $user  = User::find($asset->assigned_to);
                $row[] = e($user->fullName());
            } else {
                $row[] = ''; // Empty string if unassigned
            }

            if (( $asset->assigned_to > 0 ) && ( $asset->assigneduser->location_id > 0 )) {
                $location = Location::find($asset->assigneduser->location_id);
                if ($location) {
                    $row[] = e($location->name);
                } else {
                    $row[] = '';
                }
            } elseif ($asset->rtd_location_id) {
                $location = Location::find($asset->rtd_location_id);
                if ($location->name) {
                    $row[] = e($location->name);
                } else {
                    $row[] = '';
                }
            } else {
                $row[] = '';  // Empty string if location is not set
            }

            if ($asset->notes) {
                $row[] = '"' . e($asset->notes) . '"';
            } else {
                $row[] = '';
            }

            $rows[] = implode($row, ',');
        }

        // spit out a csv
        $csv      = implode($rows, "\n");
        $response = Response::make($csv, 200);
        $response->header('Content-Type', 'text/csv');
        $response->header('Content-disposition', 'attachment;filename=report.csv');

        return $response;
    }

    /**
    * Show depreciation report for assets.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @return View
    */
    public function getDeprecationReport()
    {

        // Grab all the assets
        $assets = Asset::with('model', 'assigneduser', 'assetstatus', 'defaultLoc', 'assetlog', 'company')
                       ->orderBy('created_at', 'DESC')->get();

        return View::make('reports/depreciation', compact('assets'));
    }

    /**
    * Exports the depreciations to CSV
    *
    * @deprecated Server-side exports have been replaced by datatables export since v2.
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @return \Illuminate\Http\Response
    */
    public function exportDeprecationReport()
    {

        // Grab all the assets
        $assets = Asset::with('model', 'assigneduser', 'assetstatus', 'defaultLoc', 'assetlog')
                       ->orderBy('created_at', 'DESC')->get();

        $csv = \League\Csv\Writer::createFromFileObject(new \SplTempFileObject());
        $csv->setOutputBOM(Reader::BOM_UTF16_BE);

        $rows = [ ];

        // Create the header row
        $header = [
            trans('admin/hardware/table.asset_tag'),
            trans('admin/hardware/table.title'),
            trans('admin/hardware/table.serial'),
            trans('admin/hardware/table.checkoutto'),
            trans('admin/hardware/table.location'),
            trans('admin/hardware/table.purchase_date'),
            trans('admin/hardware/table.purchase_cost'),
            trans('admin/hardware/table.book_value'),
            trans('admin/hardware/table.diff')
        ];

        //we insert the CSV header
        $csv->insertOne($header);

        // Create a row per asset
        foreach ($assets as $asset) {
            $row   = [ ];
            $row[] = e($asset->asset_tag);
            $row[] = e($asset->name);
            $row[] = e($asset->serial);

            if ($asset->assigned_to > 0) {
                $user  = User::find($asset->assigned_to);
                $row[] = e($user->fullName());
            } else {
                $row[] = ''; // Empty string if unassigned
            }

            if (( $asset->assigned_to > 0 ) && ( $asset->assigneduser->location_id > 0 )) {
                $location = Location::find($asset->assigneduser->location_id);
                if ($location->city) {
                    $row[] = e($location->city) . ', ' . e($location->state);
                } elseif ($location->name) {
                    $row[] = e($location->name);
                } else {
                    $row[] = '';
                }
            } else {
                $row[] = '';  // Empty string if location is not set
            }

            if ($asset->assetloc) {
                $currency = e($asset->assetloc->currency);
            } else {
                $currency = e(Setting::first()->default_currency);
            }

            $row[] = $asset->purchase_date;
            $row[] = $currency . number_format($asset->purchase_cost, 2);
            $row[] = $currency . number_format($asset->getDepreciatedValue(), 2);
            $row[] = $currency . number_format(( $asset->purchase_cost - $asset->getDepreciatedValue() ), 2);
            $csv->insertOne($row);
        }

        $csv->output('depreciation-report-' . date('Y-m-d') . '.csv');
        die;

    }

    /**
    * Displays activity report.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @return View
    */
    public function getActivityReport()
    {
        $log_actions = Actionlog::orderBy('created_at', 'DESC')
                                ->with('adminlog')
                                ->with('accessorylog')
                                ->with('assetlog')
                                ->with('licenselog')
                                ->with('userlog')
                                ->orderBy('created_at', 'DESC')
                                ->get();

        return View::make('reports/activity', compact('log_actions'));
    }

    /**
    * Displays license report
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @return View
    */
    public function getLicenseReport()
    {

        $licenses = License::orderBy('created_at', 'DESC')
                           ->with('company')
                           ->get();

        return View::make('reports/licenses', compact('licenses'));
    }

    /**
    * Exports the licenses to CSV
    *
    * @deprecated Server-side exports have been replaced by datatables export since v2.
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @return \Illuminate\Http\Response
    */
    public function exportLicenseReport()
    {
        $licenses = License::orderBy('created_at', 'DESC')->get();

        $rows     = [ ];
        $header   = [
            trans('admin/licenses/table.title'),
            trans('admin/licenses/table.serial'),
            trans('admin/licenses/form.seats'),
            trans('admin/licenses/form.remaining_seats'),
            trans('admin/licenses/form.expiration'),
            trans('admin/licenses/form.date'),
            trans('admin/licenses/form.cost')
        ];

        $header = array_map('trim', $header);
        $rows[] = implode($header, ', ');

        // Row per license
        foreach ($licenses as $license) {
            $row   = [ ];
            $row[] = e($license->name);
            $row[] = e($license->serial);
            $row[] = e($license->seats);
            $row[] = $license->remaincount();
            $row[] = $license->expiration_date;
            $row[] = $license->purchase_date;
            $row[] = '"' . number_format($license->purchase_cost, 2) . '"';

            $rows[] = implode($row, ',');
        }

        $csv      = implode($rows, "\n");
        $response = Response::make($csv, 200);
        $response->header('Content-Type', 'text/csv');
        $response->header('Content-disposition', 'attachment;filename=report.csv');

        return $response;
    }

    /**
    * Returns a form that allows the user to generate a custom CSV report.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @see ReportsController::postCustomReport() method that generates the CSV
    * @since [v1.0]
    * @return \Illuminate\Http\Response
    */
    public function getCustomReport()
    {

        return View::make('reports/custom');
    }

    /**
    * Exports the custom report to CSV
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @see ReportsController::getCustomReport() method that generates form view
    * @since [v1.0]
    * @return \Illuminate\Http\Response
    */
    public function postCustom()
    {
        $assets = Asset::orderBy('created_at', 'DESC')->get();

        $rows   = [ ];
        $header = [ ];

        if (e(Input::get('asset_name')) == '1') {
            $header[] = 'Asset Name';
        }
        if (e(Input::get('asset_tag')) == '1') {
            $header[] = 'Asset Tag';
        }
        if (e(Input::get('manufacturer')) == '1') {
            $header[] = 'Manufacturer';
        }
        if (e(Input::get('model')) == '1') {
            $header[] = 'Model';
            $header[] = 'Model Number';
        }
        if (e(Input::get('category')) == '1') {
            $header[] = 'Category';
        }
        if (e(Input::get('serial')) == '1') {
            $header[] = 'Serial';
        }
        if (e(Input::get('purchase_date')) == '1') {
            $header[] = 'Purchase Date';
        }
        if (( e(Input::get('purchase_cost')) == '1' ) && ( e(Input::get('depreciation')) != '1' )) {
            $header[] = 'Purchase Cost';
        }
        if (e(Input::get('order')) == '1') {
            $header[] = 'Order Number';
        }
        if (e(Input::get('supplier')) == '1') {
            $header[] = 'Supplier';
        }
        if (e(Input::get('location')) == '1') {
            $header[] = 'Location';
        }
        if (e(Input::get('assigned_to')) == '1') {
            $header[] = 'Assigned To';
        }
        if (e(Input::get('status')) == '1') {
            $header[] = 'Status';
        }
        if (e(Input::get('warranty')) == '1') {
            $header[] = 'Warranty';
            $header[] = 'Warranty Expires';
        }
        if (e(Input::get('depreciation')) == '1') {
            $header[] = 'Purchase Cost';
            $header[] = 'Value';
            $header[] = 'Diff';
        }

        $header = array_map('trim', $header);
        $rows[] = implode($header, ',');

        foreach ($assets as $asset) {
            $row = [ ];
            if (e(Input::get('asset_name')) == '1') {
                $row[] = '"' .e($asset->name) . '"';
            }
            if (e(Input::get('asset_tag')) == '1') {
                $row[] = e($asset->asset_tag);
            }
            if (e(Input::get('manufacturer')) == '1') {
                if ($asset->model->manufacturer) {
                    $row[] = '"' .e($asset->model->manufacturer->name) . '"';
                } else {
                    $row[] = '';
                }
            }
            if (e(Input::get('model')) == '1') {
                $row[] = '"' . e($asset->model->name) . '"';
                $row[] = '"' . e($asset->model->modelno) . '"';
            }
            if (e(Input::get('category')) == '1') {
                $row[] = '"' .e($asset->model->category->name) . '"';
            }

            if (e(Input::get('serial')) == '1') {
                $row[] = e($asset->serial);
            }
            if (e(Input::get('purchase_date')) == '1') {
                $row[] = e($asset->purchase_date);
            }
            if (e(Input::get('purchase_cost')) == '1' && ( e(Input::get('depreciation')) != '1' )) {
                $row[] = '"' . number_format($asset->purchase_cost, 2) . '"';
            }
            if (e(Input::get('order')) == '1') {
                if ($asset->order_number) {
                    $row[] = e($asset->order_number);
                } else {
                    $row[] = '';
                }
            }
            if (e(Input::get('supplier')) == '1') {
                if ($asset->supplier_id) {
                    $row[] = '"' .e($asset->supplier->name) . '"';
                } else {
                    $row[] = '';
                }
            }
            if (e(Input::get('location')) == '1') {
                $show_loc = '';
                if (( $asset->assigned_to > 0 ) && ( $asset->assigneduser->location_id !='' )) {
                    $location = Location::find($asset->assigneduser->location_id);
                    if ($location) {
                        $show_loc .= '"' .e($location->name). '"';
                    } else {
                        $show_loc .= 'User location '.$asset->assigneduser->location_id.' is invalid';
                    }
                } elseif ($asset->rtd_location_id!='') {
                    $location = Location::find($asset->rtd_location_id);
                    if ($location) {
                        $show_loc .= '"' .e($location->name). '"';
                    } else {
                        $show_loc .= 'Default location '.$asset->rtd_location_id.' is invalid';
                    }
                }

                $row[] = $show_loc;

            }
            if (e(Input::get('assigned_to')) == '1') {
                if ($asset->assigned_to > 0) {
                    $user  = User::find($asset->assigned_to);
                    $row[] = '"' .e($user->fullName()). '"';
                } else {
                    $row[] = ''; // Empty string if unassigned
                }
            }
            if (e(Input::get('status')) == '1') {
                if (( $asset->status_id == '0' ) && ( $asset->assigned_to == '0' )) {
                    $row[] = trans('general.ready_to_deploy');
                } elseif (( $asset->status_id == '' ) && ( $asset->assigned_to == '0' )) {
                    $row[] = trans('general.pending');
                } elseif ($asset->assetstatus) {
                    $row[] = '"' .e($asset->assetstatus->name). '"';
                } else {
                    $row[] = '';
                }
            }
            if (e(Input::get('warranty')) == '1') {
                if ($asset->warranty_months) {
                    $row[] = $asset->warranty_months;
                    $row[] = $asset->warrantee_expires();
                } else {
                    $row[] = '';
                    $row[] = '';
                }
            }
            if (e(Input::get('depreciation')) == '1') {
                $depreciation = $asset->getDepreciatedValue();
                $row[]        = '"' . number_format($asset->purchase_cost, 2) . '"';
                $row[]        = '"' . number_format($depreciation, 2) . '"';
                $row[]        = '"' . number_format($asset->purchase_cost - $depreciation, 2) . '"';
            }
            $rows[] = implode($row, ',');
        }

        // spit out a csv
        if (array_filter($rows)) {
            $csv      = implode($rows, "\n");
            $response = Response::make($csv, 200);
            $response->header('Content-Type', 'text/csv');
            $response->header('Content-disposition', 'attachment;filename=report.csv');

            return $response;
        } else {
            return redirect()->to("reports/custom")
                           ->with('error', trans('admin/reports/message.error'));
        }
    }

    /**
     * getImprovementsReport
     *
     * @return View
     * @author  Vincent Sposato <vincent.sposato@gmail.com>
     * @version v1.0
     */
    public function getAssetMaintenancesReport()
    {
        // Grab all the improvements
        $assetMaintenances = AssetMaintenance::with('asset', 'supplier', 'asset.company')
                                              ->orderBy('created_at', 'DESC')
                                              ->get();

        return View::make('reports/asset_maintenances', compact('assetMaintenances'));

    }

    /**
     * exportImprovementsReport
     *
     * @return \Illuminate\Http\Response
     * @author  Vincent Sposato <vincent.sposato@gmail.com>
     * @version v1.0
     */
    public function exportAssetMaintenancesReport()
    {
        // Grab all the improvements
        $assetMaintenances = AssetMaintenance::with('asset', 'supplier')
                                             ->orderBy('created_at', 'DESC')
                                             ->get();

        $rows = [ ];

        $header = [
            trans('admin/asset_maintenances/table.asset_name'),
            trans('admin/asset_maintenances/table.supplier_name'),
            trans('admin/asset_maintenances/form.asset_maintenance_type'),
            trans('admin/asset_maintenances/form.title'),
            trans('admin/asset_maintenances/form.start_date'),
            trans('admin/asset_maintenances/form.completion_date'),
            trans('admin/asset_maintenances/form.asset_maintenance_time'),
            trans('admin/asset_maintenances/form.cost')
        ];

        $header = array_map('trim', $header);
        $rows[] = implode($header, ',');

        foreach ($assetMaintenances as $assetMaintenance) {
            $row   = [ ];
            $row[] = str_replace(',', '', e($assetMaintenance->asset->name));
            $row[] = str_replace(',', '', e($assetMaintenance->supplier->name));
            $row[] = e($assetMaintenance->improvement_type);
            $row[] = e($assetMaintenance->title);
            $row[] = e($assetMaintenance->start_date);
            $row[] = e($assetMaintenance->completion_date);
            if (is_null($assetMaintenance->asset_maintenance_time)) {
                $improvementTime = intval(Carbon::now()
                                                 ->diffInDays(Carbon::parse($assetMaintenance->start_date)));
            } else {
                $improvementTime = intval($assetMaintenance->asset_maintenance_time);
            }
            $row[]  = $improvementTime;
            $row[]  = trans('general.currency') . number_format($assetMaintenance->cost, 2);
            $rows[] = implode($row, ',');
        }

        // spit out a csv
        $csv      = implode($rows, "\n");
        $response = Response::make($csv, 200);
        $response->header('Content-Type', 'text/csv');
        $response->header('Content-disposition', 'attachment;filename=report.csv');

        return $response;
    }

    /**
     * getAssetAcceptanceReport
     *
     * @return mixed
     * @author  Vincent Sposato <vincent.sposato@gmail.com>
     * @version v1.0
     */
    public function getAssetAcceptanceReport()
    {
        $assetsForReport = Asset::notYetAccepted()->with('company')->get();

        return View::make('reports/unaccepted_assets', compact('assetsForReport'));
    }

    /**
     * exportAssetAcceptanceReport
     *
     * @return \Illuminate\Http\Response
     * @author  Vincent Sposato <vincent.sposato@gmail.com>
     * @version v1.0
     */
    public function exportAssetAcceptanceReport()
    {

        // Grab all the improvements
        $assetsForReport = Actionlog::whereIn('id', $this->getAssetsNotAcceptedYet())
                                    ->get();

        $rows = [ ];

        $header = [
            trans('general.category'),
            trans('admin/hardware/form.model'),
            trans('admin/hardware/form.name'),
            trans('admin/hardware/table.asset_tag'),
            trans('admin/hardware/table.checkoutto'),
        ];

        $header = array_map('trim', $header);
        $rows[] = implode($header, ',');

        foreach ($assetsForReport as $assetItem) {
            $row    = [ ];
            $row[]  = str_replace(',', '', e($assetItem->assetlog->model->category->name));
            $row[]  = str_replace(',', '', e($assetItem->assetlog->model->name));
            $row[]  = str_replace(',', '', e($assetItem->assetlog->showAssetName()));
            $row[]  = str_replace(',', '', e($assetItem->assetlog->asset_tag));
            $row[]  = str_replace(',', '', e($assetItem->assetlog->assigneduser->fullName()));
            $rows[] = implode($row, ',');
        }

        // spit out a csv
        $csv      = implode($rows, "\n");
        $response = Response::make($csv, 200);
        $response->header('Content-Type', 'text/csv');
        $response->header('Content-disposition', 'attachment;filename=report.csv');

        return $response;

    }

    /**
     * getCheckedOutAssetsRequiringAcceptance
     *
     * @param $modelsInCategoriesThatRequireAcceptance
     *
     * @return array
     * @author  Vincent Sposato <vincent.sposato@gmail.com>
     * @version v1.0
     */
    protected function getCheckedOutAssetsRequiringAcceptance($modelsInCategoriesThatRequireAcceptance)
    {
        $assets = Asset::deployed()
                        ->inModelList($modelsInCategoriesThatRequireAcceptance)
                        ->select('id')
                        ->get()
                        ->toArray();

        return array_pluck($assets, 'id');
    }

    /**
     * getModelsInCategoriesThatRequireAcceptance
     *
     * @param $assetCategoriesRequiringAcceptance
     * @return array
     * @author  Vincent Sposato <vincent.sposato@gmail.com>
     * @version v1.0
     */
    protected function getModelsInCategoriesThatRequireAcceptance($assetCategoriesRequiringAcceptance)
    {

        return array_pluck(Model::inCategory($assetCategoriesRequiringAcceptance)
                                 ->select('id')
                                 ->get()
                                 ->toArray(), 'id');
    }

    /**
     * getCategoriesThatRequireAcceptance
     *
     * @return array
     * @author  Vincent Sposato <vincent.sposato@gmail.com>
     * @version v1.0
     */
    protected function getCategoriesThatRequireAcceptance()
    {

        return array_pluck(Category::requiresAcceptance()
                                    ->select('id')
                                    ->get()
                                    ->toArray(), 'id');
    }

    /**
     * getAssetsCheckedOutRequiringAcceptance
     *
     * @return array
     * @author  Vincent Sposato <vincent.sposato@gmail.com>
     * @version v1.0
     */
    protected function getAssetsCheckedOutRequiringAcceptance()
    {

        return $this->getCheckedOutAssetsRequiringAcceptance(
            $this->getModelsInCategoriesThatRequireAcceptance($this->getCategoriesThatRequireAcceptance())
        );
    }

    /**
     * getAssetsNotAcceptedYet
     *
     * @return array
     * @author  Vincent Sposato <vincent.sposato@gmail.com>
     * @version v1.0
     */
    protected function getAssetsNotAcceptedYet()
    {
        return Asset::unaccepted();
    }
}
