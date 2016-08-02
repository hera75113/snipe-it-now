@extends('layouts/default')

{{-- Page title --}}
@section('title')
    @if ($statuslabel->id)
        {{ trans('admin/statuslabels/table.update') }}
    @else
        {{ trans('admin/statuslabels/table.create') }}
    @endif
@parent
@stop

@section('header_right')
<a href="{{ URL::previous() }}" class="btn btn-primary pull-right">
    {{ trans('general.back') }}</a>
@stop


{{-- Page content --}}
@section('content')

    <style>
        .input-group-addon {
            width: 30px;
        }
    </style>
<!-- Bootstrap Color Picker -->
<link rel="stylesheet" href="{{ asset('assets/js/plugins/colorpicker/bootstrap-colorpicker.min.css') }}">


<div class="row">
  <div class="col-md-9">
    <form class="form-horizontal" method="post" action="" autocomplete="off">

        <!-- CSRF Token -->
        <input type="hidden" name="_token" value="{{ csrf_token() }}" />

        <div class="box box-default">
          <div class="box-body">
            <!-- Asset Title -->
            <div class="form-group {{ $errors->has('name') ? ' has-error' : '' }}">
                <label for="name" class="col-md-3 control-label">{{ trans('general.name') }}</label>
                </label>
                    <div class="col-md-7 required">
                        <input class="form-control" type="text" name="name" id="name" value="{{ Input::old('name', $statuslabel->name) }}" />
                        {!! $errors->first('name', '<span class="alert-msg"><i class="fa fa-times"></i> :message</span>') !!}
                    </div>
            </div>

          <!-- Label type -->
          <div class="form-group {{ $errors->has('statuslabel_types') ? 'has-error' : '' }}">
              <label for="statuslabel_types" class="col-md-3 control-label">{{ trans('admin/statuslabels/table.status_type') }}
              </label>
              <div class="col-md-7 required">
                  {{ Form::select('statuslabel_types', $statuslabel_types, $statuslabel->getStatuslabelType(), array('class'=>'select2', 'style'=>'min-width:400px')) }}
                  {!! $errors->first('statuslabel_types', '<span class="alert-msg"><i class="fa fa-times"></i> :message</span>') !!}
              </div>
          </div>

              <!-- Chart color -->
              <div class="form-group{{ $errors->has('color') ? ' has-error' : '' }}">
                    {{ Form::label('color', trans('admin/statuslabels/table.color'), ['class' => 'col-md-3 control-label']) }}
                  <div class="col-md-2">
                      <div class="input-group color">
                          {{ Form::text('color', Input::old('color', $statuslabel->color), array('class' => 'form-control', 'style' => 'width: 100px;', 'maxlength'=>'10')) }}
                          <div class="input-group-addon"><i></i></div>
                      </div><!-- /.input group -->


                      {!! $errors->first('header_color', '<span class="alert-msg">:message</span>') !!}
                  </div>
              </div>

            <!-- Note -->
            <div class="form-group {{ $errors->has('notes') ? 'has-error' : '' }}">
                <label for="notes" class="col-md-3 control-label">{{ trans('admin/hardware/form.notes') }}</label>
                <div class="col-md-7">
                    <textarea class="col-md-12 form-control" id="notes" name="notes">{{ Input::old('notes', $statuslabel->notes) }}</textarea>
                    {!! $errors->first('notes', '<span class="alert-msg"><i class="fa fa-times"></i> :message</span>') !!}
                </div>
            </div>




          </div>
          <div class="box-footer text-right">
                <button type="submit" class="btn btn-success"><i class="fa fa-check icon-white"></i> {{ trans('general.save') }}</button>
          </div>
      </div>
</div>

<!-- side address column -->
<div class="col-md-3">
    <h4>{{ trans('admin/statuslabels/table.about') }}</h4>
    <p>{{ trans('admin/statuslabels/table.info') }}</p>

</div>
</div>

@section('moar_scripts')
    <!-- bootstrap color picker -->
    <script>
        //color picker with addon
        $(".color").colorpicker();
    </script>
@stop
@stop
