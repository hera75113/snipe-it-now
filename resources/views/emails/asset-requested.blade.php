@extends('emails/layouts/default')

@section('content')

<p>{{ trans('mail.a_user_requested') }} <a href="{{ url('/') }}"> {{ $snipeSettings->site_name }}</a>. </p>

<p>{{ trans('mail.user') }} <a href="{{ route('users.show', $user_id) }}">{{ $requested_by }}</a><br>
   {{ trans('mail.item') }} <a href="{{ $item_url }}">{{ $item_name }}</a> ({{ $item_type }}) <br>
   {{ trans('mail.requested') }} {{ $requested_date }}
@if ($item_quantity > 1)
{{ trans('mail.quantity') }} {{ $item_quantity}}
@endif

<p><a href="{{ url('/') }}">{{ $snipeSettings->site_name }}</a></p>
@stop
