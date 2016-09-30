@extends('layouts/default')

{{-- Page title --}}
@section('title')
     {{ trans('admin/consumables/general.checkout') }}
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

          @if ($consumable->id)
            <div class="box-header with-border">
              <div class="box-heading">
                <h3 class="box-title">{{ $consumable->name }} </h3>
              </div>
            </div><!-- /.box-header -->
          @endif


        <div class="box-body">

          @if ($consumable->name)
          <!-- consumable name -->
          <div class="form-group">
          <label class="col-sm-3 control-label">{{ trans('admin/consumables/general.consumable_name') }}</label>
              <div class="col-md-6">
                <p class="form-control-static">{{ $consumable->name }}</p>
              </div>
          </div>
          @endif


          <!-- User -->

          <div class="form-group {{ $errors->has('assigned_to') ? ' has-error' : '' }}">
              <label for="assigned_to" class="col-md-3 control-label">{{ trans('admin/hardware/form.checkout_to') }}
               <i class='icon-asterisk'></i></label>
              <div class="col-md-9">
                  {{ Form::select('assigned_to', $users_list , Input::old('assigned_to', $consumable->assigned_to), array('class'=>'select2', 'style'=>'min-width:350px')) }}
                  {!! $errors->first('assigned_to', '<span class="alert-msg"><i class="fa fa-times"></i> :message</span>') !!}
              </div>
          </div>

          @if ($consumable->category->require_acceptance=='1')
          <div class="form-group">
                <div class="col-md-9 col-md-offset-3">
                  <p class="hint-block">{{ trans('admin/categories/general.required_acceptance') }}</p>
                </div>
                </div>
                @endif

                @if ($consumable->getEula())
                <div class="form-group">

                    <div class="col-md-9 col-md-offset-3">
                      <p class="hint-block">{{ trans('admin/categories/general.required_eula') }}</p>
                    </div>
                </div>
          @endif
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
