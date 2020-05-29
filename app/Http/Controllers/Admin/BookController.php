<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Image;

use App\Book;
use App\Chapter;
use App\Genre;

class BookController extends Controller
{
    //
    protected function generateAccessToken($user)
    {
        $token = $user->createToken($user->email . '-' . now());

        return $token->accessToken;
    }

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

    public function writeBook(Request $request)
    {
        $user = $request->user();

        $id = $request->id;
        $book = null;
        if (isset($id) && $id && $id != "undefined") {
            $find_book = Book::find($id);
            if ($find_book && ($find_book->user_id == $user->id || $user->id == 100)) {
                $book = $find_book;
            }
        }

        if (!$book) {
            $book = new Book();
        }

        if (isset($_FILES["file"])) {
            $file = $_FILES['file'];

            $fileName = "book_" . $user->id . "_" . time() . "_" . basename($file['name']);
            $filePath = "/images/book/";
            $tmp = $file["tmp_name"];
            $tmp_url = str_replace("\\", "/", $tmp);

            //$moved = move_uploaded_file($tmp_url, $filePath . $fileName);
            $full_file_path = $filePath . $fileName;
            $image_resize = Image::make($tmp_url);
            $image_resize->resize(540, 480);
            $image_resize->save(public_path($full_file_path));

            if (file_exists(public_path($full_file_path))) {
                if (isset($book->img) && $book->img && file_exists(public_path($book->img))) {
                    unlink(public_path($book->img));
                }

                $book->img = $filePath . $fileName;
            }
        }

        $title = $request->title;
        if (isset($title) && $title && $title != "undefined") {
            $book->title = $title;
        }

        $abstract = $request->abstract;
        if (isset($abstract) && $abstract && $abstract != "undefined") {
            $book->abstract = $abstract;
        }

        $foreign_author = $request->foreign_author;
        if (isset($foreign_author) && $foreign_author && $foreign_author != "undefined") {
            $book->foreign_author = $foreign_author;
        }

        $price = $request->price;
        if (isset($price) && $price && $price != "undefined") {
            $book->price = $price;
        }

        $book->publish_status = 0;
        $published = $request->published;
        if (isset($published) && $published && $published != "undefined" && $published != "false" && $published != "False") {
            $book->publish_status  = 10;
        }

        $genre = $request->genre;
        if (isset($genre) && $genre && $genre != "undefined") {
            $genre = trim($genre);
            $sub = Genre::where("title", "like", '%' . $genre . '%')->first();
            if (!$sub) {
                $sub = new Genre();
                $sub->title = $genre;
                $sub->save();
            }
            $book->genre_id = $sub->id;
        }

        if (!$book->user_id) {
            $book->user_id = $user->id;
        }

        $book->save();

        return response()->json([
            'token' => $this->generateAccessToken($user),
            'book' => $book,
            //'request' => $request->all(),
        ], 200);
    }

    public function writeChapter(Request $request)
    {
        $user = $request->user();

        $id = $request->id;
        $chapter = null;
        if (isset($id) && $id && $id != "undefined") {
            $find_chapter = Chapter::find($id);
            if ($find_chapter && ($find_chapter->user_id == $user->id || $user->id == 100)) {
                $chapter = $find_chapter;
            }
        }

        if (!$chapter) {
            $chapter = new Chapter();
        }

        // if (isset($_FILES["file"])) {
        //     $file = $_FILES['file'];

        //     $fileName = "post_" . $user->id . "_" . time() . "_" . basename($file['name']);
        //     $filePath = "/images/blog/";
        //     $tmp = $file["tmp_name"];
        //     $tmp_url = str_replace("\\", "/", $tmp);

        //     //$moved = move_uploaded_file($tmp_url, $filePath . $fileName);
        //     $full_file_path = $filePath . $fileName;
        //     $image_resize = Image::make($tmp_url);
        //     $image_resize->resize(540, 480);
        //     $image_resize->save(public_path($full_file_path));

        //     if (file_exists(public_path($full_file_path))) {
        //         if (isset($post->img) && $post->img && file_exists(public_path($post->img))) {
        //             unlink(public_path($post->img));
        //         }

        //         $post->img = $filePath . $fileName;
        //     }
        // }

        $title = $request->title;
        if (isset($title) && $title && $title != "undefined") {
            $chapter->title = $title;
        }

        $description = $request->description;
        if (isset($description) && $description && $description != "undefined") {
            $chapter->description = $description;
        }

        $chapter->publish_status = 0;
        $published = $request->published;
        if (isset($published) && $published && $published != "undefined" && $published != "false" && $published != "False") {
            $chapter->publish_status  = 10;
        }

        $chapter->save();

        return response()->json([
            'token' => $this->generateAccessToken($user),
            'chapter' => $chapter,
            //'request' => $request->all(),
        ], 200);
    }
}
