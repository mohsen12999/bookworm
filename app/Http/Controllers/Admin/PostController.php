<?php

namespace App\Http\Controllers\Admin;

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Post;

class PostController extends Controller
{
    //

    public function scopePublic_post($query)
    {
        return $query->where('publish_status', 100);
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
}
