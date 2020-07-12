<?php

namespace App\Http\Controllers;

use App\MaterialCategory;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class MaterialCategoryController extends Controller
{
    public function create (Request $request)
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;

        $validator = Validator::make($request->all(), [
            'serial_number' => 'required|max:32',
            'col_name' => 'required|max:32',
            'tw_name' => 'required|max:32',
        ]);

        if ($validator->fails()) {
            return response($validator->errors(), Response::HTTP_BAD_REQUEST);
        }

        if ($permissionName === 'agent'
            || $permissionName === 'admin') {
                $existCate = MaterialCategory::where('serial_number', '=', $request->serial_number)->first();

                if(!$existCate)
                {
                    $cate = MaterialCategory::created($request->only([
                        'serial_number',
                        'col_name',
                        'tw_name',
                        'description'
                    ]));
                    return response($cate, Response::HTTP_OK);
                }
                return response([], Response::HTTP_BAD_REQUEST);
        }
        throw new AuthenticationException();
    }

    public function update(Request $request, $id)
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;

        if ($permissionName === 'agent'
            || $permissionName === 'admin') {
                $cate = MaterialCategory::find($id);

                if($cate)
                {
                    $cate->update($request->only([
                        'serial_number',
                        'col_name',
                        'tw_name',
                        'description'
                    ]));
                    return response($cate, Response::HTTP_OK);
                }
                return response([], Response::HTTP_BAD_REQUEST);
        }
        throw new AuthenticationException();
    }

    public function delete($id)
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;

        if ($permissionName === 'agent'
            || $permissionName === 'admin') {
                $cate = MaterialCategory::find($id);

                if($cate)
                {
                    $cate->delete();
                    return response([], Response::HTTP_OK);
                }
                return response([], Response::HTTP_BAD_REQUEST);
        }
        throw new AuthenticationException();
    }
}
