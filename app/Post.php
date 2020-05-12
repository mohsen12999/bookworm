<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    //
    use SoftDeletes;

    public function scopePublic_post($query)
    {
        return $query->where('publish_status', 100);
    }
}
