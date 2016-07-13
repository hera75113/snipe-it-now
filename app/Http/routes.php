<?php
use App\Models\Statuslabel;
use App\Models\Location;

/*
|--------------------------------------------------------------------------
| Admin API Routes
|--------------------------------------------------------------------------
*/
Route::group([ 'prefix' => 'api', 'middleware' => 'auth' ], function () {

    /*---Hardware API---*/
    Route::group([ 'prefix' => 'hardware','middleware' => ['web','auth','authorize:assets.view']], function () {

        Route::get('list/{status?}', [ 'as' => 'api.hardware.list', 'uses' => 'AssetsController@getDatatable' ]);

        Route::post('import', 'AssetsController@postAPIImportUpload');
    });

    /*---Status Label API---*/
    Route::group([ 'prefix' => 'statuslabels' ,'middleware' => ['web','auth','authorize:admin']], function () {

        Route::resource('/', 'StatuslabelsController');
        Route::get('{statuslabelId}/deployable', function ($statuslabelId) {

            $statuslabel = Statuslabel::find($statuslabelId);
            if (( $statuslabel->deployable == '1' ) && ( $statuslabel->pending != '1' )
                && ( $statuslabel->archived != '1' )
            ) {
                return '1';
            } else {
                return '0';
            }

        });

        Route::get('list', [ 'as' => 'api.statuslabels.list', 'uses' => 'StatuslabelsController@getDatatable' ]);
        Route::get('assets', [ 'as' => 'api.statuslabels.assets', 'uses' => 'StatuslabelsController@getAssetCountByStatuslabel' ]);

    });

    /*---Accessories API---*/
    Route::group([ 'prefix' => 'accessories' ], function () {

        Route::get('list', [ 'as' => 'api.accessories.list', 'uses' => 'AccessoriesController@getDatatable' ]);
        Route::get(
            '{accessoryID}/view',
            [ 'as' => 'api.accessories.view', 'uses' => 'AccessoriesController@getDataView' ]
        );
    });

    /*---Consumables API---*/
    Route::group(array('prefix'=>'consumables'), function () {
        Route::get('list', array('as'=>'api.consumables.list', 'uses'=>'ConsumablesController@getDatatable'));
        Route::get('{consumableID}/view', array('as'=>'api.consumables.view', 'uses'=>'ConsumablesController@getDataView'));
    });

    /*---Components API---*/
    Route::group(array('prefix'=>'components'), function () {
        Route::get('list', array('as'=>'api.components.list', 'uses'=>'ComponentsController@getDatatable'));
        Route::get('{componentID}/view', array('as'=>'api.components.view', 'uses'=>'ComponentsController@getDataView'));
    });

    /*---Locations API---*/
    Route::group(array('prefix'=>'locations'), function () {
        Route::get('list', array('as'=>'api.locations.list', 'uses'=>'LocationsController@getDatatable'));
        Route::get('{locationID}/view', array('as'=>'api.locations.view', 'uses'=>'LocationsController@getDataView'));
        Route::get('{locationID}/users', array('as'=>'api.locations.viewusers', 'uses'=>'LocationsController@getDataViewUsers'));
        Route::get('{locationID}/assets', array('as'=>'api.locations.viewassets', 'uses'=>'LocationsController@getDataViewAssets'));
    });

    /*---Depreciations API---*/
    Route::group(array('prefix'=>'depreciations'), function () {
        Route::get('list', array('as'=>'api.depreciations.list', 'uses'=>'DepreciationsController@getDatatable'));
        Route::get('{$depreciationID}/view', array('as'=>'api.depreciations.view', 'uses'=>'DepreciationsController@getDataView'));
    });

    /*---Manufacturers API---*/
    Route::group(array('prefix'=>'manufacturers'), function () {
        Route::get('list', array('as'=>'api.manufacturers.list', 'uses'=>'ManufacturersController@getDatatable'));
        Route::get('{manufacturerID}/view', array('as'=>'api.manufacturers.view', 'uses'=>'ManufacturersController@getDataView'));
    });

    /*---Suppliers API---*/
    Route::group(array('prefix'=>'suppliers'), function () {
        Route::get('list', array('as'=>'api.suppliers.list', 'uses'=>'SuppliersController@getDatatable'));
    });

    /*---Users API---*/
    Route::group([ 'prefix' => 'users' ], function () {
        Route::post('/', [ 'as' => 'api.users.store', 'uses' => 'UsersController@store' ]);
        Route::get('list/{status?}', [ 'as' => 'api.users.list', 'uses' => 'UsersController@getDatatable' ]);
        Route::get('{userId}/assets', [ 'as' => 'api.users.assetlist', 'uses' => 'UsersController@getAssetList' ]);
        Route::post('{userId}/upload', [ 'as' => 'upload/user', 'uses' => 'UsersController@postUpload' ]);
    });

    /*---Groups API---*/
    Route::group([ 'prefix' => 'groups' ], function () {
        Route::get('list', [ 'as' => 'api.groups.list', 'uses' => 'GroupsController@getDatatable' ]);
    });

    /*---Licenses API---*/
    Route::group([ 'prefix' => 'licenses' ], function () {

        Route::get('list', [ 'as' => 'api.licenses.list', 'uses' => 'LicensesController@getDatatable' ]);
    });

    /*---Locations API---*/
    Route::group([ 'prefix' => 'locations' ], function () {

        Route::resource('/', 'LocationsController');
        Route::get('{locationID}/check', function ($locationID) {

            $location = Location::find($locationID);

            return $location;
        });
    });

    /*---Improvements API---*/
    Route::group([ 'prefix' => 'asset_maintenances' ], function () {

        Route::get(
            'list',
            [ 'as' => 'api.asset_maintenances.list', 'uses' => 'AssetMaintenancesController@getDatatable' ]
        );
    });

    /*---Models API---*/
    Route::group([ 'prefix' => 'models' ], function () {

        Route::resource('/', 'AssetModelsController');
        Route::get('list/{status?}', [ 'as' => 'api.models.list', 'uses' => 'AssetModelsController@getDatatable' ]);
        Route::get('{modelID}/view', [ 'as' => 'api.models.view', 'uses' => 'AssetModelsController@getDataView' ]);
    });

    /*--- Categories API---*/
    Route::group([ 'prefix' => 'categories' ], function () {

        Route::get('list', [ 'as' => 'api.categories.list', 'uses' => 'CategoriesController@getDatatable' ]);
        Route::get(
            '{categoryID}/asset/view',
            [ 'as' => 'api.categories.asset.view', 'uses' => 'CategoriesController@getDataViewAssets' ]
        );
        Route::get(
            '{categoryID}/accessory/view',
            [ 'as' => 'api.categories.accessory.view', 'uses' => 'CategoriesController@getDataViewAccessories' ]
        );
        Route::get(
            '{categoryID}/consumable/view',
            [ 'as' => 'api.categories.consumable.view', 'uses' => 'CategoriesController@getDataViewConsumables' ]
        );
        Route::get(
            '{categoryID}/component/view',
            [ 'as' => 'api.categories.component.view', 'uses' => 'CategoriesController@getDataViewComponent' ]
        );
    });

    /*-- Suppliers API (mostly for creating new ones in-line while creating an asset) --*/
    Route::group([ 'prefix' => 'suppliers' ], function () {

        Route::resource('/', 'SuppliersController');
    });

    /*-- Custom fields API --*/
    Route::group([ 'prefix' => 'custom_fields' ], function () {
        Route::post(
            '{fieldsetID}/order',
            [ 'as' => 'api.customfields.order', 'uses' => 'CustomFieldsController@postReorder' ]
        );
    });

});

