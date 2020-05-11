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
        DB::table('subjects')->insert(["title" => "جنگی", "img" => "/images/genre/Action.jpg"]);
        DB::table('subjects')->insert(["title" => "ماجراجویی", "img" => "/images/genre/Adventure.jpg"]);
        DB::table('subjects')->insert(["title" => "هنر", "img" => "/images/genre/Art.jpg"]);
        DB::table('subjects')->insert(["title" => "زندگی نامه", "img" => "/images/genre/Biography.jpg"]);
        DB::table('subjects')->insert(["title" => "خردسالان", "img" => "/images/genre/Children.jpg"]);
        DB::table('subjects')->insert(["title" => "فیلم نامه", "img" => "/images/genre/Movie.jpg"]);
        DB::table('subjects')->insert(["title" => "رازآلود", "img" => "/images/genre/Mystery.jpg"]);
        DB::table('subjects')->insert(["title" => "روانشناسی", "img" => "/images/genre/Relationship.jpg"]);
        DB::table('subjects')->insert(["title" => "عشقی", "img" => "/images/genre/Romance.jpg"]);
        DB::table('subjects')->insert(["title" => "علمی تخیلی", "img" => "/images/genre/Science.jpg"]);
        DB::table('subjects')->insert(["title" => "سایر", "img" => "/images/genre/Other.jpg"]);
    }
}
