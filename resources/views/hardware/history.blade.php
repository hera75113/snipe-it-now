@extends('layouts/default')

{{-- Page title --}}
@section('title')
    Import History
    @parent
@stop

@section('header_right')
    <a href="{{ route('hardware') }}" class="btn btn-default"> {{ trans('general.back') }}</a>
@stop

{{-- Page content --}}
@section('content')


    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="box box-default">
                <div class="box-body">
                    <div class="col-md-12">
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
                           Upload a CSV that contains asset history. The assets MUST already exist in the system, or they will be skipped. Matching assets for history import happens against the asset tag.
                        </p>

                        <p>Fields included in the CSV must match the headers: <strong>Date, Tag, Name, Action</strong>. Any additional fields will be ignored. </p>

                        <p><strong>Date</strong> should be the checkin/checkout date. <strong>Tag</strong> should be the asset tag. <strong>Name</strong> should be the user's name (firstname lastname). <strong>Action</strong> should be either <strong>checkin</strong> or <strong>checkout</strong>.</p>

                        @if (config('app.lock_passwords'))
                            <p>Note: Email notification for users is disabled for this installation.</p>
                        @endif

                        <div class="form-group">
                        <label for="first_name" class="col-sm-3 control-label">{{ trans('admin/users/general.usercsv') }}</label>
        				<div class="col-sm-5">
        					<input type="file" name="user_import_csv" id="user_import_csv">
        				</div>
            </div>




    			<!-- Create Users -->
    			<div class="form-group">
    				<div class="col-sm-2">
    				</div>
    				<div class="col-sm-10">
    					{{ Form::checkbox('create_users', '1', Input::old('create_users')) }} Create users if they do not exist?
    				</div>
    			</div>

                <!-- Match firstname.lastname -->
                <div class="form-group">
                    <div class="col-sm-2">
                    </div>
                    <div class="col-sm-10">
                        {{ Form::checkbox('match_firstnamelastname', '1', Input::old('match_firstnamelastname')) }} Try to match users by firstname.lastname (jane.smith) format
                    </div>
                </div>

                <!-- Match flastname -->
                <div class="form-group">
                    <div class="col-sm-2">
                    </div>
                    <div class="col-sm-10">
                        {{ Form::checkbox('match_flastname', '1', Input::old('match_flastname')) }} Try to match users by first initial last name (jsmith) format
                    </div>
                </div>

                <!-- Match firstname -->
                <div class="form-group">
                    <div class="col-sm-2">
                    </div>
                    <div class="col-sm-10">
                        {{ Form::checkbox('match_firstname', '1', Input::old('match_firstname')) }} Try to match users by first name (jane) format
                    </div>
                </div>

                <!-- Match email -->
                <div class="form-group">
                    <div class="col-sm-2">
                    </div>
                    <div class="col-sm-10">
                        {{ Form::checkbox('match_email', '1', Input::old('match_email')) }} Try to match users by email as username
                    </div>
                </div>

                <!-- Checkin Date -->
                <div class="form-group">
                    <div class="col-sm-2">
                    </div>
                    <div class="col-sm-10">
                        {{ Form::checkbox('checkin_date', '1', Input::old('checkin_date')) }} If no checkin date info is available, should we generate a checkin right before the next checkout?
                    </div>
                </div>

               </div>



        </div>

    <!-- Form Actions -->
    <div class="box-footer text-right">
      <button type="submit" class="btn btn-default">{{ trans('button.submit') }}</button>
    </div>

</form>




</div>

            @if (isset($status))
                <table class="table">
                    @foreach($status['error'] as $type => $msg)
                        <tr class="danger"><td>{{ $msg  }}</td></tr>
                    @endforeach

                    @foreach($status['success'] as $type => $msg)
                        <tr class="success"><td>{{ $msg  }}</td></tr>
                    @endforeach
                </table>
            @endif

        </div></div></div>
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
