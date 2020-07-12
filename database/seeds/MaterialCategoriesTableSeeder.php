<?php

use App\MaterialCategory;
use Illuminate\Database\Seeder;

class MaterialCategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach(DataSeed::categories as $cate)
        {
            $existCate = MaterialCategory::where('col_name', '=', $cate['col_name'])->first();
            if (!$existCate)
            {
                $column = MaterialCategory::create($cate);
                $column->save();
            }
        }
    }
}