/*
|--------------------------------------------------------------------------
| Asset Routes
|--------------------------------------------------------------------------
|
| Register all the asset routes.
|
*/

Route::group(
    [ 'prefix' => 'hardware',
    'middleware' => ['web',
    'auth',
    'authorize:assets.view']],
    function () {

        Route::get('create/{model?}', [
                'as'   => 'create/hardware',
                'uses' => 'AssetsController@getCreate'
            ]);

        Route::post('create', [
                'as'   => 'savenew/hardware',
                'uses' => 'AssetsController@postCreate'
            ]);

        Route::get('{assetId}/edit', [
                'as'   => 'update/hardware',
                'uses' => 'AssetsController@getEdit'
            ]);
        Route::get('/bytag', [
            'as'   => 'findbytag/hardware',
            'uses' => 'AssetsController@getAssetByTag'
        ]);

        Route::get('{assetId}/clone', [ 'as' => 'clone/hardware', 'uses' => 'AssetsController@getClone' ]);
        Route::post('{assetId}/clone', 'AssetsController@postCreate');
        Route::get('{assetId}/delete', [ 'as' => 'delete/hardware', 'uses' => 'AssetsController@getDelete' ]);
        Route::get(
            '{assetId}/checkout',
            [ 'as' => 'checkout/hardware', 'uses' => 'AssetsController@getCheckout' ]
        );
        Route::post('{assetId}/checkout', 'AssetsController@postCheckout');
        Route::get(
            '{assetId}/checkin/{backto?}',
            [ 'as' => 'checkin/hardware', 'uses' => 'AssetsController@getCheckin' ]
        );
        Route::post('{assetId}/checkin/{backto?}', 'AssetsController@postCheckin');
        Route::get('{assetId}/view', [ 'as' => 'view/hardware', 'uses' => 'AssetsController@getView' ]);
        Route::get('{assetId}/qr-view', [ 'as' => 'qr-view/hardware', 'uses' => 'AssetsController@getView' ]);
        Route::get('{assetId}/qr_code', [ 'as' => 'qr_code/hardware', 'uses' => 'AssetsController@getQrCode' ]);
        Route::get('{assetId}/barcode', [ 'as' => 'barcode/hardware', 'uses' => 'AssetsController@getBarCode' ]);
        Route::get('{assetId}/restore', [ 'as' => 'restore/hardware', 'uses' => 'AssetsController@getRestore' ]);
        Route::post('{assetId}/upload', [ 'as' => 'upload/asset', 'uses' => 'AssetsController@postUpload' ]);
        Route::get(
            '{assetId}/deletefile/{fileId}',
            [ 'as' => 'delete/assetfile', 'uses' => 'AssetsController@getDeleteFile' ]
        );
        Route::get(
            '{assetId}/showfile/{fileId}',
            [ 'as' => 'show/assetfile', 'uses' => 'AssetsController@displayFile' ]
        );

        Route::get(
            'import/delete-import/{filename}',
            [ 'as' => 'assets/import/delete-file', 'uses' => 'AssetsController@getDeleteImportFile' ]
        );

        Route::get(
            'import/process/{filename}',
            [ 'as' => 'assets/import/process-file', 'uses' => 'AssetsController@getProcessImportFile' ]
        );

        Route::get(
            'import',
            [ 'as' => 'assets/import', 'uses' => 'AssetsController@getImportUpload' ]
        );


        Route::post('{assetId}/edit', 'AssetsController@postEdit');

        Route::post(
            'bulkedit',
            [
                'as'   => 'hardware/bulkedit',
                'uses' => 'AssetsController@postBulkEdit'
            ]
        );
        Route::post(
            'bulkdelete',
            [
                'as'   => 'hardware/bulkdelete',
                'uses' => 'AssetsController@postBulkDelete'
            ]
        );
        Route::post(
            'bulksave',
            [
                'as'   => 'hardware/bulksave',
                'uses' => 'AssetsController@postBulkSave'
            ]
        );

        # Asset Model Management
        Route::group([ 'prefix' => 'models', 'middleware' => 'auth' ], function () {

            Route::get('/', [ 'as' => 'models', 'uses' => 'AssetModelsController@getIndex' ]);
            Route::get('create', [ 'as' => 'create/model', 'uses' => 'AssetModelsController@getCreate' ]);
            Route::post('create', 'AssetModelsController@postCreate');
            Route::get('{modelId}/edit', [ 'as' => 'update/model', 'uses' => 'AssetModelsController@getEdit' ]);
            Route::post('{modelId}/edit', 'AssetModelsController@postEdit');
            Route::get('{modelId}/clone', [ 'as' => 'clone/model', 'uses' => 'AssetModelsController@getClone' ]);
            Route::post('{modelId}/clone', 'AssetModelsController@postCreate');
            Route::get('{modelId}/delete', [ 'as' => 'delete/model', 'uses' => 'AssetModelsController@getDelete' ]);
            Route::get('{modelId}/view', [ 'as' => 'view/model', 'uses' => 'AssetModelsController@getView' ]);
            Route::get('{modelID}/restore', [ 'as' => 'restore/model', 'uses' => 'AssetModelsController@getRestore' ]);
            Route::get('{modelId}/custom_fields', ['as' => 'custom_fields/model','uses' => 'AssetModelsController@getCustomFields']);
        });

        Route::get('/', [
                'as'   => 'hardware',
                'uses' => 'AssetsController@getIndex'
            ]);

    }
);

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
| Register all the admin routes.
|
*/

