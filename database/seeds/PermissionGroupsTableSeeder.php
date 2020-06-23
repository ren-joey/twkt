<?php

use App\PermissionGroup;
use Illuminate\Database\Seeder;

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
                $group = PermissionGroup::create($groupData);
                $group->save();
            }
        }
    }
}
