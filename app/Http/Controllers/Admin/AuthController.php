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
    protected function generateAccessToken($user)
    {
        $token = $user->createToken($user->email . '-' . now());

        return $token->accessToken;
    }

    protected function getUserDate($user)
    {
        $factors = Factor::where('user_id', $user->id)->get();
        $bought = Bought::where('user_id', $user->id)->get();

        $writtenBooks = Book::where('user_id', $user->id)->with('genre:id,title')->get();
        $writtenBooks_id = array_map(function ($val) {
            return $val["id"];
        }, $writtenBooks->toArray());
        $writtenChapters = array_values(Chapter::all()->whereIn('book_id', $writtenBooks_id)->toArray());
        $writtenPosts = Post::where('user_id', $user->id)->with('subject:id,title')->get();

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
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'mobile' => $user->mobile,
                'avatar' => $user->avatar,
                'wallet' => $user->wallet,
                'role' => $user->role,
                'factors' => $factors,
                'boughtBooks' => $bought,
                'writtenBooks' => $writtenBooks,
                'writtenChapters' => $writtenChapters,
                'writtenPosts' => $writtenPosts
            ]
        ];
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

    public function updateProfile(Request $request)
    {
        $user = $request->user();

        if (isset($_FILES["file"])) {
            $file = $_FILES['file'];

            $fileName = "user_" . $user->id . "_" . basename($file['name']);
            $filePath = "/images/user/";
            $tmp = $file["tmp_name"];
            $tmp_url = str_replace("\\", "/", $tmp);

            //$moved = move_uploaded_file($tmp_url, $filePath . $fileName);
            $image_resize = Image::make($tmp_url);
            $image_resize->resize(310, 310);
            $image_resize->save(public_path($filePath . $fileName));

            if (file_exists(public_path($filePath . $fileName))) {
                if (isset($user->avatar) && $user->avatar && file_exists(public_path($user->avatar))) {
                    unlink(public_path($user->avatar));
                }

                $user->avatar = $filePath . $fileName;
            }
        }

        $name = $request->name;
        if (isset($name) && $name && $name != "undefined") {
            $user->name = $name;
        }

        $email = $request->email;
        if (isset($email) && $email && $email != "undefined") {
            $user->email = $email;
        }

        $mobile = $request->mobile;
        if (isset($mobile) && $mobile && $mobile != "undefined") {
            $user->mobile = $mobile;
        }

        $user->save();

        return response()->json([
            'token' => $this->generateAccessToken($user),
            'user' => $user,
            //'request' => $request->all(),
        ], 200);
    }
}
