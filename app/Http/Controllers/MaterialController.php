<?php

namespace App\Http\Controllers;

use App\Material;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class MaterialController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;
        if ($permissionName === 'admin'
            || $permissionName === 'agent') {
                return response(Material::cursor(), Response::HTTP_OK);
        } else if ($permissionName === 'company') {
            return response(Material::where('status', '=', 'complete')->get()
                ->orWhere('created_by', '=', $user->id)
                ->cursor(), Response::HTTP_OK);
        } else if ($permissionName === 'user') {
            return response(Material::where('status', '=', 'published')->get(), Response::HTTP_OK);
        }
    }

    public function published()
    {
        return response(Material::where('status', '=', 'published')->cursor(), Response::HTTP_OK);
    }

    public function get($id)
    {
        return response(Material::find($id), Response::HTTP_OK);
    }

    public function serialNumber($category_serial_number)
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;
        if ($permissionName === 'admin'
            || $permissionName === 'agent'
            || $permissionName === 'company') {
                $root = $category_serial_number.'-'.$user->userInformation->serial_number;
                $material = Material::where('serial_number', 'like', '%'.$root.'%')
                    ->orderBy('serial_number', 'desc')
                    ->first();

                if (!$material) {
                    $serialNumber = $root . '-001';
                } else {
                    $serialNumber = $material->serial_number;
                    $serialNumber = explode('-', $serialNumber);
                    $serialNumber = end($serialNumber);
                    $serialNumber = $root . '-' . str_pad((int)$serialNumber + 1, 3, '0', STR_PAD_LEFT);
                }
                return response($serialNumber, Response::HTTP_OK);
        }
        throw new AuthenticationException();
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:32',
            'serial_number' => 'required|max:32',
            'moq' => 'required',
            'spec_1' => 'required',
            'spec_2' => 'required',
            'origin' => 'required',
            'dosage_amount' => 'required',
        ]);

        if ($validator->fails()) {
            return response($validator->errors(), Response::HTTP_BAD_REQUEST);
        }

        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;
        if ($permissionName === 'admin'
            || $permissionName === 'agent'
            || $permissionName === 'company') {
                $input = $request->except(['price']);
                $input['created_by'] = $user->id;

                if (!isset($input['status']) || $permissionName === 'company') $input['status'] = 'edit';
                $material = Material::create($input);
                response($material, Response::HTTP_OK);
            }
            throw new AuthenticationException();
    }
}
