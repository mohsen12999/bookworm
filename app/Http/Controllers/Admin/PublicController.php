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
        $authors = User::author_user()->get();

        $subjects = Subject::all();
        $posts = Post::public_post()->get();

        $genres = Genre::all();
        $books = Book::public_book()->get();


        $chapters = Chapter::public_chapter()->get();
        $free_books_id = Book::public_book()->free_book()->select('id')->get()->toArray();

        $free_books_id_arr = array_map(function ($val) {
            return $val["id"];
        }, $free_books_id);

        foreach ($chapters as $chapter) {
            if ($chapter->free_chapter == 0 && !in_array($chapter->book_id, $free_books_id_arr)) {
                $chapter->description = NULL; // not send [not-free chapter] and [not-free book chapter] description
            }
        }

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

        $factors = Factor::where('user_id', $user->id)->get();
        $bought = Bought::where('user_id', $user->id)->get();

        $writtenBooks = Book::where('user_id', $user->id)->get();
        $writtenPosts = Post::where('user_id', $user->id)->get();

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