Route::group([ 'prefix' => 'admin','middleware' => ['web','auth']], function () {

    # Licenses
    Route::group([ 'prefix' => 'licenses', 'middleware'=>'authorize:licenses.view' ], function () {

        Route::get('create', [ 'as' => 'create/licenses', 'uses' => 'LicensesController@getCreate' ]);
        Route::post('create', 'LicensesController@postCreate');
        Route::get('{licenseId}/edit', [ 'as' => 'update/license', 'uses' => 'LicensesController@getEdit' ]);
        Route::post('{licenseId}/edit', 'LicensesController@postEdit');
        Route::get('{licenseId}/clone', [ 'as' => 'clone/license', 'uses' => 'LicensesController@getClone' ]);
        Route::post('{licenseId}/clone', 'LicensesController@postCreate');
        Route::get('{licenseId}/delete', [ 'as' => 'delete/license', 'uses' => 'LicensesController@getDelete' ]);
        Route::get(
            '{licenseId}/freecheckout',
            [ 'as' => 'freecheckout/license', 'uses' => 'LicensesController@getFreeLicense' ]
        );
        Route::get(
            '{licenseId}/checkout',
            [ 'as' => 'checkout/license', 'uses' => 'LicensesController@getCheckout' ]
        );
        Route::post('{licenseId}/checkout', 'LicensesController@postCheckout');
        Route::get(
            '{licenseId}/checkin/{backto?}',
            [ 'as' => 'checkin/license', 'uses' => 'LicensesController@getCheckin' ]
        );
        Route::post('{licenseId}/checkin/{backto?}', 'LicensesController@postCheckin');
        Route::get('{licenseId}/view', [ 'as' => 'view/license', 'uses' => 'LicensesController@getView' ]);
        Route::post(
            '{licenseId}/upload',
            [ 'as' => 'upload/license', 'uses' => 'LicensesController@postUpload' ]
        );
        Route::get(
            '{licenseId}/deletefile/{fileId}',
            [ 'as' => 'delete/licensefile', 'uses' => 'LicensesController@getDeleteFile' ]
        );
        Route::get(
            '{licenseId}/showfile/{fileId}',
            [ 'as' => 'show/licensefile', 'uses' => 'LicensesController@displayFile' ]
        );
        Route::get('/', [ 'as' => 'licenses', 'uses' => 'LicensesController@getIndex' ]);
    });

    # Asset Maintenances
    Route::group([ 'prefix' => 'asset_maintenances', 'middleware'=>'authorize:assets.view'  ], function () {

        Route::get(
            'create/{assetId?}',
            [ 'as' => 'create/asset_maintenances', 'uses' => 'AssetMaintenancesController@getCreate' ]
        );
        Route::post('create/{assetId?}', 'AssetMaintenancesController@postCreate');
        Route::get('/', [ 'as' => 'asset_maintenances', 'uses' => 'AssetMaintenancesController@getIndex' ]);
        Route::get(
            '{assetMaintenanceId}/edit',
            [ 'as' => 'update/asset_maintenance', 'uses' => 'AssetMaintenancesController@getEdit' ]
        );
        Route::post('{assetMaintenanceId}/edit', 'AssetMaintenancesController@postEdit');
        Route::get(
            '{assetMaintenanceId}/delete',
            [ 'as' => 'delete/asset_maintenance', 'uses' => 'AssetMaintenancesController@getDelete' ]
        );
        Route::get(
            '{assetMaintenanceId}/view',
            [ 'as' => 'view/asset_maintenance', 'uses' => 'AssetMaintenancesController@getView' ]
        );
    });

    # Accessories
    Route::group([ 'prefix' => 'accessories', 'middleware'=>'authorize:accessories.view'  ], function () {

        Route::get('create', [ 'as' => 'create/accessory', 'uses' => 'AccessoriesController@getCreate' ]);
        Route::post('create', 'AccessoriesController@postCreate');
        Route::get(
            '{accessoryID}/edit',
            [ 'as' => 'update/accessory', 'uses' => 'AccessoriesController@getEdit' ]
        );
        Route::post('{accessoryID}/edit', 'AccessoriesController@postEdit');
        Route::get(
            '{accessoryID}/delete',
            [ 'as' => 'delete/accessory', 'uses' => 'AccessoriesController@getDelete' ]
        );
        Route::get('{accessoryID}/view', [ 'as' => 'view/accessory', 'uses' => 'AccessoriesController@getView' ]);
        Route::get(
            '{accessoryID}/checkout',
            [ 'as' => 'checkout/accessory', 'uses' => 'AccessoriesController@getCheckout' ]
        );
        Route::post('{accessoryID}/checkout', 'AccessoriesController@postCheckout');
        Route::get(
            '{accessoryID}/checkin/{backto?}',
            [ 'as' => 'checkin/accessory', 'uses' => 'AccessoriesController@getCheckin' ]
        );
        Route::post('{accessoryID}/checkin/{backto?}', 'AccessoriesController@postCheckin');

        Route::get('/', [ 'as' => 'accessories', 'uses' => 'AccessoriesController@getIndex' ]);
    });

    # Consumables
    Route::group([ 'prefix' => 'consumables', 'middleware'=>'authorize:consumables.view'  ], function () {

        Route::get('create', [ 'as' => 'create/consumable', 'uses' => 'ConsumablesController@getCreate' ]);
        Route::post('create', 'ConsumablesController@postCreate');
        Route::get(
            '{consumableID}/edit',
            [ 'as' => 'update/consumable', 'uses' => 'ConsumablesController@getEdit' ]
        );
        Route::post('{consumableID}/edit', 'ConsumablesController@postEdit');
        Route::get(
            '{consumableID}/delete',
            [ 'as' => 'delete/consumable', 'uses' => 'ConsumablesController@getDelete' ]
        );
        Route::get(
            '{consumableID}/view',
            [ 'as' => 'view/consumable', 'uses' => 'ConsumablesController@getView' ]
        );
        Route::get(
            '{consumableID}/checkout',
            [ 'as' => 'checkout/consumable', 'uses' => 'ConsumablesController@getCheckout' ]
        );
        Route::post('{consumableID}/checkout', 'ConsumablesController@postCheckout');
        Route::get('/', [ 'as' => 'consumables', 'uses' => 'ConsumablesController@getIndex' ]);
    });

    # Components
    Route::group([ 'prefix' => 'components', 'middleware'=>'authorize:components.view'  ], function () {

        Route::get('create', [ 'as' => 'create/component', 'uses' => 'ComponentsController@getCreate' ]);
        Route::post('create', 'ComponentsController@postCreate');
        Route::get(
            '{componentID}/edit',
            [ 'as' => 'update/component', 'uses' => 'ComponentsController@getEdit' ]
        );
        Route::post('{componentID}/edit', 'ComponentsController@postEdit');
        Route::get(
            '{componentID}/delete',
            [ 'as' => 'delete/component', 'uses' => 'ComponentsController@getDelete' ]
        );
        Route::get(
            '{componentID}/view',
            [ 'as' => 'view/component', 'uses' => 'ComponentsController@getView' ]
        );
        Route::get(
            '{componentID}/checkout',
            [ 'as' => 'checkout/component', 'uses' => 'ComponentsController@getCheckout' ]
        );
        Route::post('{componentID}/checkout', 'ComponentsController@postCheckout');
        Route::post('bulk', [ 'as' => 'component/bulk-form', 'uses' => 'ComponentsController@postBulk' ]);
        Route::post('bulksave', [ 'as' => 'component/bulk-save', 'uses' => 'ComponentsController@postBulkSave' ]);
        Route::get('/', [ 'as' => 'components', 'uses' => 'ComponentsController@getIndex' ]);
    });

    # Admin Settings Routes (for categories, maufactureres, etc)
    Route::group([ 'prefix' => 'settings', 'middleware'=>'authorize:superuser'], function () {



        # Settings
        Route::group([ 'prefix' => 'app' ], function () {

            Route::post('purge', ['as' => 'purge', 'uses' => 'SettingsController@postPurge']);
            Route::get('edit', [ 'as' => 'edit/settings', 'uses' => 'SettingsController@getEdit' ]);
            Route::post('edit', 'SettingsController@postEdit');

            Route::get('ldaptest', [
                'as' => 'settings/ldaptest',
                'uses' => 'SettingsController@getLdapTest'
            ]);

            Route::get('/', [ 'as' => 'app', 'uses' => 'SettingsController@getIndex' ]);
        });



        # Settings
        Route::group([ 'prefix' => 'backups', 'middleware' => 'auth' ], function () {


            Route::get('download/{filename}', [
                'as' => 'settings/download-file',
                'uses' => 'SettingsController@downloadFile' ]);

            Route::get('delete/{filename}', [
                'as' => 'settings/delete-file',
                'uses' => 'SettingsController@deleteFile' ]);

            Route::post('/', [
                'as' => 'settings/backups',
                'uses' => 'SettingsController@postBackups'
            ]);


            Route::get('/', [ 'as' => 'settings/backups', 'uses' => 'SettingsController@getBackups' ]);
        });

        # Companies
        Route::group([ 'prefix' => 'companies' ], function () {

            Route::get('{companyId}/edit', ['as' => 'update/company', 'uses' => 'CompaniesController@getEdit']);
            Route::get('create', ['as' => 'create/company', 'uses' => 'CompaniesController@getCreate']);
            Route::get('/', ['as' => 'companies', 'uses' => 'CompaniesController@getIndex']);

            Route::post('{companyId}/delete', ['as' => 'delete/company', 'uses' => 'CompaniesController@postDelete']);
            Route::post('{companyId}/edit', 'CompaniesController@postEdit');
            Route::post('create', 'CompaniesController@postCreate');
        });



        # Manufacturers
        Route::group([ 'prefix' => 'manufacturers' ], function () {

            Route::get('/', [ 'as' => 'manufacturers', 'uses' => 'ManufacturersController@getIndex' ]);
            Route::get(
                'create',
                [ 'as' => 'create/manufacturer', 'uses' => 'ManufacturersController@getCreate' ]
            );
            Route::post('create', 'ManufacturersController@postCreate');
            Route::get(
                '{manufacturerId}/edit',
                [ 'as' => 'update/manufacturer', 'uses' => 'ManufacturersController@getEdit' ]
            );
            Route::post('{manufacturerId}/edit', 'ManufacturersController@postEdit');
            Route::get(
                '{manufacturerId}/delete',
                [ 'as' => 'delete/manufacturer', 'uses' => 'ManufacturersController@getDelete' ]
            );
            Route::get(
                '{manufacturerId}/view',
                [ 'as' => 'view/manufacturer', 'uses' => 'ManufacturersController@getView' ]
            );
        });

        # Suppliers
        Route::group([ 'prefix' => 'suppliers' ], function () {

            Route::get('/', [ 'as' => 'suppliers', 'uses' => 'SuppliersController@getIndex' ]);
            Route::get('create', [ 'as' => 'create/supplier', 'uses' => 'SuppliersController@getCreate' ]);
            Route::post('create', 'SuppliersController@postCreate');
            Route::get(
                '{supplierId}/edit',
                [ 'as' => 'update/supplier', 'uses' => 'SuppliersController@getEdit' ]
            );
            Route::post('{supplierId}/edit', 'SuppliersController@postEdit');
            Route::get(
                '{supplierId}/delete',
                [ 'as' => 'delete/supplier', 'uses' => 'SuppliersController@getDelete' ]
            );
            Route::get('{supplierId}/view', [ 'as' => 'view/supplier', 'uses' => 'SuppliersController@getView' ]);
        });

        # Categories
        Route::group([ 'prefix' => 'categories' ], function () {

            Route::get('create', [ 'as' => 'create/category', 'uses' => 'CategoriesController@getCreate' ]);
            Route::post('create', 'CategoriesController@postCreate');
            Route::get(
                '{categoryId}/edit',
                [ 'as' => 'update/category', 'uses' => 'CategoriesController@getEdit' ]
            );
            Route::post('{categoryId}/edit', 'CategoriesController@postEdit');
            Route::get(
                '{categoryId}/delete',
                [ 'as' => 'delete/category', 'uses' => 'CategoriesController@getDelete' ]
            );
            Route::get(
                '{categoryId}/view',
                [ 'as' => 'view/category', 'uses' => 'CategoriesController@getView' ]
            );
            Route::get('/', [ 'as' => 'categories', 'uses' => 'CategoriesController@getIndex' ]);
        });

        # Depreciations
        Route::group([ 'prefix' => 'depreciations' ], function () {

            Route::get('/', [ 'as' => 'depreciations', 'uses' => 'DepreciationsController@getIndex' ]);
            Route::get(
                'create',
                [ 'as' => 'create/depreciations', 'uses' => 'DepreciationsController@getCreate' ]
            );
            Route::post('create', 'DepreciationsController@postCreate');
            Route::get(
                '{depreciationId}/edit',
                [ 'as' => 'update/depreciations', 'uses' => 'DepreciationsController@getEdit' ]
            );
            Route::post('{depreciationId}/edit', 'DepreciationsController@postEdit');
            Route::get(
                '{depreciationId}/delete',
                [ 'as' => 'delete/depreciations', 'uses' => 'DepreciationsController@getDelete' ]
            );
        });

        # Locations
        Route::group([ 'prefix' => 'locations' ], function () {

            Route::get('/', [ 'as' => 'locations', 'uses' => 'LocationsController@getIndex' ]);
            Route::get('create', [ 'as' => 'create/location', 'uses' => 'LocationsController@getCreate' ]);
            Route::post('create', 'LocationsController@postCreate');
            Route::get(
                '{locationId}/edit',
                [ 'as' => 'update/location', 'uses' => 'LocationsController@getEdit' ]
            );
            Route::post('{locationId}/edit', 'LocationsController@postEdit');
            Route::get('{locationId}/view', 'LocationsController@getView');
            Route::get(
                '{locationId}/delete',
                [ 'as' => 'delete/location', 'uses' => 'LocationsController@getDelete' ]
            );
        });

        # Status Labels
        Route::group([ 'prefix' => 'statuslabels' ], function () {

            Route::get('/', [ 'as' => 'statuslabels', 'uses' => 'StatuslabelsController@getIndex' ]);
            Route::get('create', [ 'as' => 'create/statuslabel', 'uses' => 'StatuslabelsController@getCreate' ]);
            Route::post('create', 'StatuslabelsController@postCreate');
            Route::get(
                '{statuslabelId}/edit',
                [ 'as' => 'update/statuslabel', 'uses' => 'StatuslabelsController@getEdit' ]
            );
            Route::post('{statuslabelId}/edit', 'StatuslabelsController@postEdit');
            Route::get(
                '{statuslabelId}/delete',
                [ 'as' => 'delete/statuslabel', 'uses' => 'StatuslabelsController@getDelete' ]
            );
        });

    });

    # Custom fields support
    Route::get('custom_fields/create-field', ['uses' =>'CustomFieldsController@createField','as' => 'admin.custom_fields.create-field']);
    Route::post('custom_fields/create-field', ['uses' => 'CustomFieldsController@storeField','as' => 'admin.custom_fields.store-field']);
    Route::post('custom_fields/{id}/associate', ['uses' => 'CustomFieldsController@associate','as' => 'admin.custom_fields.associate']);
    Route::match(['DELETE'], 'custom_fields/delete-field/{id}', ['uses' => 'CustomFieldsController@deleteField','as' => 'admin.custom_fields.delete-field']);
    Route::resource('custom_fields', 'CustomFieldsController');

    # User Management
    Route::group([ 'prefix' => 'users', 'middleware' => ['web','auth','authorize:users.view']], function () {

        Route::get('ldap', ['as' => 'ldap/user', 'uses' => 'UsersController@getLDAP' ]);
        Route::post('ldap', 'UsersController@postLDAP');

        Route::get('create', [ 'as' => 'create/user', 'uses' => 'UsersController@getCreate' ]);
        Route::post('create', 'UsersController@postCreate');
        Route::get('import', [ 'as' => 'import/user', 'uses' => 'UsersController@getImport' ]);
        Route::post('import', 'UsersController@postImport');
        Route::get('{userId}/edit', [ 'as' => 'update/user', 'uses' => 'UsersController@getEdit' ]);
        Route::post('{userId}/edit', 'UsersController@postEdit');
        Route::get('{userId}/clone', [ 'as' => 'clone/user', 'uses' => 'UsersController@getClone' ]);
        Route::post('{userId}/clone', 'UsersController@postCreate');
        Route::get('{userId}/delete', [ 'as' => 'delete/user', 'uses' => 'UsersController@getDelete' ]);
        Route::get('{userId}/restore', [ 'as' => 'restore/user', 'uses' => 'UsersController@getRestore' ]);
        Route::get('{userId}/view', [ 'as' => 'view/user', 'uses' => 'UsersController@getView' ]);
        Route::get('{userId}/unsuspend', [ 'as' => 'unsuspend/user', 'uses' => 'UsersController@getUnsuspend' ]);
        Route::get(
            '{userId}/deletefile/{fileId}',
            [ 'as' => 'delete/userfile', 'uses' => 'UsersController@getDeleteFile' ]
        );
        Route::get(
            '{userId}/showfile/{fileId}',
            [ 'as' => 'show/userfile', 'uses' => 'UsersController@displayFile' ]
        );

        Route::post(
            'bulkedit',
            [
                'as'   => 'users/bulkedit',
                'uses' => 'UsersController@postBulkEdit'
            ]
        );
        Route::post(
            'bulksave',
            [
                'as'   => 'users/bulksave',
                'uses' => 'UsersController@postBulkSave'
            ]
        );

        Route::get('/', [ 'as' => 'users', 'uses' => 'UsersController@getIndex' ]);

    });

    # Group Management
    Route::group([ 'prefix' => 'groups', 'middleware' => ['web','auth','authorize:superadmin'] ], function () {

        Route::get('/', [ 'as' => 'groups', 'uses' => 'GroupsController@getIndex' ]);
        Route::get('create', [ 'as' => 'create/group', 'uses' => 'GroupsController@getCreate' ]);
        Route::post('create', 'GroupsController@postCreate');
        Route::get('{groupId}/edit', [ 'as' => 'update/group', 'uses' => 'GroupsController@getEdit' ]);
        Route::post('{groupId}/edit', 'GroupsController@postEdit');
        Route::get('{groupId}/delete', [ 'as' => 'delete/group', 'uses' => 'GroupsController@getDelete' ]);
        Route::get('{groupId}/restore', [ 'as' => 'restore/group', 'uses' => 'GroupsController@getRestore' ]);
        Route::get('{groupId}/view', [ 'as' => 'view/group', 'uses' => 'GroupsController@getView' ]);
    });

    # Dashboard
    Route::get('/', [ 'as' => 'admin', 'uses' => 'DashboardController@getIndex' ]);

});

