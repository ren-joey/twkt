<?php

namespace App\Http\Controllers;

use App\Material;
use App\Order;
use App\OrderMaterial;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    public function all()
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;

        if ($permissionName === 'agent'
        || $permissionName === 'admin')
        {
            return response(Order::cursor(), Response::HTTP_OK);
        }

        $orders = Order::where('created_by', '=', $user->id)->cursor();
        return response($orders, Response::HTTP_OK);
    }

    public function create(Request $request)
    {
        $user = Auth::user();

        $validator = Validator::make($request->all(), [
            'name' => 'required|max:32',
            'description' => 'required',
            'order_details' => 'required',
        ]);

        if ($validator->fails()) {
            return response($validator->errors(), Response::HTTP_BAD_REQUEST);
        }

        $order = new Order;
        $order->name = $request->input('name');
        $order->description = $request->input('description');
        $order->order_details = $request->input('order_details');
        $order->created_by = $user->id;
        $order->save();

        $materials = explode(',', $request->order_details);
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

        $order->orderMaterials->each(function ($orderMaterial) {
            $orderMaterial->material;
        });
        return response($order, Response::HTTP_OK);
    }

    public function get($order_id)
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;
        $order = Order::find($order_id);

        if (!$order) return response([], Response::HTTP_NO_CONTENT);

        if ($permissionName === 'agent'
            || $permissionName === 'admin'
            || $user->id === $order->created_by) {
                $order->orderMaterials->each(function ($orderMaterial) {
                    $orderMaterial->material;
                });
                return response($order, Response::HTTP_OK);
        }
        throw new AuthenticationException();
    }

    public function update(Request $request, $order_id)
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;
        $order = Order::find($order_id);

        if (!$order) return response([], Response::HTTP_NO_CONTENT);

        if (($order->status === 'edit' && $user->id == $order->created_by)
            || ($order->status === 'verify' && $permissionName === 'agent')
            || $permissionName === 'admin')
            {
                $order->update($request->only(['name', 'description', 'order_details']));
                $order->orderMaterials->each(function ($orderMaterial){
                    $orderMaterial->delete();
                });

                if ($request->has('order_details')) {
                    $materials = explode(',', $request->order_details);
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
                }
            }
        throw new AuthenticationException();
    }

    public function next($order_id)
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;
        $order = Order::find($order_id);

        if (!$order) return response([], Response::HTTP_NO_CONTENT);

        if (($order->status === 'edit'
                || $order->status === 'confirm')
            && $user->id === $order->created_by)
        {
            $order->status = 'verify';
            $order->save();
            return response($order, Response::HTTP_OK);
        }

        else if ($order->status === 'verify'
            && ( $permissionName === 'agent'
                || $permissionName === 'admin')
                )
        {
            $order->status = 'quoting';
            $order->save();
            return response($order, Response::HTTP_OK);
        }

        else if ($order->status === 'quoting')
        {
            $order->orderMaterials->each(function($orderMaterial) {
                if ($orderMaterial->material->quotation->status != 'complete')
                {
                    return response([
                        'message' => '你必須完成所有的報價單後才可完成此需求單。'
                    ], Response::HTTP_BAD_REQUEST);
                }
            });

            $order->status = 'complete';
            $order->save();
            return response($order, Response::HTTP_OK);
        }

        return response([
            'message' => '無法辨識的需求單狀態'
        ], Response::HTTP_BAD_REQUEST);
    }

    public function prev($order_id)
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;
        $order = Order::find($order_id);

        if (!$order) return response([], Response::HTTP_NO_CONTENT);

        if ($order->status === 'verify'
            && ( $permissionName === 'agent'
                || $permissionName === 'admin')
                )
        {
            $order->status = 'confirm';
            $order->save();
            return response($order, Response::HTTP_OK);
        }

        return response([
            'message' => '無法辨識的需求單狀態'
        ], Response::HTTP_BAD_REQUEST);
    }

    public function to(Request $request, $order_id)
    {
        //
    }

    public function delete($order_id)
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;
        $order = Order::find($order_id);

        if (!$order) return response([], Response::HTTP_NO_CONTENT);

        if (($order->status === 'edit' && $order->created_by == $user->id)
            || $permissionName === 'agent'
            || $permissionName === 'admin')
        {
            $order->delete();
            return response([], Response::HTTP_NO_CONTENT);
        }
        throw new AuthenticationException();
    }
}
