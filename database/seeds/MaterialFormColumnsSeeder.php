<?php

use App\MaterialFormColumn;
use Illuminate\Database\Seeder;

class MaterialFormColumnsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach(DataSeed::materialColumns as $columnData)
        {
            $existColumn = MaterialFormColumn::where('col_name', '=', $columnData['col_name'])->first();
            if (!$existColumn)
            {
                $column = MaterialFormColumn::create($columnData);
                $column->save();
            }
        }
    }
}
