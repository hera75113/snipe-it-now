<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, Mandrill, and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
    ],

    'mandrill' => [
        'secret' => env('MANDRILL_SECRET'),
    ],

    'ses' => [
        'key'    => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => 'us-east-1',
    ],

    'stripe' => [
        'model'  => App\User::class,
        'key'    => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
    ],

    'stunning' => [
        'enabled' => env('ENABLE_STUNNING', false),
        'app_key'  => env('STUNNING_APP_KEY'),
        'stripe_id'    => env('STUNNING_STRIPE_ID'),
    ],

    'rollbar' => [
        'access_token' => env('ROLLBAR_TOKEN'),
        'level' => env('ROLLBAR_LEVEL', 'error'),
    ],

    'google' => [
        'maps_api_key' => env('GOOGLE_MAPS_API')
    ],


];
