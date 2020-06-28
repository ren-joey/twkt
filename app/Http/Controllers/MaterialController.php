<?php

namespace App\Http\Controllers;

use App\Material;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MaterialController extends Controller
{
    public function index()
    {
        return Material::cursor();
    }

    public function get($id)
    {
        return response(Material::find($id), Response::HTTP_OK);
    }
}
