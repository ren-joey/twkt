<?php

use App\Material;
use App\User;
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
        $user = User::where('email', '=', 'twkt.bio@gmail.com')->first();
        foreach(DataSeed::materials as $materialData)
        {
            $existMaterial = Material::where('serial_number', '=', $materialData['serial_number'])->first();
            if (!$existMaterial)
            {
                $materialData['created_by'] = $user->id;
                $material = Material::create($materialData);
                $material->save();
            }
        }
    }
}
