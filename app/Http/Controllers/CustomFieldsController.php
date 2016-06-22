<?php
namespace App\Http\Controllers;

use View;
use App\Models\CustomFieldset;
use App\Models\CustomField;
use Input;
use Validator;
use Redirect;
use App\Models\AssetModel;
use Lang;
use Auth;

/**
 * This controller handles all actions related to Custom Asset Fields for
 * the Snipe-IT Asset Management application.
 *
 * @todo Improve documentation here.
 * @todo Check for raw DB queries and try to convert them to query builder statements
 * @version    v2.0
 * @author [Brady Wetherington] [<uberbrady@gmail.com>]
 */

class CustomFieldsController extends Controller
{

    /**
    * Returns a view with a listing of custom fields.
    *
    * @author [Brady Wetherington] [<uberbrady@gmail.com>]
    * @since [v1.8]
    * @return View
    */
    public function index()
    {
        //
        $fieldsets=CustomFieldset::with("fields", "models")->get();
        //$fieldsets=CustomFieldset::all();
        $fields=CustomField::with("fieldset")->get();
        //$fields=CustomField::all();
        return View::make("custom_fields.index")->with("custom_fieldsets", $fieldsets)->with("custom_fields", $fields);
    }


    /**
    * Returns a view with a form for creating a new custom fieldset.
    *
    * @author [Brady Wetherington] [<uberbrady@gmail.com>]
    * @since [v1.8]
    * @return View
    */
    public function create()
    {
        //
        return View::make("custom_fields.create");
    }


    /**
    * Validates and stores a new custom fieldset.
    *
    * @author [Brady Wetherington] [<uberbrady@gmail.com>]
    * @since [v1.8]
    * @return Redirect
    */
    public function store()
    {
        //
        $cfset=new CustomFieldset(["name" => Input::get("name"),"user_id" => Auth::user()->id]);
        $validator=Validator::make(Input::all(), $cfset->rules);
        if ($validator->passes()) {
            $cfset->save();
            return redirect()->route("admin.custom_fields.show", [$cfset->id])->with('success', trans('admin/custom_fields/message.fieldset.create.success'));
        } else {
            return redirect()->back()->withInput()->withErrors($validator);
        }
    }

    /**
    * Associate the custom field with a custom fieldset.
    *
    * @author [Brady Wetherington] [<uberbrady@gmail.com>]
    * @since [v1.8]
    * @return View
    */
    public function associate($id)
    {

        $set = CustomFieldset::find($id);

        foreach ($set->fields as $field) {
            if ($field->id == Input::get('field_id')) {
                return redirect()->route("admin.custom_fields.show", [$id])->withInput()->withErrors(['field_id' => trans('admin/custom_fields/message.field.already_added')]);
            }
        }

        $results=$set->fields()->attach(Input::get('field_id'), ["required" => (Input::get('required') == "on"),"order" => Input::get('order')]);

        return redirect()->route("admin.custom_fields.show", [$id])->with("success", trans('admin/custom_fields/message.field.create.assoc_success'));
    }


    /**
    * Returns a view with a form to create a new custom field.
    *
    * @see CustomFieldsController::storeField()
    * @author [Brady Wetherington] [<uberbrady@gmail.com>]
    * @since [v1.8]
    * @return View
    */
    public function createField()
    {
        return View::make("custom_fields.create_field");
    }


    /**
    * Validates and stores a new custom field.
    *
    * @see CustomFieldsController::createField()
    * @author [Brady Wetherington] [<uberbrady@gmail.com>]
    * @since [v1.8]
    * @return Redirect
    */
    public function storeField()
    {
        $field=new CustomField(["name" => Input::get("name"),"element" => Input::get("element"),"user_id" => Auth::user()->id]);


        if (!in_array(Input::get('format'), array_keys(CustomField::$PredefinedFormats))) {
            $field->format=Input::get("custom_format");
        } else {
            $field->format=Input::get('format');
        }

        $validator=Validator::make(Input::all(), $field->rules);
        if ($validator->passes()) {
            $results=$field->save();
            //return "postCreateField: $results";
            if ($results) {
                return redirect()->route("admin.custom_fields.index")->with("success", trans('admin/custom_fields/message.field.create.success'));
            } else {
                return redirect()->back()->withInput()->with('error', trans('admin/custom_fields/message.field.create.error'));
            }
        } else {
            return redirect()->back()->withInput()->withErrors($validator);
        }
    }

