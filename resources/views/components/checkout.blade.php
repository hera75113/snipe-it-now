@extends('layouts/default')

{{-- Page title --}}
@section('title')
     {{ trans('admin/components/general.checkout') }}
@parent
@stop

{{-- Page content --}}
@section('content')

  <div class="row">
    <div class="col-md-9">

      <form class="form-horizontal" method="post" action="" autocomplete="off">
      <!-- CSRF Token -->
      <input type="hidden" name="_token" value="{{ csrf_token() }}" />

      <div class="box box-default">

          @if ($component->id)
            <div class="box-header with-border">
              <div class="box-heading">
                <h3 class="box-title">{{ $component->name }}  ({{ $component->numRemaining()  }}  {{ trans('admin/components/general.remaining') }})</h3>
              </div>
            </div><!-- /.box-header -->
          @endif


        <div class="box-body">

          @if ($component->name)
          <!-- consumable name -->
          <div class="form-group">
          <label class="col-sm-3 control-label">{{ trans('admin/components/general.component_name') }}</label>
              <div class="col-md-6">
                <p class="form-control-static">{{ $component->name }}</p>
              </div>
          </div>
          @endif


          <!-- Asset -->

          <div class="form-group {{ $errors->has('asset_id') ? ' has-error' : '' }}">
              <label for="asset_id" class="col-md-3 control-label">{{ trans('admin/hardware/form.checkout_to') }}
               <i class='icon-asterisk'></i></label>
              <div class="col-md-9">
                  {{ Form::select('asset_id', $assets_list , Input::old('asset_id', $component->asset_id), array('class'=>'select2', 'style'=>'width:100%')) }}
                  {!! $errors->first('asset_id', '<span class="alert-msg"><i class="fa fa-times"></i> :message</span>') !!}
              </div>
          </div>

          <div class="form-group {{ $errors->has('assigned_qty') ? ' has-error' : '' }}">
              <label for="assigned_qty" class="col-md-3 control-label">{{ trans('general.qty') }}
               <i class='icon-asterisk'></i></label>
              <div class="col-md-9">
                <input class="form-control" type="text" name="assigned_qty" id="assigned_qty" style="width: 70px;" value="{{ Input::old('assigned_qty') }}" />
                {!! $errors->first('assigned_qty', '<br><span class="alert-msg"><i class="fa fa-times"></i> :message</span>') !!}
              </div>
          </div>

        </div>
        <div class="box-footer text-right">
            <button type="submit" class="btn btn-success"><i class="fa fa-check icon-white"></i> {{ trans('general.save') }}</button>
        </div>
    </div>
  </div>



</form>

</div>
</div>
@stop