/*
|--------------------------------------------------------------------------
| Account Routes
|--------------------------------------------------------------------------
|
|
|
*/
Route::group([ 'prefix' => 'account', 'middleware' => ['web', 'auth']], function () {

    # Profile
    Route::get('profile', [ 'as' => 'profile', 'uses' => 'ProfileController@getIndex' ]);
    Route::post('profile', 'ProfileController@postIndex');

    # View Assets
    Route::get('view-assets', [ 'as' => 'view-assets', 'uses' => 'ViewAssetsController@getIndex' ]);

    # Accept Asset
    Route::get(
        'accept-asset/{logID}',
        [ 'as' => 'account/accept-assets', 'uses' => 'ViewAssetsController@getAcceptAsset' ]
    );
    Route::post(
        'accept-asset/{logID}',
        [ 'as' => 'account/asset-accepted', 'uses' => 'ViewAssetsController@postAcceptAsset' ]
    );

    # Profile
    Route::get(
        'requestable-assets',
        [ 'as' => 'requestable-assets', 'uses' => 'ViewAssetsController@getRequestableIndex' ]
    );
    Route::get(
        'request-asset/{assetId}',
        [ 'as' => 'account/request-asset', 'uses' => 'ViewAssetsController@getRequestAsset' ]
    );

    # Account Dashboard
    Route::get('/', [ 'as' => 'account', 'uses' => 'ViewAssetsController@getIndex' ]);

});


