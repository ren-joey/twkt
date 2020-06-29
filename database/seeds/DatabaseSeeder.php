<?php

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
            MenusTableSeeder::class,
            PermissionGroupsTableSeeder::class,
            MaterialFormColumnsSeeder::class,
            UserInformationTableSeeder::class,
            MaterialsTableSeeder::class,
            // UserSeeder::class
        ]);
    }
}
