<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Lang;
use Illuminate\Database\Eloquent\SoftDeletes;
use Watson\Validating\ValidatingTrait;

/**
 * Model for Asset Maintenances.
 *
 * @version    v1.0
 */
class AssetMaintenance extends Model implements ICompanyableChild
{
    use SoftDeletes;
    use CompanyableChildTrait;
    use ValidatingTrait;


    protected $dates = [ 'deleted_at' ];
    protected $table = 'asset_maintenances';

    // Declaring rules for form validation
    protected $rules = [
        'asset_id'               => 'required|integer',
        'supplier_id'            => 'required|integer',
        'asset_maintenance_type' => 'required',
        'title'                  => 'required|max:100',
        'is_warranty'            => 'boolean',
        'start_date'             => 'required|date_format:Y-m-d',
        'completion_date'        => 'date_format:Y-m-d',
        'notes'                  => 'string',
        'cost'                   => 'numeric'
    ];

    public function getCompanyableParents()
    {
        return [ 'asset' ];
    }

    /**
       * getImprovementOptions
       *
       * @return array
       * @author  Vincent Sposato <vincent.sposato@gmail.com>
       * @version v1.0
       */
    public static function getImprovementOptions()
    {

        return [
            trans('admin/asset_maintenances/general.maintenance') => trans('admin/asset_maintenances/general.maintenance'),
            trans('admin/asset_maintenances/general.repair')      => trans('admin/asset_maintenances/general.repair'),
            trans('admin/asset_maintenances/general.upgrade')     => trans('admin/asset_maintenances/general.upgrade')
        ];
    }

    /**
       * asset
       * Get asset for this improvement
       *
       * @return mixed
       * @author  Vincent Sposato <vincent.sposato@gmail.com>
       * @version v1.0
       */
    public function asset()
    {

        return $this->belongsTo('\App\Models\Asset', 'asset_id')
                    ->withTrashed();
    }

    /**
     * Get the admin who created the maintenance
     *
     * @return mixed
     * @author  A. Gianotto <snipe@snipe.net>
     * @version v3.0
     */
    public function admin()
    {

        return $this->belongsTo('\App\Models\User', 'user_id')
            ->withTrashed();
    }

    public function supplier()
    {

        return $this->belongsTo('\App\Models\Supplier', 'supplier_id')
                    ->withTrashed();
    }

    /**
   * -----------------------------------------------
   * BEGIN QUERY SCOPES
   * -----------------------------------------------
   **/
    

    /**
      * Query builder scope to search on text
      *
      * @param  Illuminate\Database\Query\Builder  $query  Query builder instance
      * @param  text                              $search      Search term
      *
      * @return Illuminate\Database\Query\Builder          Modified query builder
      */
    public function scopeTextSearch($query, $search)
    {

         return $query->where(function ($query) use ($search) {

                $query->where('title', 'LIKE', '%'.$search.'%')
                ->orWhere('notes', 'LIKE', '%'.$search.'%')
                ->orWhere('asset_maintenance_type', 'LIKE', '%'.$search.'%')
                ->orWhere('cost', 'LIKE', '%'.$search.'%')
                ->orWhere('start_date', 'LIKE', '%'.$search.'%')
                ->orWhere('completion_date', 'LIKE', '%'.$search.'%');
         });
    }

    /**
     * Query builder scope to order on admin user
     *
     * @param  Illuminate\Database\Query\Builder  $query  Query builder instance
     * @param  text                              $order       Order
     *
     * @return Illuminate\Database\Query\Builder          Modified query builder
     */
    public function scopeOrderAdmin($query, $order)
    {
        return $query->leftJoin('users', 'asset_maintenances.user_id', '=', 'users.id')
            ->orderBy('users.first_name', $order)
            ->orderBy('users.last_name', $order);
    }
}
