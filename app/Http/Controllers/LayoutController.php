<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class LayoutController extends Controller
{
    public function all(Request $request)
    {
        $user = Auth::user();
        $menus = $user->userInformation->permissionGroup->menus;
        return response([
            'menus' => $menus
        ], Response::HTTP_OK);
    }
}
