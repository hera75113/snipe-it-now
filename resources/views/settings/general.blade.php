@extends('layouts/default')

{{-- Page title --}}
@section('title')
    Update General Settings
    @parent
@stop

@section('header_right')
    <a href="{{ route('settings.index') }}" class="btn btn-default"> {{ trans('general.back') }}</a>
@stop


{{-- Page content --}}
@section('content')

    <style>
        .checkbox label {
            padding-right: 40px;
        }
    </style>



    {{ Form::open(['method' => 'POST', 'files' => false, 'autocomplete' => 'off', 'class' => 'form-horizontal', 'role' => 'form' ]) }}
    <!-- CSRF Token -->
    {{csrf_field()}}

    <div class="row">
        <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">


            <div class="panel box box-default">
                <div class="box-header with-border">
                    <h4 class="box-title">
                        <i class="fa fa-wrench"></i> {{ trans('admin/settings/general.general_settings') }}
                    </h4>
                </div>
               <div class="box-body">


                   <div class="col-md-12">

                    <!-- Full Multiple Companies Support -->
                    <div class="form-group {{ $errors->has('full_multiple_companies_support') ? 'error' : '' }}">
                        <div class="col-md-3">
                            {{ Form::label('full_multiple_companies_support',
                                           trans('admin/settings/general.full_multiple_companies_support_text')) }}
                        </div>
                        <div class="col-md-9">
                            {{ Form::checkbox('full_multiple_companies_support', '1', Input::old('full_multiple_companies_support', $setting->full_multiple_companies_support),array('class' => 'minimal')) }}
                            {{ trans('admin/settings/general.full_multiple_companies_support_text') }}
                            {!! $errors->first('full_multiple_companies_support', '<span class="alert-msg">:message</span>') !!}
                            <p class="help-block">
                                {{ trans('admin/settings/general.full_multiple_companies_support_help_text') }}
                            </p>
                        </div>
                    </div>
                    <!-- /.form-group -->

                    <!-- Require signature for acceptance -->
                    <div class="form-group {{ $errors->has('require_accept_signature') ? 'error' : '' }}">
                        <div class="col-md-3">
                            {{ Form::label('full_multiple_companies_support',
                                           trans('admin/settings/general.require_accept_signature')) }}
                        </div>
                        <div class="col-md-9">
                            {{ Form::checkbox('require_accept_signature', '1', Input::old('require_accept_signature', $setting->require_accept_signature),array('class' => 'minimal')) }}
                            {{ trans('general.yes') }}
                            {!! $errors->first('require_accept_signature', '<span class="alert-msg">:message</span>') !!}
                            <p class="help-block">{{ trans('admin/settings/general.require_accept_signature_help_text') }}</p>
                        </div>
                    </div>
                    <!-- /.form-group -->


                    <!-- Email domain -->
                    <div class="form-group {{ $errors->has('email_domain') ? 'error' : '' }}">
                        <div class="col-md-3">
                            {{ Form::label('email_domain', trans('general.email_domain')) }}
                        </div>
                        <div class="col-md-9">
                            {{ Form::text('email_domain', Input::old('email_domain', $setting->email_domain), array('class' => 'form-control','placeholder' => 'example.com')) }}
                            <span class="help-block">{{ trans('general.email_domain_help')  }}</span>
                            {!! $errors->first('email_domain', '<span class="alert-msg">:message</span>') !!}
                        </div>
                    </div>


                    <!-- Email format -->
                    <div class="form-group {{ $errors->has('email_format') ? 'error' : '' }}">
                        <div class="col-md-3">
                            {{ Form::label('email_format', trans('general.email_format')) }}
                        </div>
                        <div class="col-md-9">
                            {!! Form::username_format('email_format', Input::old('email_format', $setting->email_format), 'select2') !!}
                            {!! $errors->first('email_format', '<span class="alert-msg">:message</span>') !!}
                        </div>
                    </div>

                    <!-- Username format -->
                    <div class="form-group {{ $errors->has('username_format') ? 'error' : '' }}">
                        <div class="col-md-3">
                            {{ Form::label('username_format', trans('general.username_format')) }}
                        </div>
                        <div class="col-md-9">
                            {!! Form::username_format('username_format', Input::old('username_format', $setting->username_format), 'select2') !!}
                            {!! $errors->first('username_format', '<span class="alert-msg">:message</span>') !!}
                        </div>
                    </div>



                    <!-- remote load -->
                    <div class="form-group">
                        <div class="col-md-3">
                            {{ Form::label('load_remote', trans('admin/settings/general.load_remote_text')) }}
                        </div>
                        <div class="col-md-9">
                            {{ Form::checkbox('load_remote', '1', Input::old('load_remote', $setting->load_remote),array('class' => 'minimal')) }}
                            {{ trans('admin/settings/general.load_remote_help_text') }}
                        </div>
                    </div>

                    <!-- Per Page -->
                    <div class="form-group {{ $errors->has('per_page') ? 'error' : '' }}">
                        <div class="col-md-3">
                            {{ Form::label('per_page', trans('admin/settings/general.per_page')) }}
                        </div>
                        <div class="col-md-9">
                            {{ Form::text('per_page', Input::old('per_page', $setting->per_page), array('class' => 'form-control','placeholder' => '5', 'maxlength'=>'3', 'style'=>'width: 60px;')) }}
                            {!! $errors->first('per_page', '<span class="alert-msg">:message</span>') !!}
                        </div>
                    </div>

                   <!-- Thumb Size -->
                   <div class="form-group {{ $errors->has('thumbnail_max_h') ? 'error' : '' }}">
                       <div class="col-md-3">
                           {{ Form::label('thumbnail_max_h', trans('admin/settings/general.thumbnail_max_h')) }}
                       </div>
                       <div class="col-md-9">
                           {{ Form::text('thumbnail_max_h', Input::old('thumbnail_max_h', $setting->thumbnail_max_h), array('class' => 'form-control','placeholder' => '50', 'maxlength'=>'3', 'style'=>'width: 60px;')) }}
                           <p class="help-block">{{ trans('admin/settings/general.thumbnail_max_h_help') }}</p>
                           {!! $errors->first('thumbnail_max_h', '<span class="alert-msg">:message</span>') !!}
                       </div>
                   </div>

                    <!-- Default EULA -->
                   <div class="form-group {{ $errors->has('default_eula_text') ? 'error' : '' }}">
                       <div class="col-md-3">
                           {{ Form::label('per_page', trans('admin/settings/general.default_eula_text')) }}
                       </div>
                       <div class="col-md-9">
                           {{ Form::textarea('default_eula_text', Input::old('default_eula_text', $setting->default_eula_text), array('class' => 'form-control','placeholder' => 'Add your default EULA text')) }}
                           {!! $errors->first('default_eula_text', '<span class="alert-msg">:message</span>') !!}
                           <p class="help-block">{{ trans('admin/settings/general.default_eula_help_text') }}</p>
                           <p class="help-block">{!! trans('admin/settings/general.eula_markdown') !!}</p>
                       </div>
                   </div>


                    <!-- login text -->
                    <div class="form-group {{ $errors->has('custom_css') ? 'error' : '' }}">
                        <div class="col-md-3">
                            {{ Form::label('login_note', trans('admin/settings/general.login_note')) }}
                        </div>
                        <div class="col-md-9">
                            @if (config('app.lock_passwords'))

                                <textarea class="form-control disabled" name="login_note" placeholder="If you do not have a login or have found a device belonging to this company, please call technical support at 888-555-1212. Thank you." rows="2" readonly>{{ Input::old('login_note', $setting->login_note) }}</textarea>
                                {!! $errors->first('login_note', '<span class="alert-msg">:message</span>') !!}
                                <p class="help-block">{{ trans('general.lock_passwords') }}</p>
                            @else
                                <textarea class="form-control" name="login_note" placeholder="If you do not have a login or have found a device belonging to this company, please call technical support at 888-555-1212. Thank you." rows="2">{{ Input::old('login_note', $setting->login_note) }}</textarea>
                                {!! $errors->first('login_note', '<span class="alert-msg">:message</span>') !!}
                            @endif
                            <p class="help-block">{!!  trans('admin/settings/general.login_note_help') !!}</p>
                        </div>
                    </div>

            </div> <!--/.box-body-->
            <div class="box-footer">
                <div class="text-left col-md-6">
                    <a class="btn btn-link text-left" href="{{ route('settings.index') }}">{{ trans('button.cancel') }}</a>
                </div>
                <div class="text-right col-md-6">
                    <button type="submit" class="btn btn-success"><i class="fa fa-check icon-white"></i> {{ trans('general.save') }}</button>
                </div>

            </div>
            </div>
        </div> <!-- /box -->
    </div> <!-- /.col-md-8-->
    </div> <!-- /.row-->

    {{Form::close()}}

@stop

@section('moar_scripts')
    <!-- bootstrap color picker -->
    <script nonce="{{ csrf_token() }}">
        //color picker with addon
        $(".header-color").colorpicker();
        // toggle the disabled state of asset id prefix
        $('#auto_increment_assets').on('ifChecked', function(){
            $('#auto_increment_prefix').prop('disabled', false).focus();
        }).on('ifUnchecked', function(){
            $('#auto_increment_prefix').prop('disabled', true);
        });
    </script>
@stop
