<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Models\Group;
use App\Models\UserGroup;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public static function getUserByEmail($email = false) {
        if(!$email) { return false; }
        return User::where('email', '=', $email);
    }

    // relationships
    public function groups() {
        return $this->belongsToMany('App\Models\Group');
    }
}
