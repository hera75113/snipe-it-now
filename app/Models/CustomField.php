<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomField extends Model
{
    public $guarded=["id"];

    /**

    */
    public static $PredefinedFormats=[
    "ANY" => "",
    "ALPHA" => "alpha",
    "EMAIL" => "email",
    "DATE" => "date",
    "URL" => "url",
    "NUMERIC" => "numeric",
    "MAC" => "regex:/^[a-fA-F0-9]{2}:[a-fA-F0-9]{2}:[a-fA-F0-9]{2}:[a-fA-F0-9]{2}:[a-fA-F0-9]{2}:[a-fA-F0-9]{2}$/",
    "IP" => "ip"
    ];

    public $rules=[
    "name" => "required|unique:custom_fields"
    ];

    public static $table_name="assets";

    public static function name_to_db_name($name)
    {
        return "_snipeit_".preg_replace("/[^a-zA-Z0-9]/", "_", strtolower($name));
    }

    public static function boot()
    {
        self::creating(function ($custom_field) {

            if (in_array($custom_field->db_column_name(), \Schema::getColumnListing(\DB::getTablePrefix().CustomField::$table_name))) {
              //field already exists when making a new custom field; fail.
                return false;
            }

            \Schema::table(\DB::getTablePrefix().\App\Models\CustomField::$table_name, function ($table) use ($custom_field) {
                $table->text($custom_field->db_column_name())->nullable();
            });

        });

        self::updating(function ($custom_field) {
            if ($custom_field->isDirty("name")) {
                if (in_array($custom_field->db_column_name(), \Schema::getColumnListing(CustomField::$table_name))) {
                  //field already exists when renaming a custom field
                    return false;
                }
                return \DB::statement("UPDATE ".CustomField::$table_name." RENAME ".self::name_to_db_name($custom_field->get_original("name"))." TO ".$custom_field->db_column_name());
            }
            return true;
        });

        self::deleting(function ($custom_field) {
            return \DB::statement("ALTER TABLE ".CustomField::$table_name." DROP COLUMN ".$custom_field->db_column_name());
        });
    }

    public function fieldset()
    {
        return $this->belongsToMany('\App\Models\CustomFieldset'); //?!?!?!?!?!?
    }

    public function user()
    {
        return $this->belongsTo('\App\Models\User');
    }

  //public function

  //need helper to go from regex->English
  //need helper to go from English->regex

  //need helper for save() stuff - basically to alter table for the fields in question

    public function check_format($value)
    {
        return preg_match('/^'.$this->attributes['format'].'$/', $value)===1;
    }

    public function db_column_name()
    {
        return self::name_to_db_name($this->name);
    }

    //mutators for 'format' attribute
    public function getFormatAttribute($value)
    {
        foreach (self::$PredefinedFormats as $name => $pattern) {
            if ($pattern===$value) {
                return $name;
            }
        }
        return $value;
    }

    public function setFormatAttribute($value)
    {
        if (isset(self::$PredefinedFormats[$value])) {
            $this->attributes['format']=self::$PredefinedFormats[$value];
        } else {
            $this->attributes['format']=$value;
        }
    }
}
