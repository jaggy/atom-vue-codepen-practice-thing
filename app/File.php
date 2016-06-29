<?php

namespace App;

class File extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'extension',
    ];

    /**
     * Boot the model.
     *
     * @return void
     */
    public static function boot()
    {
        static::saving(function (self $file) {
            $segments = explode('.', $file->name);

            $file->name = array_shift($segments);
            $file->extension = implode('.', $segments);
        });
    }
}
