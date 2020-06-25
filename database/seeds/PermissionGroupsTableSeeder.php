<?php

use App\Menu;
use App\PermissionGroup;
use Illuminate\Database\Seeder;

use function PHPSTORM_META\map;

class PermissionGroupsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach(DataSeed::permissionGroups as $groupData)
        {
            $existGroup = PermissionGroup::where('col_name', '=', $groupData['col_name'])->first();
            if (!$existGroup)
            {
                $group = PermissionGroup::create([
                    'col_name' => $groupData['col_name'],
                    'tw_name' => $groupData['tw_name']
                ]);
                foreach($groupData['menus'] as $colName)
                {
                    $menu = Menu::where('col_name', '=', $colName)->first();
                    $group->menus()->attach($menu);
                }
                $group->save();
            }
        }
    }
}
