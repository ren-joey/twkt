<?php

namespace App\Http\Controllers;

use App\Material;
use App\Order;
use App\OrderMaterial;
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
        $order->created_by = $user->id;
        $order->save();

        $materials = explode(',', $request->materials);
        foreach($materials as $materialData)
        {
            $material_id = explode(':', $materialData)[0];
            $material_amount = explode(':', $materialData)[1];

            if (!$material_amount) return response([], Response::HTTP_BAD_REQUEST);

            $orderMaterial = new OrderMaterial;
            $material = Material::find($material_id);

            if (!$material) return response([], Response::HTTP_BAD_REQUEST);

            $orderMaterial->material_id = $material->id;
            $orderMaterial->order_id = $order->id;
            $orderMaterial->amount = $material_amount;
            $orderMaterial->save();
        }

        $order->orderMaterials->material();
        return response($order, Response::HTTP_OK);
    }

    public function get($id)
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;
        $order = Order::find($id);

        if (!$order) return response([], Response::HTTP_NO_CONTENT);

        if ($permissionName === 'agent'
            || $permissionName === 'admin'
            || $user->id === $order->created_by) {
                $order->orderMaterials->each(function ($orderMaterial) {
                    $orderMaterial->material;
                });
                return response($order, Response::HTTP_OK);
        }
        return response([], Response::HTTP_UNAUTHORIZED);
    }
}
