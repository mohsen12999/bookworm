<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Auth;

use App\User;
use App\Book;
use App\Chapter;
use App\Genre;
use App\Subject;
use App\Post;

use App\Factor;
use App\Bought;

class AuthController extends Controller
{
    //
    protected function generateAccessToken($user)
    {
        $token = $user->createToken($user->email . '-' . now());

        return $token->accessToken;
    }


    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6|confirmed'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        return response()->json($user);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users,email',
            'password' => 'required'
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();

            // $token = $user->createToken($user->email . '-' . now());
            // return response()->json([
            //     'token' => $token->accessToken
            // ]);

            $userData = $this->getUserDate($user);

            return response()->json($userData, 200);
        }
    }

    public function userInfo(Request $request, $userId)
    {
        $user = User::find($userId);

        if ($user) {
            return response()->json($user);
        }

        return response()->json(['message' => 'User not found!'], 404);
    }


    public function getPrivateData(Request $request)
    {
        $user = $request->user();
        $userData = $this->getUserDate($user);

        return response()->json($userData, 200);
    }

    protected function getUserDate($user)
    {
        $factors = Factor::where('user_id', $user->id)->get();
        $bought = Bought::where('user_id', $user->id)->get();

        $writtenBooks = Book::where('user_id', $user->id)->get();
        $writtenPosts = Post::where('user_id', $user->id)->get();

        $chapters = Chapter::public_chapter()->get();
        $free_books_id = Book::public_book()->free_book()->select('id')->get()->toArray();

        $free_books_id_arr = array_map(function ($val) {
            return $val["id"];
        }, $free_books_id);

        $bought_book = $bought->toArray();
        $bought_book_id_arr = array_map(function ($val) {
            return $val["id"];
        }, $bought_book);

        foreach ($chapters as $chapter) {
            if ($chapter->free_chapter == 0 && !in_array($chapter->book_id, $free_books_id_arr) && !in_array($chapter->book_id, $bought_book_id_arr)) {
                $chapter->description = NULL; // not send [not-free chapter] and [not-free book chapter] description
            }
        }

        return [
            'token' => $this->generateAccessToken($user),
            'chapters' => $chapters,
            'user' => [
                'isAuthenticated' => true,
                'name' => $user->name,
                'email' => $user->email,
                'mobile' => $user->mobile,
                'avatar' => $user->avatar,
                'wallet' => $user->wallet,
                'role' => $user->role,
                'factors' => $factors,
                'boughtBook' => $bought,
                'writtenBooks' => $writtenBooks,
                'writtenPosts' => $writtenPosts
            ]
        ];
    }
}
