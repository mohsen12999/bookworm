<?php

use Illuminate\Http\Request;
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

Route::post('register', 'Admin\AuthController@register');
Route::post('login', 'Admin\AuthController@login');

Route::get('/get_data', 'Admin\PublicController@getPublicData');

Route::middleware('auth:api')->group(function () {

    Route::get('user/{userId}/detail', 'Admin\AuthController@userInfo');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
