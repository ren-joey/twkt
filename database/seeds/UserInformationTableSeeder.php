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
                $permissionGroup = PermissionGroup::where('col_name', '=', 'user')->first();
                $userData['permission_group_id'] = $permissionGroup->id;
                $userInfo = UserInformation::create($userData);
                $userInfo->save();

                $user = new User;
                $user->name = $userData['name'];
                $user->email = $userData['email'];
                $user->password = Hash::make($userData['email']);
                $user->user_information_id = $userInfo->id;
                $user->save();
            }
        }

        foreach(DataSeed::admins as $adminData)
        {
            $existUser = UserInformation::where('serial_number', '=', $adminData['serial_number'])->first();
            if (!$existUser)
            {
                $permissionGroup = PermissionGroup::where('col_name', '=', 'admin')->first();
                $adminData['permission_group_id'] = $permissionGroup->id;
                $userInfo = UserInformation::create($adminData);
                $userInfo->save();

                $user = new User;
                $user->name = $adminData['name'];
                $user->email = $adminData['email'];
                $user->password = Hash::make($adminData['email']);
                $user->user_information_id = $userInfo->id;
                $user->save();
            }
        }
    }
}
