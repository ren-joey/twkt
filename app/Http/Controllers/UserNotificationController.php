<?php

namespace App\Http\Controllers;

use App\UserInformation;
use App\UserNotification;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class UserNotificationController extends Controller
{
    public function all()
    {
        $user = Auth::user();
        $notifications = UserNotification::where('user_id', $user->id)->cursor();
        return response($notifications, Response::HTTP_OK);
    }

    public function read(Request $request, $id)
    {
        $user = Auth::user();
        $notification = UserNotification::find($id);
        if (!$notification) return response([], Response::HTTP_BAD_REQUEST);
        if ($notification->user_id !== $user->id) throw new AuthenticationException();

        $notification->read = 'Y';
        $notification->save();
        $this->all();
    }
}
