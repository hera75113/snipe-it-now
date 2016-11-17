@extends('layouts/default')

{{-- Page title --}}
@section('title')
{{ trans('general.editprofile') }}
@stop

{{-- Account page content --}}
@section('content')

<div class="row">
  <div class="col-md-9">
    <div class="box box-default">
      <div class="box-body">
        {{ Form::open(['method' => 'POST', 'files' => true, 'class' => 'form-horizontal', 'autocomplete' => 'off']) }}
        <!-- CSRF Token -->
        <input type="hidden" name="_token" value="{{ csrf_token() }}" />

        <!-- First Name -->
        <div class="form-group {{ $errors->has('first_name') ? ' has-error' : '' }}">
            <label for="first_name" class="col-md-3 control-label">{{ trans('general.first_name') }}
            </label>
            <div class="col-md-5 required">
                <input class="form-control" type="text" name="first_name" id="first_name" value="{{ Input::old('first_name', $user->first_name) }}" />
                {!! $errors->first('first_name', '<span class="alert-msg"><i class="fa fa-times"></i> :message</span>') !!}
            </div>
        </div>

        <!-- Last Name -->
        <div class="form-group {{ $errors->has('last_name') ? ' has-error' : '' }}">
            <label for="last_name" class="col-md-3 control-label">{{ trans('general.last_name') }}

            </label>
            <div class="col-md-5 required">
                <input class="form-control" type="text" name="last_name" id="last_name" value="{{ Input::old('last_name', $user->last_name) }}" />
                {!! $errors->first('last_name', '<span class="alert-msg"><i class="fa fa-times"></i> :message</span>') !!}
            </div>
        </div>

        <!-- Location -->
            <div class="form-group {{ $errors->has('location_id') ? 'error' : '' }}">
                <label class="col-md-3 control-label" for="location_id">{{ trans('general.location') }}
                </label>
                <div class="col-md-5">
                    <div class="field-box">
                    {{ Form::select('location_id', $location_list , Input::old('location_id', $user->location_id), array('class'=>'select2', 'style'=>'width:300px')) }}
                    {!! $errors->first('location_id', '<span class="alert-msg"><i class="fa fa-times"></i> :message</span>') !!}
                    </div>
                </div>
            </div>

        <!-- Language -->
          <div class="form-group {{ $errors->has('locale') ? 'has-error' : '' }}">
              <label class="col-md-3 control-label" for="locale">{{ trans('general.language') }}</label>
              <div class="col-md-9">
                  {!! Form::locales('locale', Input::old('locale', $user->locale), 'select2') !!}
                  {!! $errors->first('locale', '<span class="alert-msg">:message</span>') !!}
              </div>
          </div>


      <!-- Website URL -->
        <div class="form-group {{ $errors->has('website') ? ' has-error' : '' }}">
            <label for="website" class="col-md-3 control-label">{{ trans('general.website') }}</label>
            <div class="col-md-5">
                <input class="form-control" type="text" name="website" id="website" value="{{ Input::old('website', $user->website) }}" />
                {!! $errors->first('website', '<span class="alert-msg"><i class="fa fa-times"></i> :message</span>') !!}
            </div>
        </div>

        <!-- Gravatar Email -->
        <div class="form-group {{ $errors->has('gravatar') ? ' has-error' : '' }}">
            <label for="gravatar" class="col-md-3 control-label">{{ trans('general.gravatar_email') }}
             <small>(Private)</small></label>
            <div class="col-md-5">
                <input class="form-control" type="text" name="gravatar" id="gravatar" value="{{ Input::old('gravatar', $user->gravatar) }}" />
                {!! $errors->first('gravatar', '<span class="alert-msg"><i class="fa fa-times"></i> :message</span>') !!}
                <p><img src="//secure.gravatar.com/avatar/{{ md5(strtolower(trim($user->gravatar))) }}" width="30" height="30" />
                <a href="http://gravatar.com"><small>Change your avatar at Gravatar.com</small></a>.
            </p>
            </div>
        </div>

      <!-- Avatar -->
        @if ($user->avatar)
            <div class="form-group {{ $errors->has('avatar_delete') ? 'has-error' : '' }}">
                <label class="col-md-3 control-label" for="avatar_delete">{{ trans('general.avatar_delete') }}</label>
                <div class="col-md-5">
                    {{ Form::checkbox('avatar_delete') }}
                    <img src="{{ config('app.url') }}/uploads/avatars/{{ $user->avatar }}" class="avatar img-circle">
                    {!! $errors->first('avatar_delete', '<span class="alert-msg">:message</span>') !!}
                </div>
            </div>
        @endif

      <div class="form-group {{ $errors->has('avatar') ? 'has-error' : '' }}">
        <label class="col-md-3 control-label" for="avatar">{{ trans('general.avatar_upload') }}</label>
        <div class="col-md-5">
          {{ Form::file('avatar') }}
          {!! $errors->first('avatar', '<span class="alert-msg">:message</span>') !!}
        </div>
      </div>


      <!-- Two factor opt in -->
         @if ($snipeSettings->two_factor_enabled=='1')

            <div class="form-group {{ $errors->has('avatar') ? 'has-error' : '' }}">

                <div class="col-md-7 col-md-offset-3">

                    @can('self.two_factor')
                        <label for="avatar">{{ Form::checkbox('two_factor_optin', '1', Input::old('two_factor_optin', $user->two_factor_optin),array('class' => 'minimal')) }}
                        @else
                            <label for="avatar">{{ Form::checkbox('two_factor_optin', '1', Input::old('two_factor_optin', $user->two_factor_optin),['class' => 'disabled minimal', 'disabled' => 'disabled']) }}
                        @endcan

                     {{ trans('admin/settings/general.two_factor_enabled_text') }}</label>
                    @can('self.two_factor')
                        <p class="help-block">{{ trans('admin/settings/general.two_factor_enabled_warning') }}</p>
                     @else
                       <p class="help-block">{{ trans('admin/settings/general.two_factor_enabled_edit_not_allowed') }}</p>
                     @endcan
                    @if (config('app.lock_passwords'))
                        <p class="help-block">{{ trans('general.feature_disabled') }}</p>
                    @endif
                </div>
            </div>

         @endif




      </div>
      <div class="box-footer text-right">
        <button type="submit" class="btn btn-success"><i class="fa fa-ok icon-white"></i> {{ trans('general.save') }}</button>
      </div>
    </div>
  </div>
</div>




</form>

@stop
