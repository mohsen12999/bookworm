<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        $this->call([
            // UserSeeder::class,
            SubjectSeeder::class,
            PostSeeder::class,
            GenreSeeder::class,
            BookSeeder::class,
            ChapterSeeder::class,
        ]);
    }
}
