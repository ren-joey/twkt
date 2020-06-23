<?php

use App\Material;
use Illuminate\Database\Seeder;

class MaterialsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach(DataSeed::materials as $materialData)
        {
            $existMaterial = Material::where('serial_number', '=', $materialData['serial_number'])->first();
            if (!$existMaterial)
            {
                $material = Material::create($materialData);
                $material->save();
            }
        }
    }
}
