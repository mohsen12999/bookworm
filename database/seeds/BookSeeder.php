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
            "img" => "/img/book/shop-1-580x925.jpg",
            "subject_id" => 1,
            "price" => 2.7,
            "user_id" => 1,
        ]);

        DB::table('books')->insert([
            "title" => "آخرین موج دریا",
            "foreign_author" => "الکساندر آرونتویتز",
            "img" => "/img/book/shop-8-580x925.jpg",
            "subject_id" => 1,
            "price" => 3.2,
            "user_id" => 1,
        ]);

        DB::table('books')->insert([
            "title" => "فلورا",
            "foreign_author" => "رافائل مورلند",
            "img" => "/img/book/shop-10-580x925.jpg",
            "subject_id" => 3,
            "price" => 4.1,
            "user_id" => 1,
        ]);

        DB::table('books')->insert([
            "title" => "راز ها",
            "foreign_author" => "هری ریکتز",
            "img" => "/img/book/shop-21-580x925.jpg",
            "subject_id" => 3,
            "price" => 2.2,
            "user_id" => 1,
        ]);

        DB::table('books')->insert([
            "title" => "یک چیز خوب در هر روز",
            "foreign_author" => "هانتر هیلی",
            "img" => "/img/book/shop-20-580x925.jpg",
            "subject_id" => 2,
            "price" => 4.4,
            "user_id" => 1,
        ]);

        DB::table('books')->insert([
            "title" => "زندگی فردریک داگلاس",
            "foreign_author" => "مایا گروسمن",
            "img" => "/img/book/shop-17-580x925.jpg",
            "subject_id" => 3,
            "price" => 2.7,
            "user_id" => 1,
        ]);

        DB::table('books')->insert([
            "title" => "حیات وحش",
            "foreign_author" => "ادوارد اینگر",
            "img" => "/img/book/shop-16-580x925.jpg",
            "subject_id" => 4,
            "price" => 3.9,
            "user_id" => 1,
        ]);

        DB::table('books')->insert([
            "title" => "مجله غذا",
            "foreign_author" => "نیکولت",
            "img" => "/img/book/shop-12-580x925.jpg",
            "subject_id" => 5,
            "price" => 4.7,
            "user_id" => 1,
        ]);

        DB::table('books')->insert([
            "title" => "مینیمالیسم نام یک بازیست",
            "foreign_author" => "لاورنس سیگل",
            "img" => "/img/book/shop-1-580x925.jpg",
            "subject_id" => 3,
            "price" => 2.6,
            "user_id" => 1,
        ]);

        DB::table('books')->insert([
            "title" => "آموزش طراحی گرافیک",
            "foreign_author" => "مکدوول",
            "img" => "/img/book/shop-6-580x925.jpg",
            "subject_id" => 6,
            "price" => 2.7,
            "user_id" => 1,
        ]);

        DB::table('books')->insert([
            "title" => "زیر دره ها",
            "foreign_author" => "هری ریکت",
            "img" => "/img/book/shop-22-580x925.jpg",
            "subject_id" => 1,
            "price" => 3.1,
            "user_id" => 1,
        ]);

        DB::table('books')->insert([
            "title" => "زندگی شهری",
            "foreign_author" => "ویکتوریا جونز",
            "img" => "/img/book/shop-14-580x925.jpg",
            "subject_id" => 3,
            "price" => 4.7,
            "user_id" => 1,
        ]);

        DB::table('books')->insert([
            "title" => "مردم، پرتره ها و تصاویر",
            "foreign_author" => "دوروتی میچل",
            "img" => "/img/book/shop-2-580x925.jpg",
            "subject_id" => 2,
            "price" => 1.9,
            "user_id" => 1,
        ]);

        DB::table('books')->insert([
            "title" => "نقاشی دیجیتال برای طراحان گرافیک",
            "foreign_author" => "الینور فیتزجرالد",
            "img" => "/img/book/shop-3-580x925.jpg",
            "subject_id" => 2,
            "price" => 1.9,
            "user_id" => 1,
        ]);

        DB::table('books')->insert([
            "title" => "همه چیز در مورد استیک",
            "foreign_author" => "سرآشپز ایزابل مرکادو",
            "img" => "/img/book/shop-4-580x925.jpg",
            "subject_id" => 2,
            "price" => 3.9,
            "user_id" => 1,
        ]);

        DB::table('books')->insert([
            "title" => "کوه هایی که اعتقاد را می سازد",
            "foreign_author" => "آلفردو توررس",
            "img" => "/img/book/shop-5-580x925.jpg",
            "subject_id" => 2,
            "price" => 2.4,
            "user_id" => 1,
        ]);

        DB::table('books')->insert([
            "title" => "کتاب دعا",
            "foreign_author" => "جوزپین ویلیامز",
            "img" => "/img/book/shop-7-580x925.jpg",
            "subject_id" => 2,
            "price" => 1.9,
            "user_id" => 1,
        ]);

        DB::table('books')->insert([
            "title" => "فشن مینیمال برای مینیمال ها",
            "foreign_author" => "کیتی ری جانسون",
            "img" => "/img/book/shop-11-580x925.jpg",
            "subject_id" => 4,
            "price" => 1.9,
            "user_id" => 1,
        ]);

        DB::table('books')->insert([
            "title" => "کلاس نویسندگی",
            "foreign_author" => "نلی رز",
            "img" => "/img/book/shop-13-580x925.jpg",
            "subject_id" => 2,
            "price" => 3.3,
            "user_id" => 1,
        ]);

        DB::table('books')->insert([
            "title" => "پیام مخفی بازنشده",
            "foreign_author" => "ریچارد سانچز",
            "img" => "/img/book/shop-19-580x925.jpg",
            "subject_id" => 2,
            "price" => 4.9,
            "user_id" => 1,
        ]);
    }
}
