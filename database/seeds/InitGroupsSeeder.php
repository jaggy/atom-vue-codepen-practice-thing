<?php

use Illuminate\Database\Seeder;
use App\Models\Group;

class InitGroupsSeeder extends Seeder {

    public function run()
    {
        array_map(function($group) {
            Group::where('id', '=', $group->id)->delete();
            Group::create([
                'id'   => $group->id,
                'name' => $group->name,
            ]);
        }, array(
            (object) array(
                'id'   => 1,
                'name' => 'Admins',
            ),
            (object) array(
                'id'   => 2,
                'name' => 'Users',
            ),
        ));
    }

}
