<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChapterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('chapters')->insert(["title" => "فصل اول: مقدمه", "free_chapter" => 1, "book_id" => 1, 'publish_status' => 100]);
        DB::table('chapters')->insert(["title" => "فصل دوم: افتتاحیه", "free_chapter" => 0, "book_id" => 1, 'publish_status' => 100]);
        DB::table('chapters')->insert(["title" => "فصل سوم: اتفاق", "free_chapter" => 0, "book_id" => 1, 'publish_status' => 100]);
        DB::table('chapters')->insert(["title" => "فصل چهارم: مرگ", "free_chapter" => 0, "book_id" => 1, 'publish_status' => 100]);
        DB::table('chapters')->insert(["title" => "فصل پنجم: رستگاری", "free_chapter" => 0, "book_id" => 1, 'publish_status' => 100]);

        DB::table('chapters')->insert(["title" => "فصل اول: مقدمه", "free_chapter" => 1, "book_id" => 2, 'publish_status' => 100]);
        DB::table('chapters')->insert(["title" => "فصل دوم: افتتاحیه", "free_chapter" => 0, "book_id" => 2, 'publish_status' => 100]);
        DB::table('chapters')->insert(["title" => "فصل سوم: اتفاق", "free_chapter" => 0, "book_id" => 2, 'publish_status' => 100]);
        DB::table('chapters')->insert(["title" => "فصل چهارم: مرگ", "free_chapter" => 0, "book_id" => 2, 'publish_status' => 100]);
        DB::table('chapters')->insert(["title" => "فصل پنجم: رستگاری", "free_chapter" => 0, "book_id" => 2, 'publish_status' => 100]);
    }
}
