<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Snipe-IT</title>

    <!-- CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">

    <!-- Select2 -->
    <link rel="stylesheet" href="{{ asset('assets/js/plugins/select2/select2.min.css') }}">

    <!-- Bootstrap Color Picker -->
    <link rel="stylesheet" href="{{ asset('assets/js/plugins/colorpicker/bootstrap-colorpicker.min.css') }}">

    <link rel="stylesheet" href="{{ asset('assets/js/plugins/datepicker/bootstrap-datepicker.css') }}">

    <!-- jvectormap -->
    <link rel="stylesheet" href="{{ asset('assets/js/plugins/jvectormap/jquery-jvectormap-1.2.2.css') }}">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{ asset('assets/css/AdminLTE.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/skins/skin-blue.css') }}">

    <!-- bootstrap tables CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap-table.css') }}">

    <link rel="stylesheet" href="{{ elixir('assets/css/app.css') }}">


    @if (\App\Models\Setting::getSettings()->header_color)
        <style>
        .main-header .navbar, .main-header .logo {
        background-color: {{ \App\Models\Setting::getSettings()->header_color }};
        background: -webkit-linear-gradient(top,  {{ \App\Models\Setting::getSettings()->header_color }} 0%,{{ \App\Models\Setting::getSettings()->header_color }} 100%);
        background: linear-gradient(to bottom, {{ \App\Models\Setting::getSettings()->header_color }} 0%,{{ \App\Models\Setting::getSettings()->header_color }} 100%);
        border-color: {{ \App\Models\Setting::getSettings()->header_color }};
        }
        .skin-blue .sidebar-menu > li:hover > a, .skin-blue .sidebar-menu > li.active > a {
        border-left-color: {{ \App\Models\Setting::getSettings()->header_color }};
        }

        .btn-primary {
        background-color: {{ \App\Models\Setting::getSettings()->header_color }};
        border-color: {{ \App\Models\Setting::getSettings()->header_color }};
        }
        </style>

    @endif

</head>

<body class="hold-transition login-page">

    @if (\App\Models\Setting::getSettings()->logo!='')
    <center><img class="logo" style="padding-top: 20px; padding-bottom: 10px;" src="{{ config('app.url') }}/uploads/{{ \App\Models\Setting::getSettings()->logo }}"></center>
    @endif
  <!-- Content -->
  @yield('content')



</body>

</html>
