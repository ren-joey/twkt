<?php

use App\Material;
use App\MaterialCategory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            MaterialCategoriesTableSeeder::class,
            MenusTableSeeder::class,
            PermissionGroupsTableSeeder::class,
            MaterialFormColumnsSeeder::class,
            OrderFormColumnsSeeder::class,
            UserInformationTableSeeder::class,
            MaterialsTableSeeder::class,
            // UserSeeder::class
        ]);
    }
}
