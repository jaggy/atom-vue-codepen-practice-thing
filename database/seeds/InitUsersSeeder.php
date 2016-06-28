<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class InitUsersSeeder extends Seeder {

    public function run()
    {
        array_map(function($user) {
            User::getUserByEmail($user->email)->delete();
            User::create([
                'first_name' => $user->first_name,
                'last_name'  => $user->last_name,
                'email'      => $user->email,
                'password'   => Hash::make($user->password),
            ])->groups()->attach($user->group_id);
        }, array(
            (object) array(
                'first_name' => 'Farez',
                'last_name'  => 'Ramilo',
                'email'      => 'farez@gbs.com',
                'password'   => '1122334455',
                'group_id'   => 1,
             ),
             (object) array(
                'first_name' => 'Uuser',
                'last_name'  => 'Llast',
                'email'      => 'user@gbs.com',
                'password'   => '1122334455',
                'group_id'   => 2,
             ),
        ));
    }

}
