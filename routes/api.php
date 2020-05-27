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

    Route::post('/private_data', 'Admin\AuthController@getPrivateData')->name('private_data');

    Route::post('/profile', 'Admin\AuthController@updateProfile')->name('update_profile');

    Route::delete('/note/{id}', 'Admin\BookController@deleteBook')->name('deleteBook');
    Route::post('/note', 'Admin\PostController@writeBook')->name('writeBook');
    Route::delete('/chapter/{id}', 'Admin\PostController@deleteChapter')->name('deleteChapter');

    Route::delete('/blog/{id}', 'Admin\PostController@deletePost')->name('deletePost');
    Route::post('/blog', 'Admin\PostController@writePost')->name('writePost');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