    /**
    * Delete a custom field.
    *
    * @author [Brady Wetherington] [<uberbrady@gmail.com>]
    * @since [v1.8]
    * @return Redirect
    */
    public function deleteField($field_id)
    {
        $field=CustomField::find($field_id);

        if ($field->fieldset->count()>0) {
            return redirect()->back()->withErrors(['message' => "Field is in-use"]);
        } else {
            $field->delete();
            return redirect()->route("admin.custom_fields.index")->with("success", trans('admin/custom_fields/message.field.delete.success'));
        }
    }

    /**
    * Validates and stores a new custom field.
    *
    * @author [Brady Wetherington] [<uberbrady@gmail.com>]
    * @param int $id
    * @since [v1.8]
    * @return View
    */
    public function show($id)
    {
        //$id=$parameters[0];
        $cfset=CustomFieldset::find($id);

        //print_r($parameters);
        //
        $custom_fields_list=["" => "Add New Field to Fieldset"] + CustomField::lists("name", "id")->toArray();
        // print_r($custom_fields_list);
        $maxid=0;
        foreach ($cfset->fields as $field) {
            // print "Looking for: ".$field->id;
            if ($field->pivot->order > $maxid) {
                $maxid=$field->pivot->order;
            }
            if (isset($custom_fields_list[$field->id])) {
                // print "Found ".$field->id.", so removing it.<br>";
                unset($custom_fields_list[$field->id]);
            }
        }

        return View::make("custom_fields.show")->with("custom_fieldset", $cfset)->with("maxid", $maxid+1)->with("custom_fields_list", $custom_fields_list);
    }


    /**
    * What the actual fuck, Brady?
    *
    * @todo Uhh, build this?
    * @author [Brady Wetherington] [<uberbrady@gmail.com>]
    * @param  int  $id
    * @since [v1.8]
    * @return Fuckall
    */
    public function edit($id)
    {
        //
    }


    /**
    * GET IN THE SEA BRADY.
    *
    * @todo Uhh, build this too?
    * @author [Brady Wetherington] [<uberbrady@gmail.com>]
    * @param  int  $id
    * @since [v1.8]
    * @return Fuckall
    */
    public function update($id)
    {
        //
    }


    /**
    * Validates a custom fieldset and then deletes if it has no models associated.
    *
    * @author [Brady Wetherington] [<uberbrady@gmail.com>]
    * @param  int  $id
    * @since [v1.8]
    * @return View
    */
    public function destroy($id)
    {
        //
        $fieldset=CustomFieldset::find($id);

        $models = AssetModel::where("fieldset_id", "=", $id);
        if ($models->count()==0) {
            $fieldset->delete();
            return redirect()->route("admin.custom_fields.index")->with("success", trans('admin/custom_fields/message.fieldset.delete.success'));
        } else {
            return redirect()->route("admin.custom_fields.index")->with("error", trans('admin/custom_fields/message.fieldset.delete.in_use')); //->with("models",$models);
        }
    }


    /**
     * Reorder the custom fields within a fieldset
     *
     * @author [Brady Wetherington] [<uberbrady@gmail.com>]
     * @param  int  $id
     * @since [v3.0]
     * @return Array
     */
    public function postReorder($id)
    {
        $fieldset=CustomFieldset::find($id);
        $fields = array();

        $items = Input::get('item');
        foreach ($fieldset->fields as $field) {
            $value = array_shift($items);
            $fields[$field->id] = ['required' => $field->pivot->required, 'order' => $value];
        }
        return $fieldset->fields()->sync($fields);


    }
}
