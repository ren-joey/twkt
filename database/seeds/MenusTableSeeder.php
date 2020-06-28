<?php

use App\Menu;
use Illuminate\Database\Seeder;

class MenusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach(DataSeed::menus as $menuData)
        {
            $existMenu = Menu::where('col_name', '=', $menuData['col_name'])->first();
            if (!$existMenu)
            {
                $menu = Menu::create($menuData);
                $menu->save();
            }
        }
    }
}
