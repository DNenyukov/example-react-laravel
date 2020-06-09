<?php

use App\Models\Products;
use App\Models\Recipes;
use Illuminate\Database\Seeder;

class ProductsRecipesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = Products::get();
        $recipes = Recipes::get();

        $products->each(function ($product) use ($recipes) {
            $product->recipes()->attach(
                $recipes->random(rand(1,3))->pluck('id')->toArray()
            );
        });
    }
}

