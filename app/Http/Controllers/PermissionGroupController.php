<?php

namespace App\Http\Controllers;

use App\PermissionGroup;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PermissionGroupController extends Controller
{
    public function all()
    {
        return response(
            PermissionGroup::cursor(),
            Response::HTTP_OK
        );
    }
}
