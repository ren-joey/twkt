<?php

namespace App\Http\Controllers;

use App\PermissionGroup;
use App\User;
use App\UserInformation;
use Exception;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Laravel\Passport\Client as OClient;

class UserController extends Controller
{
    public $successStatus = 200;

    public function login() {
        if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
            $oClient = OClient::where('password_client', 1)->first();
            return $this->getTokenAndRefreshToken($oClient, request('email'), request('password'));
        }
        return response(['message' => '帳號或密碼錯誤'], Response::HTTP_BAD_REQUEST);
    }

    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'serial_number' => 'required|max:32',
            'name' => 'required|max:32',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
        ]);

        if ($validator->fails()) {
            return response($validator->errors(), Response::HTTP_BAD_REQUEST);
        }

        $password = $request->password;
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $oClient = OClient::where('password_client', 1)->first();
        return $this->getTokenAndRefreshToken($oClient, $user->email, $password);
    }

    public function getTokenAndRefreshToken(OClient $oClient, $email, $password) {
        $oClient = OClient::where('password_client', 1)->first();
        $http = new Client;
        $params = [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => $oClient->id,
                'client_secret' => $oClient->secret,
                'username' => $email,
                'password' => $password,
                'scope' => '*',
            ],
        ];
        $response = $http->request('POST', route('passport.token'), $params);

        $result = json_decode((string) $response->getBody(), true);
        // return response()->json($result, $this->successStatus)
        $user = Auth::user();
        $user->userInformation->permissionGroup;
        return response($user, $this->successStatus)
                ->withCookie(cookie('access_token', $result['access_token'], 60))
                ->withCookie(cookie('refresh_token', $result['refresh_token'], 1440));
    }

    public function refreshToken(Request $request) {
        $refresh_token = $request->header('Refreshtoken');
        $oClient = OClient::where('password_client', 1)->first();
        $http = new Client;
        $params = [
            'form_params' => [
                'grant_type' => 'refresh_token',
                'refresh_token' => $refresh_token,
                'client_id' => $oClient->id,
                'client_secret' => $oClient->secret,
                'scope' => '*',
            ],
        ];
        try {
            $response = $http->request('POST', route('passport.token'), $params);
            $result = json_decode((string) $response->getBody(), true);
            return response($result, $this->successStatus)
                ->withCookie(cookie('access_token', $result['access_token'], 60))
                ->withCookie(cookie('refresh_token', $result['refresh_token'], 1440));
        } catch (Exception $e) {
            return response([
                'message' => '您沒有權限進行此操作'
            ], Response::HTTP_UNAUTHORIZED);
        }
    }

    public function details() {
        $user = Auth::user();
        $user->userInformation->permissionGroup;
        return response($user, $this->successStatus);
    }

    public function logout(Request $request) {
        $request->user()->token()->revoke();
        return response([
            'message' => '已成功登出'
        ], Response::HTTP_OK)
            ->withCookie(cookie('access_token', '', -1))
            ->withCookie(cookie('refresh_token', '', -1));;
    }

    public function unauthorized() {
        return response([
            'message' => '您沒有權限進行此操作'
        ], Response::HTTP_UNAUTHORIZED);
    }

    public function test()
    {
        $permissionGroup = PermissionGroup::where('col_name', '=', 'user')->first();
        $userInformation = $permissionGroup->userInformation;

        foreach($userInformation as $each)
        {
            $each->user;
        }

        return response($userInformation);
    }
}