<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LayoutController extends Controller
{
    public function all(Request $request)
    {
        return response([
            'menu' => [],
            'order' => []
        ]);
    }
}
