<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Chapter extends Model
{
    //
    use SoftDeletes;

    public function scopePublic_chapter($query)
    {
        return $query->where('publish_status', 100);
    }

    public function scopeFree_chapter($query)
    {
        return $query->where('free_chapter', 1);
    }
}
