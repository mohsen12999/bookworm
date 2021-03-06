<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::view('/{path?}', 'app');
Route::view('/{path?}', 'app')->where('path', '.*');
// Route::get('/{any}', 'app')->where('any', '.*');
// Route::get('/{any?}', 'app')->where('any', '^(?!api\/)[\/\w\.-]*');

// Route::get('/', function () {
//     return view('welcome');
// });

// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
