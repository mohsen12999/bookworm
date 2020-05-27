<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\Book;
use App\Chapter;

class BookController extends Controller
{
    //
    public function deleteBook(Request $request, $id)
    {
        $book = Book::find($id);
        $user = $request->user();

        if (!$book) {
            return response()->json(['message' => 'book not found!'], 404);
        }

        if ($book->user_id != $user->id && $user->role != 100) {
            return response()->json(['message' => 'Can not access to delete this book'], 403);
        }

        $book->delete();
        $book->save();

        return response()->json(['message' => 'delete done!'], 200);
    }

    public function deleteChapter(Request $request, $id)
    {
        $chapter = Chapter::find($id);
        $user = $request->user();

        if (!$chapter) {
            return response()->json(['message' => 'chapter not found!'], 404);
        }

        if ($chapter->user_id != $user->id && $user->role != 100) {
            return response()->json(['message' => 'Can not access to delete this chapter'], 403);
        }

        $chapter->delete();
        $chapter->save();

        return response()->json(['message' => 'delete done!'], 200);
    }
}
