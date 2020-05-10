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
        DB::table('subjects')->insert([
            "title" => "هنر",
        ]);
        DB::table('subjects')->insert([
            "title" => "ماجراجویی",
        ]);
        DB::table('subjects')->insert([
            "title" => "فیلم نامه",
        ]);
        DB::table('subjects')->insert([
            "title" => "عشقی",
        ]);
        DB::table('subjects')->insert([
            "title" => "رازآلود",
        ]);
        DB::table('subjects')->insert([
            "title" => "خردسالان",
        ]);
    }
}
