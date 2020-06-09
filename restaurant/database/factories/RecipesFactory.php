<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Recipes;
use Faker\Generator as Faker;

$factory->define(Recipes::class, function (Faker $faker) {
    return [
        'title' => $faker->city,
        'body' => $faker->text(20),
        'time_needs' => $faker->numberBetween(1, 120)
    ];
});

