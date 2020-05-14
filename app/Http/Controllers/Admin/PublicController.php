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
}
