<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Material;
use App\Order;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function byOrder($id)
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;
        $user_id = $user->id;
        $order = Order::find($id);

        if ($permissionName === 'agent'
        || $permissionName === 'admin'
        || $user_id == $order->created_by) {
            $comments = Comment::where('order_id', '=', $order->id)->cursor();
        }
        throw new AuthenticationException();
    }

    // public function test($id = '')
    // {
    //     return response(Material::where('origin_name', 'like', 'NAXA')->cursor(), Response::HTTP_OK);
    // }
}
