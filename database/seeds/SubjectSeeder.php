<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('subjects')->insert(["title" => "جنگی", "img" => "/img/genre/Action.jpg"]);
        DB::table('subjects')->insert(["title" => "ماجراجویی", "img" => "/img/genre/Adventure.jpg"]);
        DB::table('subjects')->insert(["title" => "هنر", "img" => "/img/genre/Art.jpg"]);
        DB::table('subjects')->insert(["title" => "زندگی نامه", "img" => "/img/genre/Biography.jpg"]);
        DB::table('subjects')->insert(["title" => "خردسالان", "img" => "/img/genre/Children.jpg"]);
        DB::table('subjects')->insert(["title" => "فیلم نامه", "img" => "/img/genre/Movie.jpg"]);
        DB::table('subjects')->insert(["title" => "رازآلود", "img" => "/img/genre/Mystery.jpg"]);
        DB::table('subjects')->insert(["title" => "روانشناسی", "img" => "/img/genre/Relationship.jpg"]);
        DB::table('subjects')->insert(["title" => "عشقی", "img" => "/img/genre/Romance.jpg"]);
        DB::table('subjects')->insert(["title" => "علمی تخیلی", "img" => "/img/genre/Science.jpg"]);
        DB::table('subjects')->insert(["title" => "سایر", "img" => "/img/genre/Other.jpg"]);
    }
}
