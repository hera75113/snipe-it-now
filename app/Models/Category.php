<?php
namespace App\Models;

use App\Http\Traits\UniqueUndeletedTrait;
use App\Models\SnipeModel;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Watson\Validating\ValidatingTrait;

/**
 * Model for Categories. Categories are a higher-level group
 * than Asset Models, and handle things like whether or not
 * to require acceptance from the user, whether or not to
 * send a EULA to the user, etc.
 *
 * @version    v1.0
 */
class Category extends SnipeModel
{

    use SoftDeletes;
    protected $dates = ['deleted_at'];
    protected $table = 'categories';

    /**
    * Category validation rules
    */
    public $rules = array(
        'user_id' => 'numeric',
        'name'   => 'required|min:1|max:255|unique_undeleted',
        'category_type'   => 'required',
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
    use UniqueUndeletedTrait;


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name','category_type'];


    public function has_models()
    {
        return $this->hasMany('\App\Models\AssetModel', 'category_id')->count();
    }

    public function accessories()
    {
        return $this->hasMany('\App\Models\Accessory');
    }

    public function consumables()
    {
        return $this->hasMany('\App\Models\Consumable');
    }

    public function components()
    {
        return $this->hasMany('\App\Models\Component');
    }

    public function itemCount()
    {
        switch ($this->category_type) {
            case 'asset':
                return $this->assets->count();
            case 'accessory':
                return $this->accessories->count();
            case 'component':
                return $this->components->count();
            case 'consumable':
                return $this->consumables->count();
        }
        return '0';
    }

    public function assets()
    {
        return $this->hasManyThrough('\App\Models\Asset', '\App\Models\AssetModel', 'category_id', 'model_id');
    }

    public function models()
    {
        return $this->hasMany('\App\Models\AssetModel', 'category_id');
    }

    public function getEula()
    {

        $Parsedown = new \Parsedown();

        if ($this->eula_text) {
            return $Parsedown->text(e($this->eula_text));
        } elseif ((Setting::getSettings()->default_eula_text) && ($this->use_default_eula=='1')) {
            return $Parsedown->text(e(Setting::getSettings()->default_eula_text));
        } else {
            return null;
        }

    }

    /**
     * scopeRequiresAcceptance
     *
     * @param $query
     *
     * @return mixed
     * @author  Vincent Sposato <vincent.sposato@gmail.com>
     * @version v1.0
     */
    public function scopeRequiresAcceptance($query)
    {

        return $query->where('require_acceptance', '=', true);
    }

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

            $query->where('name', 'LIKE', '%'.$search.'%')
            ->orWhere('category_type', 'LIKE', '%'.$search.'%');
        });
    }
}
