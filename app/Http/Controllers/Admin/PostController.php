<?php

namespace App\Http\Controllers\Admin;

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    //

    public function scopePublic_post($query)
    {
        return $query->where('publish_status', 100);
    }
}
