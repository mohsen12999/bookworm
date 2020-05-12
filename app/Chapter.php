<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Chapter extends Model
{
    //
    use SoftDeletes;

    public function book()
    {
        return $this->belongsTo('App\Book');
    }

    public function scopePublic_chapter($query)
    {
        return $query->where('publish_status', 100);
    }

    public function scopeFree_chapter($query)
    {
        //return $query->where('free_chapter', 1);
        return $query
            ->where(function ($query) {
                $query->select('price')
                    ->from('books')
                    ->whereColumn('book_id', 'books.id');
            }, 0)
            ->orWhere('free_chapter', 1);
    }
}
