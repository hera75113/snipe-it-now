@extends('layouts/default')

{{-- Page title --}}
@section('title')
Create a User
@parent
@stop

@section('header_right')
<a href="{{ route('users') }}" class="btn btn-default"> {{ trans('general.back') }}</a>
@stop

{{-- Page content --}}
@section('content')


<div class="row">
  <div class="col-md-8 col-md-offset-2">
    <div class="box box-default">
      <div class="box-body">
        <form class="form-horizontal" role="form" method="post" enctype="multipart/form-data" action="">
        <!-- CSRF Token -->
        <input type="hidden" name="_token" value="{{ csrf_token() }}" />

			@if (Session::get('message'))
			<p class="alert-danger">
				You have an error in your CSV file:<br />
				{{ Session::get('message') }}
			</p>
			@endif

			<p>
				Upload a CSV file with one or more users.  Passwords will be auto-generated.  The CSV should have the <strong>first</strong> fields as: </p>

        <p><strong>firstName,lastName, username, email, location_id, phone, jobtitle, employee_num, company_id</strong>. </p>

        <p>Any additional fields to the right of those fields will be ignored. Email is optional, however users will not be able to recover their passwords or receive EULAs if you do not provide an email address. If you wish to include a company association, you must reference the ID number of an existing company - companies will not be created on the fly.
			</p>

            @if (config('app.lock_passwords'))
                <p>Note: Email notification for users is disabled for this installation.</p>
            @endif

            <div class="form-group {!! $errors->first('user_import_csv', 'has-error') }}">
                <label for="first_name" class="col-sm-3 control-label">{{ trans('admin/users/general.usercsv') }}</label>
        				<div class="col-sm-5">
        					<input type="file" name="user_import_csv" id="user_import_csv">
        				</div>
            </div>

            <!-- Has Headers -->
    			<div class="form-group">
    				<div class="col-sm-2 ">
    				</div>
    				<div class="col-sm-5">
    					{{ Form::checkbox('has_headers', '1', Input::old('has_headers')) }} This CSV has a header row
    				</div>
    			</div>


    			<!-- Email user -->
    			<div class="form-group">
    				<div class="col-sm-2 ">
    				</div>
    				<div class="col-sm-5">
    					{{ Form::checkbox('email_user', '1', Input::old('email_user')) }} Email these users their credentials? (Only possible where email address is included with user data.)
    				</div>
    			</div>

    			<!-- Activate -->
    			<div class="form-group">
    				<div class="col-sm-2 ">
    				</div>
    				<div class="col-sm-5">
    					{{ Form::checkbox('activate', '1', Input::old('activate')) }} Activate user?
    				</div>
    			</div>



        </div>

    <!-- Form Actions -->
    <div class="box-footer text-right">
      <button type="submit" class="btn btn-default">{{ trans('button.submit') }}</button>
    </div>

</form>
</div></div></div></div>
<script>
$(document).ready(function(){

    $('#generate-password').pGenerator({
        'bind': 'click',
        'passwordElement': '#password',
        'displayElement': '#password-display',
        'passwordLength': 10,
        'uppercase': true,
        'lowercase': true,
        'numbers':   true,
        'specialChars': false,

    });
});

</script>
@stop
