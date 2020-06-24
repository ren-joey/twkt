<?php

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*
|--------------------------------------------------------------------------
| OAuth Routes
|--------------------------------------------------------------------------
|
| Create API Rest with Laravel 7.X Passport Authentication And Implement Refresh Token
| https://dev.to/azibom/create-api-rest-with-laravel-7-x-passport-authentication-and-implement-refresh-token-part-1-43ja
*/
Route::post('login', 'UserController@login');
Route::post('register', 'UserController@register');
Route::post('refreshtoken', 'UserController@refreshToken');

Route::get('unauthorized', 'UserController@unauthorized')->name('unauthorized');
Route::group(['middleware' => ['CheckClientCredentials', 'auth:api']], function() {
    Route::get('details', 'UserController@details');
    Route::post('logout', 'UserController@logout');
    Route::post('test', function() {
        return 'test';
    })->middleware('verified');
});

Route::get('layout', function ()
{
    return response(['success' => 'Y'], Response::HTTP_OK);
});

Route::post('order', 'OrderController@create');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
