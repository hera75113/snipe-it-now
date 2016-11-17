@extends('layouts/edit-form', [
    'createText' => trans('admin/locations/table.create') ,
    'updateText' => trans('admin/locations/table.update'),
    'helpTitle' => trans('admin/locations/table.about_locations_title'),
    'helpText' => trans('admin/locations/table.about_locations')
])

{{-- Page content --}}
@section('inputFields')
@include ('partials.forms.edit.name', ['translated_name' => trans('admin/locations/table.name')])

<!-- Parent-->
<div class="form-group {{ $errors->has('parent_id') ? ' has-error' : '' }}">
    <label for="parent_id" class="col-md-3 control-label">
        {{ trans('admin/locations/table.parent') }}
    </label>
    <div class="col-md-9{{  (\App\Helpers\Helper::checkIfRequired($item, 'parent_id')) ? ' required' : '' }}">
        {!! Form::select('parent_id', $location_options , Input::old('parent_id', $item->parent_id), array('class'=>'select2 parent', 'style'=>'width:350px')) !!}
        {!! $errors->first('parent_id', '<span class="alert-msg"><i class="fa fa-times"></i> :message</span>') !!}
    </div>
</div>

<!-- Currency -->
<div class="form-group {{ $errors->has('currency') ? ' has-error' : '' }}">
    <label for="currency" class="col-md-3 control-label">
        {{ trans('admin/locations/table.currency') }}
    </label>
    <div class="col-md-9{{  (\App\Helpers\Helper::checkIfRequired($item, 'currency')) ? ' required' : '' }}">
        {{ Form::text('currency', Input::old('currency', $item->currency), array('class' => 'form-control','placeholder' => 'USD', 'maxlength'=>'3', 'style'=>'width: 60px;')) }}
        {!! $errors->first('currency', '<span class="alert-msg">:message</span>') !!}
    </div>
</div>

@include ('partials.forms.edit.address')
@stop

@if (!$item->id)
@section('moar_scripts')
<script>

    var $eventSelect = $(".parent");
    $eventSelect.on("change", function () { parent_details($eventSelect.val()); });
    $(function() {
        var parent_loc = $(".parent option:selected").val();
        if(parent_loc!=''){
            parent_details(parent_loc);
        }
    });

    function parent_details(id) {

        if (id) {
//start ajax request
$.ajax({
    type: 'GET',
    url: "{{config('app.url') }}/api/locations/"+id+"/check",
//force to handle it as text
dataType: "text",
success: function(data) {
    var json = $.parseJSON(data);
    $("#city").val(json.city);
    $("#address").val(json.address);
    $("#address2").val(json.address2);
    $("#state").val(json.state);
    $("#zip").val(json.zip);
    $(".country").select2("val",json.country);
}
});
} else {
    $("#city").val('');
    $("#address").val('');
    $("#address2").val('');
    $("#state").val('');
    $("#zip").val('');
    $(".country").select2("val",'');
}



};
</script>
@stop
@endif
