<?php

namespace App\Http\Controllers;

use App\Mail\UserMessage;
use App\Quotation;
use App\User;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class QuotationController extends Controller
{
    public function all()
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;

        if ($permissionName === 'agent'
        || $permissionName === 'admin')
        {
            return response(Quotation::with('material')->get(), Response::HTTP_OK);
        }

        if ($permissionName === 'company')
        {
            $quotations = Quotation::whereHas('material', function($query) use ($user) {
                return $query->where('created_by', '=', $user->id);
            })->with('material')->get();
            return response($quotations, Response::HTTP_OK);
        }

        throw new AuthenticationException();
    }

    public function update(Request $request, $quotation_id)
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;
        $quotation = Quotation::find($quotation_id);

        if ($permissionName === 'agent'
        || $permissionName === 'admin'
        || ($permissionName === 'company' && $request->status === 'verify')){
            $quotation->update($request->all());

            if ($request->status === 'verify') {
                $details = [
                    'title' => '有一筆報價單已經完成報價',
                    'body' => '原料商<'.$user->name.'> 已經完成報價 - '.$quotation->material->name
                ];
                User::all()->each(function ($u) use ($details) {
                    if ($u->permissionGroup->col_name === 'agent'
                        || $u->permissionGroup->col_name === 'admin') {
                            Mail::to($u->email)->send(new UserMessage($details));
                        }
                });
            } else if ($request->status === 'complete') {
                $details = [
                    'title' => '有一筆報價單已經審核完成',
                    'body' => '您的報價已由專員<'.$user->name.'> 審核通過 - '.$quotation->material->name
                ];
                $creator = User::find($quotation->material->created_by);
                Mail::to($creator->email)->send(new UserMessage($details));
            }
        } else throw new AuthenticationException();
    }
}
