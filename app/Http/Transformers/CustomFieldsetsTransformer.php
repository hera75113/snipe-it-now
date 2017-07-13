<?php
namespace App\Http\Transformers;

use App\Models\CustomFieldset;
use App\Models\CustomField;
use App\Models\AssetModel;
use Illuminate\Database\Eloquent\Collection;
use App\Helpers\Helper;
use Gate;

class CustomFieldsetsTransformer
{

    public function transformCustomFieldsets (Collection $fieldsets, $total)
    {
        $array = array();
        foreach ($fieldsets as $fieldset) {
            $array[] = self::transformCustomFieldset($fieldset);
        }
        return (new DatatablesTransformer)->transformDatatables($array, $total);
    }

    public function transformCustomFieldset (CustomFieldset $fieldset)
    {
        $fields = $fieldset->fields;
        $models = $fieldset->models;
        $modelsArray = array();

        foreach ($models as $model)
        {
            $modelsArray[] = [
              'id' => $model->id,
              'name' => e($model->name)
            ];
        }

        $array = [
            'id' => $fieldset->id,
            'name' => e($fieldset->name),
            'fields' => (new CustomFieldsTransformer)->transformCustomFields($fields, $fieldset->fields_count),
            'models' => (new DatatablesTransformer)->transformDatatables($modelsArray, $fieldset->models_count)
        ];
        return $array;
    }
}
