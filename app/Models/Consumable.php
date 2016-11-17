<?php
namespace App\Models;

use App\Models\ActionLog;
use App\Models\Category;
use App\Models\Company;
use App\Models\ConsumableAssignment;
use App\Models\Location;
use App\Models\Loggable;
use App\Models\SnipeModel;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Watson\Validating\ValidatingTrait;

class Consumable extends SnipeModel
{
    use CompanyableTrait;
    use Loggable;
    use SoftDeletes;

    protected $dates = ['deleted_at'];
    protected $table = 'consumables';


    /**
    * Category validation rules
    */
    public $rules = array(
        'name'        => 'required|min:3|max:255',
        'qty'         => 'required|integer|min:0',
        'category_id' => 'required|integer',
        'company_id'  => 'integer',
        'min_amt'     => 'integer|min:1',
        'purchase_cost'   => 'numeric',
    );

    /**
    * Whether the model should inject it's identifier to the unique
    * validation rules before attempting validation. If this property
    * is not set in the model it will default to true.
    *
    * @var boolean
    */
    protected $injectUniqueIdentifier = true;
    use ValidatingTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name','qty','company_id','category_id'];


    public function admin()
    {
        return $this->belongsTo('\App\Models\User', 'user_id');
    }

    public function consumableAssigments()
    {
        return $this->hasMany('\App\Models\ConsumableAssignment');
    }

    public function company()
    {
        return $this->belongsTo('\App\Models\Company', 'company_id');
    }

    public function manufacturer()
    {
        return $this->belongsTo('\App\Models\Manufacturer', 'manufacturer_id');
    }

    public function location()
    {
        return $this->belongsTo('\App\Models\Location', 'location_id');
    }

    public function category()
    {
        return $this->belongsTo('\App\Models\Category', 'category_id');
    }

    /**
    * Get action logs for this consumable
    */
    public function assetlog()
    {
        return $this->hasMany('\App\Models\Actionlog', 'item_id')->where('item_type', Consumable::class)->orderBy('created_at', 'desc')->withTrashed();
    }


    public function users()
    {
        return $this->belongsToMany('\App\Models\User', 'consumables_users', 'consumable_id', 'assigned_to')->withPivot('user_id')->withTrashed()->withTimestamps();
    }

    public function hasUsers()
    {
        return $this->belongsToMany('\App\Models\User', 'consumables_users', 'consumable_id', 'assigned_to')->count();
    }


    public function requireAcceptance()
    {
        return $this->category->require_acceptance;
    }

    public function getEula()
    {

        $Parsedown = new \Parsedown();

        if ($this->category->eula_text) {
            return $Parsedown->text(e($this->category->eula_text));
        } elseif ((Setting::getSettings()->default_eula_text) && ($this->category->use_default_eula=='1')) {
            return $Parsedown->text(e(Setting::getSettings()->default_eula_text));
        } else {
            return null;
        }

    }

    public function numRemaining()
    {
        $checkedout = $this->users->count();
        $total = $this->qty;
        $remaining = $total - $checkedout;
        return $remaining;
    }

    /**
    * Query builder scope to search on text
    *
    * @param  Illuminate\Database\Query\Builder  $query  Query builder instance
    * @param  text                              $search      Search term
    *
    * @return Illuminate\Database\Query\Builder          Modified query builder
    */
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
        $search = explode(' ', $search);

        return $query->where(function ($query) use ($search) {
        
            foreach ($search as $search) {
                    $query->whereHas('category', function ($query) use ($search) {
                        $query->where('categories.name', 'LIKE', '%'.$search.'%');
                    })->orWhere(function ($query) use ($search) {
                        $query->whereHas('company', function ($query) use ($search) {
                            $query->where('companies.name', 'LIKE', '%'.$search.'%');
                        });
                    })->orWhere(function ($query) use ($search) {
                        $query->whereHas('location', function ($query) use ($search) {
                            $query->where('locations.name', 'LIKE', '%'.$search.'%');
                        });
                    })->orWhere(function ($query) use ($search) {
                        $query->whereHas('manufacturer', function ($query) use ($search) {
                            $query->where('manufacturers.name', 'LIKE', '%'.$search.'%');
                        });
                    })->orWhere('consumables.name', 'LIKE', '%'.$search.'%')
                            ->orWhere('consumables.order_number', 'LIKE', '%'.$search.'%')
                            ->orWhere('consumables.purchase_cost', 'LIKE', '%'.$search.'%')
                            ->orWhere('consumables.purchase_date', 'LIKE', '%'.$search.'%');
            }
        });
    }

    /**
    * Query builder scope to order on company
    *
    * @param  Illuminate\Database\Query\Builder  $query  Query builder instance
    * @param  text                              $order       Order
    *
    * @return Illuminate\Database\Query\Builder          Modified query builder
    */
    public function scopeOrderCategory($query, $order)
    {
        return $query->join('categories', 'consumables.category_id', '=', 'categories.id')->orderBy('categories.name', $order);
    }

    /**
    * Query builder scope to order on location
    *
    * @param  Illuminate\Database\Query\Builder  $query  Query builder instance
    * @param  text                              $order       Order
    *
    * @return Illuminate\Database\Query\Builder          Modified query builder
    */
    public function scopeOrderLocation($query, $order)
    {
        return $query->leftJoin('locations', 'consumables.location_id', '=', 'locations.id')->orderBy('locations.name', $order);
    }

    /**
     * Query builder scope to order on manufacturer
     *
     * @param  Illuminate\Database\Query\Builder  $query  Query builder instance
     * @param  text                              $order       Order
     *
     * @return Illuminate\Database\Query\Builder          Modified query builder
     */
    public function scopeOrderManufacturer($query, $order)
    {
        return $query->leftJoin('manufacturers', 'consumables.manufacturer_id', '=', 'manufacturers.id')->orderBy('manufacturers.name', $order);
    }


    /**
    * Query builder scope to order on company
    *
    * @param  Illuminate\Database\Query\Builder  $query  Query builder instance
    * @param  text                              $order       Order
    *
    * @return Illuminate\Database\Query\Builder          Modified query builder
    */
    public function scopeOrderCompany($query, $order)
    {
        return $query->leftJoin('companies', 'consumables.company_id', '=', 'companies.id')->orderBy('companies.name', $order);
    }
}
