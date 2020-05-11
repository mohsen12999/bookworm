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
        DB::table('subjects')->insert(["title" => "نقد", "img" => "/images/genre/Adventure.jpg"]);
        DB::table('subjects')->insert(["title" => "معرفی", "img" => "/images/genre/Art.jpg"]);
        DB::table('subjects')->insert(["title" => "اخبار", "img" => "/images/genre/Biography.jpg"]);
        DB::table('subjects')->insert(["title" => "سایر", "img" => "/images/genre/Other.jpg"]);
    }
}
