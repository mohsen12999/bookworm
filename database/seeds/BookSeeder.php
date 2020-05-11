<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('books')->insert([
            "title" => "جریان آب صدادار",
            "foreign_author" => "بورلی تان",
            "img" => "/images/book/shop-1-580x925.jpg",
            "genre_id" => 1,
            "price" => 2.7,
            "user_id" => 1,
            "view_count" => rand(0, 1000),
            "created_at" => date("Y-m-d H:i:s")
        ]);

        DB::table('books')->insert([
            "title" => "آخرین موج دریا",
            "foreign_author" => "الکساندر آرونتویتز",
            "img" => "/images/book/shop-8-580x925.jpg",
            "genre_id" => 1,
            "price" => 3.2,
            "user_id" => 1,
            "view_count" => rand(0, 1000),
            "created_at" => date("Y-m-d H:i:s")
        ]);

        DB::table('books')->insert([
            "title" => "فلورا",
            "foreign_author" => "رافائل مورلند",
            "img" => "/images/book/shop-10-580x925.jpg",
            "genre_id" => 3,
            "price" => 4.1,
            "user_id" => 1,
            "view_count" => rand(0, 1000),
            "created_at" => date("Y-m-d H:i:s")
        ]);

        DB::table('books')->insert([
            "title" => "راز ها",
            "foreign_author" => "هری ریکتز",
            "img" => "/images/book/shop-21-580x925.jpg",
            "genre_id" => 3,
            "price" => 2.2,
            "user_id" => 1,
            "view_count" => rand(0, 1000),
            "created_at" => date("Y-m-d H:i:s")
        ]);

        DB::table('books')->insert([
            "title" => "یک چیز خوب در هر روز",
            "foreign_author" => "هانتر هیلی",
            "img" => "/images/book/shop-20-580x925.jpg",
            "genre_id" => 2,
            "price" => 4.4,
            "user_id" => 1,
            "view_count" => rand(0, 1000),
            "created_at" => date("Y-m-d H:i:s")
        ]);

        DB::table('books')->insert([
            "title" => "زندگی فردریک داگلاس",
            "foreign_author" => "مایا گروسمن",
            "img" => "/images/book/shop-17-580x925.jpg",
            "genre_id" => 3,
            "price" => 2.7,
            "user_id" => 1,
            "view_count" => rand(0, 1000),
            "created_at" => date("Y-m-d H:i:s")
        ]);

        DB::table('books')->insert([
            "title" => "حیات وحش",
            "foreign_author" => "ادوارد اینگر",
            "img" => "/images/book/shop-16-580x925.jpg",
            "genre_id" => 4,
            "price" => 3.9,
            "user_id" => 1,
            "view_count" => rand(0, 1000),
            "created_at" => date("Y-m-d H:i:s")
        ]);

        DB::table('books')->insert([
            "title" => "مجله غذا",
            "foreign_author" => "نیکولت",
            "img" => "/images/book/shop-12-580x925.jpg",
            "genre_id" => 5,
            "price" => 4.7,
            "user_id" => 1,
            "view_count" => rand(0, 1000),
            "created_at" => date("Y-m-d H:i:s")
        ]);

        DB::table('books')->insert([
            "title" => "مینیمالیسم نام یک بازیست",
            "foreign_author" => "لاورنس سیگل",
            "img" => "/images/book/shop-1-580x925.jpg",
            "genre_id" => 3,
            "price" => 2.6,
            "user_id" => 1,
            "view_count" => rand(0, 1000),
            "created_at" => date("Y-m-d H:i:s")
        ]);

        DB::table('books')->insert([
            "title" => "آموزش طراحی گرافیک",
            "foreign_author" => "مکدوول",
            "img" => "/images/book/shop-6-580x925.jpg",
            "genre_id" => 6,
            "price" => 2.7,
            "user_id" => 1,
            "view_count" => rand(0, 1000),
            "created_at" => date("Y-m-d H:i:s")
        ]);

        DB::table('books')->insert([
            "title" => "زیر دره ها",
            "foreign_author" => "هری ریکت",
            "img" => "/images/book/shop-22-580x925.jpg",
            "genre_id" => 1,
            "price" => 3.1,
            "user_id" => 1,
            "view_count" => rand(0, 1000),
            "created_at" => date("Y-m-d H:i:s")
        ]);

        DB::table('books')->insert([
            "title" => "زندگی شهری",
            "foreign_author" => "ویکتوریا جونز",
            "img" => "/images/book/shop-14-580x925.jpg",
            "genre_id" => 3,
            "price" => 4.7,
            "user_id" => 1,
            "view_count" => rand(0, 1000),
            "created_at" => date("Y-m-d H:i:s")
        ]);

        DB::table('books')->insert([
            "title" => "مردم، پرتره ها و تصاویر",
            "foreign_author" => "دوروتی میچل",
            "img" => "/images/book/shop-2-580x925.jpg",
            "genre_id" => 2,
            "price" => 1.9,
            "user_id" => 1,
            "view_count" => rand(0, 1000),
            "created_at" => date("Y-m-d H:i:s")
        ]);

        DB::table('books')->insert([
            "title" => "نقاشی دیجیتال برای طراحان گرافیک",
            "foreign_author" => "الینور فیتزجرالد",
            "img" => "/images/book/shop-3-580x925.jpg",
            "genre_id" => 2,
            "price" => 1.9,
            "user_id" => 1,
            "view_count" => rand(0, 1000),
            "created_at" => date("Y-m-d H:i:s")
        ]);

        DB::table('books')->insert([
            "title" => "همه چیز در مورد استیک",
            "foreign_author" => "سرآشپز ایزابل مرکادو",
            "img" => "/images/book/shop-4-580x925.jpg",
            "genre_id" => 2,
            "price" => 3.9,
            "user_id" => 1,
            "view_count" => rand(0, 1000),
            "created_at" => date("Y-m-d H:i:s")
        ]);

        DB::table('books')->insert([
            "title" => "کوه هایی که اعتقاد را می سازد",
            "foreign_author" => "آلفردو توررس",
            "img" => "/images/book/shop-5-580x925.jpg",
            "genre_id" => 2,
            "price" => 2.4,
            "user_id" => 1,
            "view_count" => rand(0, 1000),
            "created_at" => date("Y-m-d H:i:s")
        ]);

        DB::table('books')->insert([
            "title" => "کتاب دعا",
            "foreign_author" => "جوزپین ویلیامز",
            "img" => "/images/book/shop-7-580x925.jpg",
            "genre_id" => 2,
            "price" => 1.9,
            "user_id" => 1,
            "view_count" => rand(0, 1000),
            "created_at" => date("Y-m-d H:i:s")
        ]);

        DB::table('books')->insert([
            "title" => "فشن مینیمال برای مینیمال ها",
            "foreign_author" => "کیتی ری جانسون",
            "img" => "/images/book/shop-11-580x925.jpg",
            "genre_id" => 4,
            "price" => 1.9,
            "user_id" => 1,
            "view_count" => rand(0, 1000),
            "created_at" => date("Y-m-d H:i:s")
        ]);

        DB::table('books')->insert([
            "title" => "کلاس نویسندگی",
            "foreign_author" => "نلی رز",
            "img" => "/images/book/shop-13-580x925.jpg",
            "genre_id" => 2,
            "price" => 3.3,
            "user_id" => 1,
            "view_count" => rand(0, 1000),
            "created_at" => date("Y-m-d H:i:s")
        ]);

        DB::table('books')->insert([
            "title" => "پیام مخفی بازنشده",
            "foreign_author" => "ریچارد سانچز",
            "img" => "/images/book/shop-19-580x925.jpg",
            "genre_id" => 2,
            "price" => 4.9,
            "user_id" => 1,
            "view_count" => rand(0, 1000),
            "created_at" => date("Y-m-d H:i:s")
        ]);
    }
}
