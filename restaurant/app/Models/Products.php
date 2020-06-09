<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    public function recipes()
    {
        return $this->belongsToMany(Recipes::class);
    }
}
