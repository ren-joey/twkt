<?php

use App\OrderFormColumn;
use Illuminate\Database\Seeder;

class OrderFormColumnsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach(DataSeed::orderColumns as $columnData)
        {
            $existColumn = OrderFormColumn::where('col_name', '=', $columnData['col_name'])->first();
            if (!$existColumn)
            {
                $column = OrderFormColumn::create($columnData);
                $column->save();
            }
        }
    }
}
