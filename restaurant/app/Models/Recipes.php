<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Recipes extends Model
{
    public function products()
    {
        return $this->belongsToMany(Products::class);
    }
}
