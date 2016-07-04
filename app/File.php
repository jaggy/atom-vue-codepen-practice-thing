<?php

namespace App;

use App\Events\FileCreated;

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
            if (! $file->isDirty('name')) {
                return;
            }

            $segments = explode('.', $file->name);

            $file->extension = implode('.', array_slice($segments, 1));
        });

        static::created(function ($file) {
            event(new FileCreated($file));
        });
    }

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
