<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Builder;

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

    /**
     * Scope the user by the given email.
     *
     * @param  Builder  $query
     * @param  string  $email
     * @return Builder
     */
    public function scopeByEmail(Builder $query, $email)
    {
        return $query->where('email', $email)->first();
    }

/*
|--------------------------------------------------------------------------
| Relations
|--------------------------------------------------------------------------
|
*/
    public function groups()
    {
        return $this->belongsToMany(Group::class);
    }
}
