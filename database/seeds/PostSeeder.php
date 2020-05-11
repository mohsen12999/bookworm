<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('posts')->insert([
            "title" => "الهام بخشی طبیعت",
            "img" => "/images/blog/img-01.jpg",
            "subject_id" => 1,
            "user_id" =>  3
        ]);

        DB::table('posts')->insert([
            "title" => "فکر آزاد",
            "img" => "/images/blog/img-02.jpg",
            "subject_id" => 2,
            "user_id" =>  2
        ]);

        DB::table('posts')->insert([
            "title" => "تاثیر ورزش بر فعالیت ها",
            "img" => "/images/blog/img-03.jpg",
            "subject_id" => 3,
            "user_id" =>  1
        ]);

        DB::table('posts')->insert([
            "title" => "هنر رقص در جوامع",
            "img" => "/images/blog/img-04.jpg",
            "subject_id" => 4,
            "user_id" =>  4
        ]);
    }
}
