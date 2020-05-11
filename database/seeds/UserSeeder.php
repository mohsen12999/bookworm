<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('users')->insert([
            'name' => 'محسن شعبانیان',
            'email' => 'mohsen@gmail.com',
            'mobile' => '',
            'avatar' => '',
            'password' => Hash::make('123456'),
            'role' => '99' // admin
        ]);

        DB::table('users')->insert([
            'name' => 'دکتر حسین فراهانی',
            'email' => 'hosein@gmail.com',
            'mobile' => '',
            'avatar' => '',
            'password' => Hash::make('123456'),
            'role' => '99' // admin
        ]);

        DB::table('users')->insert([
            'name' => 'مهندس امیر سالار سلیمانی',
            'email' => 'amir@gmail.com',
            'mobile' => '',
            'avatar' => '',
            'password' => Hash::make('123456'),
            'role' => '99' // admin
        ]);

        DB::table('users')->insert([
            'name' => 'آرتور مورگان',
            'email' => Str::random(10) . '@gmail.com',
            'mobile' => '',
            'avatar' => '',
            'password' => Hash::make('123456'),
            'role' => '10' // writer
        ]);

        DB::table('users')->insert([
            'name' => 'شاهین نجفی',
            'email' => Str::random(10) . '@gmail.com',
            'mobile' => '',
            'password' => Hash::make('123456'),
            'avatar' => '/images/user/profile-5t.jpg',
            'role' => '10' // writer
        ]);

        DB::table('users')->insert([
            'name' => 'علی عظیمی',
            'email' => Str::random(10) . '@gmail.com',
            'mobile' => '',
            'password' => Hash::make('123456'),
            'avatar' => '/images/user/profile-2t.jpg',
            'role' => '10' // writer
        ]);

        DB::table('users')->insert([
            'name' => 'سیمین بهبهانی',
            'email' => Str::random(10) . '@gmail.com',
            'mobile' => '',
            'password' => Hash::make('123456'),
            'avatar' => '/images/user/profile-3t.jpg',
            'role' => '10' // writer
        ]);

        DB::table('users')->insert([
            'name' => 'گلشیفته فراهانی',
            'email' => Str::random(10) . '@gmail.com',
            'mobile' => '',
            'password' => Hash::make('123456'),
            'avatar' => '/images/user/profile-1t.jpg',
            'role' => '10' // writer
        ]);
    }
}
