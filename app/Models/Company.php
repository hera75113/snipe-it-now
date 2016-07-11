<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Watson\Validating\ValidatingTrait;
use Auth;
use DB;

/**
 * Model for Companies.
 *
 * @version    v1.8
 */
final class Company extends Model
{
    protected $table = 'companies';

    // Declare the rules for the model validation
    protected $rules = ['name' => 'required|min:1|max:255|unique:companies,name'];
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
    protected $fillable = ['name'];

    private static function isFullMultipleCompanySupportEnabled()
    {
        $settings = Setting::getSettings();

        // NOTE: this can happen when seeding the database
        if (is_null($settings)) {
            return false;
        } else {
            return $settings->full_multiple_companies_support == 1;
        }
    }

    private static function scopeCompanyablesDirectly($query, $column = 'company_id')
    {
        if (Auth::user()) {
            $company_id = Auth::user()->company_id;
        } else {
            $company_id = null;
        }

        if ($company_id == null) {
            return $query;
        } else {
            return $query->where($column, '=', $company_id);
        }
    }

    public static function getSelectList()
    {
        $select_company = trans('general.select_company');
        return ['0' => $select_company] + DB::table('companies')->orderBy('name', 'ASC')->lists('name', 'id');
    }

    public static function getIdFromInput($unescaped_input)
    {
        $escaped_input = e($unescaped_input);

        if ($escaped_input == '0') {
            return null;
        } else {
            return $escaped_input;
        }
    }

    public static function getIdForCurrentUser($unescaped_input)
    {
        if (!static::isFullMultipleCompanySupportEnabled()) {
            return static::getIdFromInput($unescaped_input);
        } else {
            $current_user = Auth::user();

            if ($current_user->company_id != null) {
                return $current_user->company_id;
            } else {
                return static::getIdFromInput($unescaped_input);
            }
        }
    }

    public static function isCurrentUserHasAccess($companyable)
    {
        if (is_null($companyable)) {
            return false;
        } elseif (!static::isFullMultipleCompanySupportEnabled()) {
            return true;
        } else {
            $current_user_company_id = Auth::user()->company_id;
            $companyable_company_id = $companyable->company_id;
            return ($current_user_company_id == null || $current_user_company_id == $companyable_company_id || Auth::user()->isSuperUser());
        }
    }

    public static function isCurrentUserAuthorized()
    {

        return ((!static::isFullMultipleCompanySupportEnabled()) || (Auth::user()->company_id == null) || (Auth::user()->isSuperUser()));
    }

    public static function canManageUsersCompanies()
    {
        return (!static::isFullMultipleCompanySupportEnabled() || Auth::user()->isSuperUser() ||
                Auth::user()->company_id == null);
    }

    public static function getIdForUser($unescaped_input)
    {
        if (!static::isFullMultipleCompanySupportEnabled() || Auth::user()->isSuperUser()) {
            return static::getIdFromInput($unescaped_input);
        } else {
            return static::getIdForCurrentUser($unescaped_input);
        }
    }

    public static function scopeCompanyables($query, $column = 'company_id')
    {
        if (!static::isFullMultipleCompanySupportEnabled() || (Auth::check() && Auth::user()->isSuperUser())) {
            return $query;
        } else {
            return static::scopeCompanyablesDirectly($query, $column);
        }
    }

    public static function scopeCompanyableChildren(array $companyable_names, $query)
    {
        if (count($companyable_names) == 0) {
            throw new Exception('No Companyable Children to scope');
        } elseif (!static::isFullMultipleCompanySupportEnabled()) {
            return $query;
        } else {
            $f = function ($q) {

                static::scopeCompanyablesDirectly($q);
            };

            $q = $query->where(function ($q) use ($companyable_names, $f) {
                $q2 = $q->whereHas($companyable_names[0], $f);

                for ($i = 1; $i < count($companyable_names); $i++) {
                    $q2 = $q2->orWhereHas($companyable_names[$i], $f);
                }
            });
            return $q;
        }
    }

    public static function getName($companyable)
    {
        $company = $companyable->company;

        if (is_null($company)) {
            return '';
        } else {
            return e($company->name);
        }
    }
}
