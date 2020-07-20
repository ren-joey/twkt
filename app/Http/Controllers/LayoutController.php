<?php

namespace App\Http\Controllers;

use App\MaterialCategory;
use App\MaterialFormColumn;
use App\PermissionGroup;
use App\UserInformation;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class LayoutController extends Controller
{
    public function all(Request $request)
    {
        // $user = Auth::user();
        // $menus = $user->userInformation->permissionGroup->menus;
        return response([
            // 'menus' => $menus,
            'material_form_columns' => MaterialFormColumn::cursor(),
            'material_categories' => MaterialCategory::cursor(),
            'permission_groups' => PermissionGroup::cursor()
        ], Response::HTTP_OK);
    }

    public function serialNumberChecker(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'model' => ['required' , 'max:32', 'regex:(Material|User)'],
            'serial_number' => 'required|max:32'
        ]);

        if ($validator->fails()) {
            return response($validator->errors(), Response::HTTP_BAD_REQUEST);
        }

        $existModel = app("App\\$request->model")::where('serial_number', '=', $request->input('serial_number'))->first();

        return response([
            'available' => !$existModel ? 'Y' : 'N'
        ], Response::HTTP_OK);
    }

    public function getSerialNumber(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_type' => ['required' , 'regex:(admin|user|company|agent)']
        ]);

        if ($validator->fails()) {
            return response($validator->errors(), Response::HTTP_BAD_REQUEST);
        }

        $permissionGroupId = PermissionGroup::where('col_name', '=', $request->user_type)->first()->id;
        $userInfo = UserInformation::where('permission_group_id', '=', $permissionGroupId)
            ->orderBy('serial_number', 'desc')
            ->first();

        if (!$userInfo) {
            switch($request->user_type) {
                case 'admin':
                    $headCharacter = 'AD';
                    break;
                case 'agent':
                    $headCharacter = 'AG';
                    break;
                case 'company':
                    $headCharacter = 'CO';
                    break;
                case 'user':
                    $headCharacter = 'CE';
                    break;
            }
            $serialNumber = $headCharacter . '01-001';
        } else {
            $serialNumber = $userInfo->serial_number;
            $serialNumber = explode('-', $serialNumber);
            $serialNumber = substr($serialNumber[0], 0, 2) . substr($serialNumber[0], 2) . '-' . str_pad((int)$serialNumber[1] + 1, 3, '0', STR_PAD_LEFT);
        }
        return response($serialNumber, Response::HTTP_OK);
    }
}
