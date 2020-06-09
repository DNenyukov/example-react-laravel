<?php

namespace App\Nova;

use App\Models\Recipes;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;

class Product extends Resource
{
    public static $model = \App\Models\Products::class;
    public static $title = 'title';

    public static $search = [
        'id',
    ];

    public function fields(Request $request)
    {
        return [
            ID::make()->sortable(),
            Text::make('Название', 'title'),
            Image::make('Изображение', 'img'),
            BelongsToMany::make('Recipe', 'recipes')
        ];
    }
}