Route::group(['middleware' => ['web','auth','authorize:reports.view']], function () {

    Route::get(
        'reports/depreciation',
        [ 'as' => 'reports/depreciation', 'uses' => 'ReportsController@getDeprecationReport' ]
    );
    Route::get(
        'reports/export/depreciation',
        [ 'as' => 'reports/export/depreciation', 'uses' => 'ReportsController@exportDeprecationReport' ]
    );
    Route::get(
        'reports/asset_maintenances',
        [ 'as' => 'reports/asset_maintenances', 'uses' => 'ReportsController@getAssetMaintenancesReport' ]
    );
    Route::get(
        'reports/export/asset_maintenances',
        [
            'as'   => 'reports/export/asset_maintenances',
            'uses' => 'ReportsController@exportAssetMaintenancesReport'
        ]
    );
    Route::get(
        'reports/licenses',
        [ 'as' => 'reports/licenses', 'uses' => 'ReportsController@getLicenseReport' ]
    );
    Route::get(
        'reports/export/licenses',
        [ 'as' => 'reports/export/licenses', 'uses' => 'ReportsController@exportLicenseReport' ]
    );
    Route::get('reports/assets', [ 'as' => 'reports/assets', 'uses' => 'ReportsController@getAssetsReport' ]);
    Route::get(
        'reports/export/assets',
        [ 'as' => 'reports/export/assets', 'uses' => 'ReportsController@exportAssetReport' ]
    );
    Route::get('reports/accessories', [ 'as' => 'reports/accessories', 'uses' => 'ReportsController@getAccessoryReport' ]);
    Route::get(
        'reports/export/accessories',
        [ 'as' => 'reports/export/accessories', 'uses' => 'ReportsController@exportAccessoryReport' ]
    );
    Route::get('reports/custom', [ 'as' => 'reports/custom', 'uses' => 'ReportsController@getCustomReport' ]);
    Route::post('reports/custom', 'ReportsController@postCustom');

    Route::get(
        'reports/activity',
        [ 'as' => 'reports/activity', 'uses' => 'ReportsController@getActivityReport' ]
    );
    Route::get(
        'reports/unaccepted_assets',
        [ 'as' => 'reports/unaccepted_assets', 'uses' => 'ReportsController@getAssetAcceptanceReport' ]
    );
    Route::get(
        'reports/export/unaccepted_assets',
        [ 'as' => 'reports/export/unaccepted_assets', 'uses' => 'ReportsController@exportAssetAcceptanceReport' ]
    );
});


