<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePermissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('permissions', function ($table) {
            $table->increments('id');

            // The action we're allowing for the user or role.
            //
            // Example values:
            //  *           - for all the routes
            //  admin.*     - all admin pages.
            //  !admin.*    - not admin pages.
            //                Or I might just extract the inverse into a field?
            //  users.index - just the user listing page.
            //  /users      - possible url only.
            //                Though I'm not really all that sure about this one
            //                We'll kinda have to include the HTTP request
            //                if we end up using this rather than just impkementing
            //                the route name. _Much_ cleaner!
            $table->string('action');

            $table->boolean('is_allowed');

            // Let's put a weight so we can prioritize the permissions.
            //
            // $accountant: *, weight = 1
            // $accountant: !users.index, weight = 2
            //
            // The accountant character is allowed to access all routes except
            // the users.index
            $table->integer('weight')->default(1);

            $table->integer('permissible_id');
            $table->string('permissible_type');

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
        Schema::drop('permissions');
    }
}
