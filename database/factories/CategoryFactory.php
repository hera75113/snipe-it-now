<?php

/*
|--------------------------------------------------------------------------
| Category Factories
|--------------------------------------------------------------------------
|
| Factories related exclusively to creating categories and the various states..
|
*/


$factory->define(App\Models\Category::class, function (Faker\Generator $faker) {
    return [
        'user_id' => 1,
        'eula_text' => $faker->paragraph(),
        'require_acceptance' => false,
        'use_default_eula' => $faker->boolean(),
        'checkin_email' => $faker->boolean()
     ];
});

$factory->state(App\Models\Category::class, 'asset-laptop-category', function ($faker) {
    return [
        'name' => 'Laptops',
        'category_type' => 'asset',
        'require_acceptance' => true,
    ];
});

$factory->state(App\Models\Category::class, 'asset-desktop-category', function ($faker) {
    return [
        'name' => 'Desktops',
        'category_type' => 'asset',
    ];
});

$factory->state(App\Models\Category::class, 'asset-display-category', function ($faker) {
    return [
        'name' => 'Displays',
        'category_type' => 'asset',
    ];
});

$factory->state(App\Models\Category::class, 'asset-tablet-category', function ($faker) {
    return [
        'name' => 'Tablets',
        'category_type' => 'asset',
    ];
});

$factory->state(App\Models\Category::class, 'asset-mobile-category', function ($faker) {
    return [
        'name' => 'Mobile Phones',
        'category_type' => 'asset',
    ];
});

$factory->state(App\Models\Category::class, 'asset-conference-category', function ($faker) {
    return [
        'name' => 'Conference Phones',
        'category_type' => 'asset',
    ];
});

$factory->state(App\Models\Category::class, 'asset-voip-category', function ($faker) {
    return [
        'name' => 'VOIP Phones',
        'category_type' => 'asset',
    ];
});


$factory->state(App\Models\Category::class, 'accessory-keyboard-category', function ($faker) {
    return [
        'name' => 'Keyboards',
        'category_type' => 'accessory',
    ];
});

$factory->state(App\Models\Category::class, 'accessory-mouse-category', function ($faker) {
    return [
        'name' => 'Mouse',
        'category_type' => 'accessory',
    ];
});


$factory->state(App\Models\Category::class, 'component-hdd-category', function ($faker) {
    return [
        'name' => 'HDD/SSD',
        'category_type' => 'component',
    ];
});

$factory->state(App\Models\Category::class, 'component-ram-category', function ($faker) {
    return [
        'name' => 'RAM',
        'category_type' => 'component',
    ];
});

$factory->state(App\Models\Category::class, 'consumable-paper-category', function ($faker) {
    return [
        'name' => 'Printer Paper',
        'category_type' => 'consumable',
    ];
});

$factory->state(App\Models\Category::class, 'consumable-ink-category', function ($faker) {
    return [
        'name' => 'Printer Ink',
        'category_type' => 'consumable',
    ];
});

