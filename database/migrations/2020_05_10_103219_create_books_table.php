<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();

            $table->string('title');
            $table->string('abstract')->nullable();
            $table->string('foreign_author')->nullable();
            $table->string('img')->nullable();
            $table->unsignedDecimal('price', 8, 2);

            $table->unsignedInteger('view_count')->default(0);

            $table->timestamps();

            $table->softDeletes('deleted_at', 0);

            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->bigInteger('genre_id')->nullable()->unsigned();
            $table->foreign('genre_id')->references('id')->on('genres');

            $table->tinyInteger('publish_status')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
}
