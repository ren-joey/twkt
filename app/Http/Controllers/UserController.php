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
use Illuminate\Support\Facades\Hash;
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

        $userInformationData = $request->only('name', 'serial_number', 'email');
        $userInformationData['permission_group_id'] = PermissionGroup::where('col_name', '=', 'user')->first()->id;
        $userInformation = UserInformation::create($userInformationData);

        $input = $request->only('name', 'email', 'password');
        $input['password'] = bcrypt($input['password']);
        $input['user_information_id'] = $userInformation->id;
        $user = User::create($input);
        $oClient = OClient::where('password_client', 1)->first();
        // return response($user, Response::HTTP_OK);

        Auth::attempt(['email' => request('email'), 'password' => request('password')]);
        return $this->getTokenAndRefreshToken($oClient, request('email'), request('password'));
    }

    public function create(Request $request) {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;

        if ($permissionName === 'agent'
            || $permissionName === 'admin') {
                $validator = Validator::make($request->all(), [
                    'serial_number' => 'required|max:32',
                    'name' => 'required|max:32',
                    'email' => 'required|email|unique:users',
                    'password' => 'required|confirmed',
                ]);

                if ($validator->fails()) {
                    return response($validator->errors(), Response::HTTP_BAD_REQUEST);
                }

                $userInformation = UserInformation::create($request->only('name', 'serial_number', 'email', 'permission_group_id'));
                $input = $request->only('name', 'email', 'password');
                $input['password'] = bcrypt($input['password']);
                $input['user_information_id'] = $userInformation->id;
                $user = User::create($input);
                return response($user, Response::HTTP_OK);
            } else return response([],Response::HTTP_UNAUTHORIZED);
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
        $user->userInformation;
        $user->permissionGroup;
        $user = $user->toArray();
        $user['is_login'] = 'Y';
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
        $user->userInformation;
        $user->permissionGroup;
        $user = $user->toArray();
        $user['is_login'] = 'Y';
        return response($user, $this->successStatus);
    }

    public function logout(Request $request) {
        $request->user()->token()->revoke();
        return response([
            'is_login' => 'N',
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

    public function all()
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;

        if ($permissionName === 'agent'
            || $permissionName === 'admin') {
                $users = User::with('permissionGroup')->with('userInformation')->where('id', '!=', $user->id)->get();
                return response($users, Response::HTTP_OK);
            } else return response([],Response::HTTP_UNAUTHORIZED);
    }

    public function get($id)
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;

        if ($permissionName === 'agent'
            || $permissionName === 'admin'
            || $user->id == $id) {
                $user = User::with('permissionGroup')->with('userInformation')->find($id);
                return response($user, Response::HTTP_OK);
            }
        return response([],Response::HTTP_UNAUTHORIZED);
    }

    public function update(Request $request, $id)
    {
        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;

        if ($permissionName === 'agent'
            || $permissionName === 'admin'
            || $user->id == $id) {
            $user = User::with('userInformation')->with('permissionGroup')->find($id);
            $userInformation = $user->userInformation;
            $userInformation->update($request->except(['create_at', 'id', 'permission_group_id', 'serial_number', 'update_at', 'permission_group']));
            $user->update($request->only(['name', 'email']));
            $user = $user->toArray();
            $user['is_login'] = 'Y';
            return response($user, Response::HTTP_OK);
        }
        return response([], Response::HTTP_UNAUTHORIZED);
    }

    public function userPassword(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'password' => 'required|min:6|max:32'
        ]);

        if ($validator->fails()) {
            return response($validator->errors(), Response::HTTP_BAD_REQUEST);
        }

        $user = Auth::user();
        $permissionName = $user->permissionGroup->col_name;

        if ($user->id == $id) {
            if (!Hash::check($request->currentPassword, $user->password)) return response([
                'message' => '密碼比對錯誤'
            ], Response::HTTP_BAD_REQUEST);
            $user = User::find($id);
            $user->password = Hash::make($request->password);
            $user->save();
            return response([], Response::HTTP_OK);
        } else if ($permissionName === 'agent'
        || $permissionName === 'admin') {
            $user = User::find($id);
            $user->password = Hash::make($request->password);
            $user->save();
            return response([], Response::HTTP_OK);
        }
        return response([], Response::HTTP_UNAUTHORIZED);
    }
}