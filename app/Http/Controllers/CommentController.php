<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Material;
use App\Order;
use App\Quotation;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class CommentController extends Controller
{
    public function byOrder($order_id)
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;
        $user_id = $user->id;
        $order = Order::find($order_id);

        if ($permissionName === 'agent'
        || $permissionName === 'admin'
        || $user_id == $order->created_by) {
            $comments = Comment::where('order_id', '=', $order->id)->cursor();
            return response($comments, Response::HTTP_OK);
        }
        throw new AuthenticationException();
    }

    public function byMaterial($material_id)
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;
        $user_id = $user->id;
        $material = Material::find($material_id);

        if ($permissionName === 'agent'
        || $permissionName === 'admin'
        || $user_id == $material->created_by) {
            $comments = Comment::where('material_id', '=', $material->id)->cursor();
            return response($comments, Response::HTTP_OK);
        }
        throw new AuthenticationException();
    }

    public function byQuotation($quotation_id)
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;
        $user_id = $user->id;
        $quotation = Quotation::find($quotation_id);

        if ($permissionName === 'agent'
        || $permissionName === 'admin'
        || $user_id == $quotation->created_by) {
            $comments = Comment::where('quotation_id', '=', $quotation->id)->cursor();
            return response($comments, Response::HTTP_OK);
        }
        throw new AuthenticationException();
    }

    public function create(Request $request)
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;

        $validator = Validator::make($request->all(), [
            'content' => 'required'
        ]);

        if ($validator->fails()) {
            return response($validator->errors(), Response::HTTP_BAD_REQUEST);
        }

        if ($request->has('order_id'))
        {
            $order = Order::find($request->order_id);

            if (!$order) return response([
                'message' => '需求單號不存在'
            ], Response::HTTP_BAD_REQUEST);

            if ($permissionName === 'agent'
            || $permissionName === 'admin'
            || $order->created_by == $user)
            {
                $comment = new Comment;
                $comment->created_by = $user->id;
                $comment->order_id = $order->id;
                $comment->content = $request->content;
                $comment->save();
            }
            throw new AuthenticationException();
        }
        else if ($request->has('material_id'))
        {
            $material = Material::find($request->material_id);

            if (!$material) return response([
                'message' => '原物料不存在'
            ], Response::HTTP_BAD_REQUEST);

            if ($permissionName === 'agent'
            || $permissionName === 'admin'
            || $material->created_by == $user)
            {
                $comment = new Comment;
                $comment->created_by = $user->id;
                $comment->material_id = $material->id;
                $comment->content = $request->content;
                $comment->save();
            }
            throw new AuthenticationException();
        }
        else if ($request->has('quotation_id'))
        {
            $quotation = Quotation::find($request->quotation_id);

            if (!$quotation) return response([
                'message' => '報價單不存在'
            ], Response::HTTP_BAD_REQUEST);

            if ($permissionName === 'agent'
            || $permissionName === 'admin'
            || $quotation->created_by == $user)
            {
                $comment = new Comment;
                $comment->created_by = $user->id;
                $comment->quotation_id = $quotation->id;
                $comment->content = $request->content;
                $comment->save();
            }
            throw new AuthenticationException();
        }

        return response([
            'message' => '未指定正確的回應主體'
        ], Response::HTTP_BAD_REQUEST);
    }

    public function update(Request $request, $comment_id)
    {
        $user = Auth::user();
        $comment = Comment::find($comment_id);
        $validator = Validator::make($request->all(), [
            'content' => 'required'
        ]);

        if ($validator->fails()) {
            return response($validator->errors(), Response::HTTP_BAD_REQUEST);
        }

        if (!$comment) return response([
            'message' => '留言不存在'
        ], Response::HTTP_BAD_REQUEST);

        if ($user->id == $comment->created_by)
        {
            $comment->update($request->only(['content']));
            return response($comment, Response::HTTP_OK);
        }
        throw new AuthenticationException();
    }

    public function delete(Request $request, $comment_id)
    {
        $user = Auth::user();
        $comment = Comment::find($comment_id);

        if (!$comment) return response([
            'message' => '留言不存在'
        ], Response::HTTP_BAD_REQUEST);

        if ($user->id == $comment->created_by)
        {
            $comment->delete();
            return response([], Response::HTTP_NO_CONTENT);
        }
        throw new AuthenticationException();
    }

    // public function test($id = '')
    // {
    //     return response(Material::where('origin_name', 'like', 'NAXA')->cursor(), Response::HTTP_OK);
    // }
}
