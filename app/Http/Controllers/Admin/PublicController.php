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
}