/*
|--------------------------------------------------------------------------
| Setup Routes
|--------------------------------------------------------------------------
|
|
|
*/
Route::group([ 'prefix' => 'setup', 'middleware' => 'web'], function () {
    Route::get(
        'user',
        [
        'as'  => 'setup.user',
        'uses' => 'SettingsController@getSetupUser' ]
    );

    Route::post(
        'user',
        [
        'as'  => 'setup.user.save',
        'uses' => 'SettingsController@postSaveFirstAdmin' ]
    );


    Route::get(
        'migrate',
        [
        'as'  => 'setup.migrate',
        'uses' => 'SettingsController@getSetupMigrate' ]
    );

    Route::get(
        'done',
        [
        'as'  => 'setup.done',
        'uses' => 'SettingsController@getSetupDone' ]
    );

    Route::get(
        'mailtest',
        [
        'as'  => 'setup.mailtest',
        'uses' => 'SettingsController@ajaxTestEmail' ]
    );


    Route::get(
        '/',
        [
        'as'  => 'setup',
        'uses' => 'SettingsController@getSetupIndex' ]
    );

});


Route::get(
    '/',
    [
    'as' => 'home',
    'middleware' => ['web', 'auth'],
    'uses' => 'DashboardController@getIndex' ]
);

Route::group(['middleware' => 'web'], function () {
    Route::auth();
});

Route::get('home', function () {
    return redirect('/');
});
