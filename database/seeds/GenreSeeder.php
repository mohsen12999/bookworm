<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('genres')->insert(["title" => "جنگی", "img" => "/images/genre/Action.jpg"]);
        DB::table('genres')->insert(["title" => "ماجراجویی", "img" => "/images/genre/Adventure.jpg"]);
        DB::table('genres')->insert(["title" => "هنر", "img" => "/images/genre/Art.jpg"]);
        DB::table('genres')->insert(["title" => "زندگی نامه", "img" => "/images/genre/Biography.jpg"]);
        DB::table('genres')->insert(["title" => "خردسالان", "img" => "/images/genre/Children.jpg"]);
        DB::table('genres')->insert(["title" => "فیلم نامه", "img" => "/images/genre/Movie.jpg"]);
        DB::table('genres')->insert(["title" => "رازآلود", "img" => "/images/genre/Mystery.jpg"]);
        DB::table('genres')->insert(["title" => "روانشناسی", "img" => "/images/genre/Relationship.jpg"]);
        DB::table('genres')->insert(["title" => "عشقی", "img" => "/images/genre/Romance.jpg"]);
        DB::table('genres')->insert(["title" => "علمی تخیلی", "img" => "/images/genre/Science.jpg"]);
        DB::table('genres')->insert(["title" => "سایر", "img" => "/images/genre/Other.jpg"]);
    }
}
