@extends('layouts/edit-form', [
    'createText' => trans('admin/accessories/general.create') ,
    'updateText' => trans('admin/accessories/general.update'),
    'helpTitle' => trans('admin/accessories/general.about_accessories_title'),
    'helpText' => trans('admin/accessories/general.about_accessories_text'),
    'formAction' => ($item) ? route('accessories.update', ['accessory' => $item->id]) : route('accessories.store'),
])

{{-- Page content --}}
@section('inputFields')

@include ('partials.forms.edit.company')
@include ('partials.forms.edit.name', ['translated_name' => trans('admin/accessories/general.accessory_name')])
@include ('partials.forms.edit.category')
@include ('partials.forms.edit.supplier')
@include ('partials.forms.edit.manufacturer')
@include ('partials.forms.edit.location')
@include ('partials.forms.edit.model_number')
@include ('partials.forms.edit.order_number')
@include ('partials.forms.edit.purchase_date')
@include ('partials.forms.edit.purchase_cost')
@include ('partials.forms.edit.quantity')
@include ('partials.forms.edit.minimum_quantity')

<!-- Image -->

<div class="form-group {{ $errors->has('image') ? ' has-error' : '' }}">
    {{ Form::label('image', trans('general.image_upload'), array('class' => 'col-md-3 control-label')) }}
    <div class="col-md-7">
        @if (config('app.lock_passwords'))
            <p class="help-block">{{ trans('general.lock_passwords') }}</p>
        @else
            {{ Form::file('image') }}
            {!! $errors->first('image', '<span class="alert-msg">:message</span>') !!}
        @endif
    </div>
</div>



@stop
