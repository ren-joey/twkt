<?php

use App\PermissionGroup;
use App\User;
use App\UserInformation;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserInformationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach(DataSeed::users as $userData)
        {
            $existUser = UserInformation::where('serial_number', '=', $userData['serial_number'])->first();
            if (!$existUser)
            {
                $user = new User;
                $user->name = $userData['name'];
                $user->email = $userData['email'];
                $user->password = Hash::make($userData['email']);
                $user->save();

                $permissionGroup = PermissionGroup::where('col_name', '=', 'user')->first();

                $userData['user_id'] = $user->id;
                $userData['permission_group_id'] = $permissionGroup->id;
                $userInfo = UserInformation::create($userData);
                $userInfo->save();
            }
        }
    }
}
