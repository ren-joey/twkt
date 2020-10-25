<?php

use App\Http\Controllers\LayoutController;
use App\Http\Controllers\MaterialController;
use App\Http\Controllers\UserController;
use App\Mail\UserMessage;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Mail;
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
Route::get('layout', 'LayoutController@all');

Route::get('unauthorized', 'UserController@unauthorized')->name('unauthorized');
Route::group(['middleware' => ['CheckClientCredentials', 'auth:api']], function() {
    Route::post('create', 'UserController@create');
    Route::get('check-login', 'UserController@details');
    Route::get('logout', 'UserController@logout');

    Route::get('published-materials', 'MaterialController@published');
    Route::get('materials', 'MaterialController@index');
    Route::post('material', 'MaterialController@create');
    Route::get('material/get-serial-number/{category_serial_number}', 'MaterialController@serialNumber');
    Route::get('material/{material_id?}', 'MaterialController@get');

    Route::get('orders', 'OrderController@all');
    Route::get('order/{order_id}', 'OrderController@get');
    Route::post('order', 'OrderController@create');
    Route::patch('order/{order_id}', 'OrderController@update');
    Route::patch('order/next-step/{order_id}', 'OrderController@next');
    Route::patch('order/prev-step/{order_id}', 'OrderController@prev');
    Route::patch('order/to-step/{order_id}', 'OrderController@to');
    Route::delete('order/{order_id}', 'OrderController@delete');

    Route::get('quotations', 'QuotationController@all');
    Route::patch('quotation/{quotation_id}', 'QuotationController@update');

    Route::get('comments/by-order/{order_id?}', 'CommentController@byOrder');
    Route::get('comments/by-material/{material_id?}', 'CommentController@byMaterial');
    Route::get('comments/by-quotation/{quotation_id?}', 'CommentController@byQuotation');
    Route::patch('comment/{comment_id}', 'CommentController@update');
    Route::delete('comment/{comment_id}', 'CommentController@delete');
    Route::post('comment', 'CommentController@create');

    Route::get('user-notifications', 'UserNotificationController@all');
    Route::get('user-notification/read/{id}', 'UserNotificationController@read');

    Route::get('users', 'UserController@all');
    Route::get('user/{id?}', 'UserController@get');
    Route::post('user/{id?}', 'UserController@userPassword'); // update user password
    Route::patch('user/{id?}', 'UserController@update'); // update user_information
    Route::post('email-verify', function() {
        return 'test';
    })->middleware('verified');
});

Route::get('permission-groups', 'PermissionGroupController@all');

// Route::get('user-form', 'UserController@form');

Route::get('check-serial-number', 'LayoutController@serialNumberChecker');
Route::get('get-serial-number', 'LayoutController@getSerialNumber');

// Route::get('test', 'CommentController@test');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('email/verify/{id}', 'VerificationController@verify')->name('verification.verify'); // Make sure to keep this as your route name
Route::get('email/resend', 'VerificationController@resend')
    ->middleware(['CheckClientCredentials', 'auth:api'])
    ->name('verification.resend');

// Route::get('send-mail', function () {

//     $details = [
//         'title' => 'Mail from ItSolutionStuff.com',
//         'body' => 'This is for testing email using smtp'
//     ];

//     Mail::to('tsuyiren@gmail.com')->send(new UserMessage($details));

//     return response('done', Response::HTTP_OK);
// });