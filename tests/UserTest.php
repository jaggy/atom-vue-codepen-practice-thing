<?php

use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class UserTest extends TestCase
{
    use DatabaseMigrations;

    /** @test **/
    public function it_finds_the_user_with_the_given_email()
    {
        factory(User::class)->create([
            'email' => $email = 'email@gmail.com'
        ]);

        $user = User::byEmail($email);

        $this->assertEquals($email, $user->email);
    }
}
