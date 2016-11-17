@extends('layouts/default')

{{-- Page title --}}
@section('title')
{{ trans('admin/hardware/form.update') }}
@parent
@stop


@section('header_right')
<a href="{{ URL::previous() }}" class="btn btn-sm btn-primary pull-right">
  {{ trans('general.back') }}</a>
@stop


{{-- Page content --}}

@section('content')



<div class="row">
  <div class="col-md-8 col-md-offset-2">

    <p>{{ trans('admin/hardware/form.bulk_update_help') }}</p>

    <div class="callout callout-warning">
      <i class="fa fa-warning"></i> {{ trans('admin/hardware/form.bulk_update_warn', ['asset_count' => count($assets)]) }}
    </div>



    <form class="form-horizontal" method="post" action="{{ route('hardware/bulksave') }}" autocomplete="off" role="form">

   <!-- CSRF Token -->
   <input type="hidden" name="_token" value="{{ csrf_token() }}" />

    <div class="box box-default">

      <div class="box-body">
        <!-- Purchase Date -->
        <div class="form-group {{ $errors->has('purchase_date') ? ' has-error' : '' }}">
            <label for="purchase_date" class="col-md-2 control-label">{{ trans('admin/hardware/form.date') }}</label>
            <div class="input-group col-md-3">
                <input type="date" class="datepicker form-control" data-date-format="yyyy-mm-dd" placeholder="Select Date" name="purchase_date" id="purchase_date" value="{{ Input::old('purchase_date') }}">
                <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
            {!! $errors->first('purchase_date', '<span class="alert-msg"><i class="fa fa-times"></i> :message</span>') !!}
            </div>
        </div>

        <!-- Status -->
        <div class="form-group {{ $errors->has('status_id') ? ' has-error' : '' }}">
            <label for="status_id" class="col-md-2 control-label">
              {{ trans('admin/hardware/form.status') }}
            </label>
                <div class="col-md-7">
                    {{ Form::select('status_id', $statuslabel_list , Input::old('status_id'), array('class'=>'select2', 'style'=>'width:350px')) }}
                    {!! $errors->first('status_id', '<span class="alert-msg"><i class="fa fa-times"></i> :message</span>') !!}
                </div>
        </div>

        <!-- Asset Model -->
        <div class="form-group {{ $errors->has('model_id') ? ' has-error' : '' }}">
            <label for="model_id" class="col-md-2 control-label">
              {{ trans('admin/hardware/form.model') }}
            </label>
                <div class="col-md-7">
                    {{ Form::select('model_id', $models_list , Input::old('model_id'), array('class'=>'select2', 'style'=>'width:350px')) }}
                    {!! $errors->first('model_id', '<span class="alert-msg"><i class="fa fa-times"></i> :message</span>') !!}
                </div>
        </div>


        <!-- Default Location -->
        <div class="form-group {{ $errors->has('status_id') ? ' has-error' : '' }}">
            <label for="status_id" class="col-md-2 control-label">{{ trans('admin/hardware/form.default_location') }}</label>
                <div class="col-md-7">
                    {{ Form::select('rtd_location_id', $location_list , Input::old('rtd_location_id'), array('class'=>'select2', 'style'=>'width:350px')) }}
                    {!! $errors->first('status_id', '<span class="alert-msg"><i class="fa fa-times"></i> :message</span>') !!}
                </div>
        </div>

        <!-- Purchase Cost -->
        <div class="form-group {{ $errors->has('purchase_cost') ? ' has-error' : '' }}">
            <label for="purchase_cost" class="col-md-2 control-label">
              {{ trans('admin/hardware/form.cost') }}
            </label>
            <div class="input-group col-md-3">
              <span class="input-group-addon">{{ $snipeSettings->default_currency }}</span>
                <input type="text" class="form-control" placeholder="{{ trans('admin/hardware/form.cost') }}" name="purchase_cost" id="purchase_cost" value="{{ Input::old('purchase_cost') }}">

            {!! $errors->first('purchase_cost', '<span class="alert-msg"><i class="fa fa-times"></i> :message</span>') !!}
            </div>
        </div>

        <!-- Supplier -->
        <div class="form-group {{ $errors->has('supplier_id') ? ' has-error' : '' }}">
            <label for="supplier_id" class="col-md-2 control-label">{{ trans('admin/hardware/form.supplier') }}</label>
            <div class="col-md-7">
                {{ Form::select('supplier_id', $supplier_list , Input::old('supplier_id'), array('class'=>'select2', 'style'=>'min-width:350px')) }}
                {!! $errors->first('supplier_id', '<span class="alert-msg"><i class="fa fa-times"></i> :message</span>') !!}
            </div>
        </div>

        <!-- Company -->
        <div class="form-group {{ $errors->has('company_id') ? ' has-error' : '' }}">
            <label for="company_id" class="col-md-2 control-label">
              {{ trans('general.company') }}
            </label>
                <div class="col-md-7">
                    {{ Form::select('company_id', $companies_list , Input::old('company_id'), array('class'=>'select2', 'style'=>'width:350px')) }}
                    {!! $errors->first('company_id', '<span class="alert-msg"><i class="fa fa-times"></i> :message</span>') !!}
                </div>
        </div>

        <!-- Order Number -->
        <div class="form-group {{ $errors->has('order_number') ? ' has-error' : '' }}">
            <label for="order_number" class="col-md-2 control-label">{{ trans('admin/hardware/form.order') }}</label>
            <div class="col-md-7">
                <input class="form-control" type="text" name="order_number" id="order_number" value="{{ Input::old('order_number') }}" />
                {!! $errors->first('order_number', '<span class="alert-msg"><i class="fa fa-times"></i> :message</span>') !!}
            </div>
        </div>

        <!-- Warranty -->
        <div class="form-group {{ $errors->has('warranty_months') ? ' has-error' : '' }}">
            <label for="warranty_months" class="col-md-2 control-label">{{ trans('admin/hardware/form.warranty') }}</label>
            <div class="col-md-2">
                <div class="input-group">
                <input class="col-md-2 form-control" type="text" name="warranty_months" id="warranty_months" value="{{ Input::old('warranty_months') }}" />   <span class="input-group-addon">{{ trans('admin/hardware/form.months') }}</span>
                {!! $errors->first('warranty_months', '<span class="alert-msg"><i class="fa fa-times"></i> :message</span>') !!}
                </div>
            </div>
        </div>

        <!-- Requestable -->

        <div class="form-group {{ $errors->has('warranty_months') ? ' has-error' : '' }}">
            <label for="requestable" class="col-md-2 control-label">{{ trans('admin/hardware/form.requestable') }}</label>
            <div class="col-md-10">
                <label class="radio">
                  <input type="radio" name="requestable" value="1"> Yes
                </label>
                <label class="radio">
                  <input type="radio" name="requestable" value="0"> No
                </label>
                <label class="radio">
                  <input type="radio" name="requestable" value=""> Do Not Change
                </label>
            </div>
        </div>


        @foreach ($assets as $key => $value)
          <input type="hidden" name="bulk_edit[{{ $key }}]" value="1">
        @endforeach


      </div>

      <div class="box-footer text-right">
          <button type="submit" class="btn btn-success"><i class="fa fa-check icon-white"></i> {{ trans('general.save') }}</button>
      </div>
    </div>


        </form>
    </div>
</div>
@stop
