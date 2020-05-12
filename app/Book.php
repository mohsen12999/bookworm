<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Book extends Model
{
    //
    use SoftDeletes;

    public function scopePublic_book($query)
    {
        return $query->where('publish_status', 100);
    }

    public function scopeFree_book($query)
    {
        return $query->where('price', 0);
    }
}
