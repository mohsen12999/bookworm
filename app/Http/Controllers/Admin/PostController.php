<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Image;

use App\Post;
use App\Subject;

class PostController extends Controller
{
    //
    protected function generateAccessToken($user)
    {
        $token = $user->createToken($user->email . '-' . now());

        return $token->accessToken;
    }

    public function deletePost(Request $request, $id)
    {
        $post = Post::find($id);
        $user = $request->user();

        if (!$post) {
            return response()->json(['message' => 'post not found!'], 404);
        }

        if ($post->user_id != $user->id && $user->role != 100) {
            return response()->json(['message' => 'Can not access to delete this post'], 403);
        }

        $post->delete();
        $post->save();

        return response()->json(['message' => 'delete done!'], 200);
    }

    public function writePost(Request $request)
    {
        $user = $request->user();

        $id = $request->id;
        $post = null;
        if (isset($id) && $id && $id != "undefined") {
            $find_post = Post::find($id);
            if ($find_post && ($find_post->user_id == $user->id || $user->id == 100)) {
                $post = $find_post;
            }
        }

        if (!$post) {
            $post = new Post();
        }

        if (isset($_FILES["file"])) {
            $file = $_FILES['file'];

            $fileName = "post_" . $user->id . "_" . time() . "_" . basename($file['name']);
            $filePath = "/images/blog/";
            $tmp = $file["tmp_name"];
            $tmp_url = str_replace("\\", "/", $tmp);

            //$moved = move_uploaded_file($tmp_url, $filePath . $fileName);
            $full_file_path = $filePath . $fileName;
            $image_resize = Image::make($tmp_url);
            $image_resize->resize(540, 480);
            $image_resize->save(public_path($full_file_path));

            if (file_exists(public_path($full_file_path))) {
                if (isset($post->img) && $post->img && file_exists(public_path($post->img))) {
                    unlink(public_path($post->img));
                }

                $post->img = $filePath . $fileName;
            }
        }

        $title = $request->title;
        if (isset($title) && $title && $title != "undefined") {
            $post->title = $title;
        }

        $abstract = $request->abstract;
        if (isset($abstract) && $abstract && $abstract != "undefined") {
            $post->abstract = $abstract;
        }

        $foreign_author = $request->foreign_author;
        if (isset($foreign_author) && $foreign_author && $foreign_author != "undefined") {
            $post->foreign_author = $foreign_author;
        }

        $description = $request->description;
        if (isset($description) && $description && $description != "undefined") {
            $post->description = $description;
        }

        $post->publish_status = 0;
        $published = $request->published;
        if (isset($published) && $published && $published != "undefined" && $published != "false" && $published != "False") {
            $post->publish_status  = 10;
        }

        $subject = $request->subject;
        if (isset($subject) && $subject && $subject != "undefined") {
            $subject = trim($subject);
            $sub = Subject::where("title", "like", '%' . $subject . '%')->first();
            if (!$sub) {
                $sub = new Subject();
                $sub->title = $subject;
                $sub->save();
            }
            $post->subject_id = $sub->id;
        }

        if (!$post->user_id) {
            $post->user_id = $user->id;
        }

        $post->save();

        return response()->json([
            'token' => $this->generateAccessToken($user),
            'post' => $post,
            //'request' => $request->all(),
        ], 200);
    }
}
