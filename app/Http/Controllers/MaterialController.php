<?php

namespace App\Http\Controllers;

use App\Material;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

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
            return response(Material::where('status', '=', 'complete')
                ->orWhere('created_by', '=', $user->id)
                ->cursor(), Response::HTTP_OK);
        }
    }

    public function get($id)
    {
        return response(Material::find($id), Response::HTTP_OK);
    }
}
