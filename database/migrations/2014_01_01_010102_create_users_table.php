<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function ($table) {
            $table->increments('id');

            $table->string('email')->unique();
            $table->string('password')->nullable();

            $table->boolean('is_active')->default(false);
            $table->boolean('is_banned')->default(false);

            $table->string('activation_token')->nullable();
            $table->rememberToken();

            $table->date('expires_at')->nullable();
            $table->datetime('banned_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('users');
    }
}
