<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    public function create(Request $request)
    {
        $user = Auth::user();

        $validator = Validator::make($request->all(), [
            'name' => 'required|max:32',
            'description' => 'required',
            'materials' => 'required',
        ]);

        if ($validator->fails()) {
            return response($validator->errors(), Response::HTTP_BAD_REQUEST);
        }

        $order = new Order;
        $order->name = $request->input('name');
        $order->description = $request->input('description');
        $order->create_by = $user->id;

        return response($user, Response::HTTP_OK);
    }
}
