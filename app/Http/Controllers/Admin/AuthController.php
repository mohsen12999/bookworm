<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\User;

class AuthController extends Controller
{
    //
    protected function generateAccessToken($user)
    {
        $token = $user->createToken($user->email.'-'.now());

        return $token->accessToken;
    }


    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required', 
            'email' => 'required|email', 
            'password' => 'required|min:6'
        ]);


        $user = User::create([
            'name' => $request->name, 
            'email' => $request->email, 
            'password' => bcrypt($request->password)
        ]);

        return response()->json($user);
    }
}
