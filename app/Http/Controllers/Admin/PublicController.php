<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\User;
use App\Book;
use App\Chapter;
use App\Genre;
use App\Subject;
use App\Post;

use App\Factor;
use App\Bought;

class PublicController extends Controller
{
    //
    public function getPublicData(Request $request)
    {
        $genres = Genre::all();
        $subjects = Subject::all();

        $chapters = Chapter::public_chapter()->free_chapter()->get();
        $books = Book::public_book()->get();
        $posts = Post::public_post()->get();

        $authors = User::author_user()->get();

        return response()->json([
            'genres' => $genres,
            'books' => $books,
            'chapters' => $chapters,
            'subjects' => $subjects,
            'posts' => $posts,
            'authors' => $authors,
        ], 200);
    }

    public function getPrivateData(Request $request)
    {
        $user = $request->user();

        $factors = Factor::where('user_id', $user->id);
        $bought = Bought::where('user_id', $user->id);

        $writtenBooks = Book::where('user_id', $user->id);
        $writtenPosts = Post::where('user_id', $user->id);

        return response()->json([
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
        ], 200);
    }
}
