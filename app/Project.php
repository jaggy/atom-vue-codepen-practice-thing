<?php

namespace App;

class Project extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name'
    ];

    /**
     * Create a new file under the given project.
     *
     * @param  string  $name
     * @return File
     */
    public function addFile(string $name)
    {
        return $this->files()->save($this->newFile($name));
    }

/*
|--------------------------------------------------------------------------
| Builders
|--------------------------------------------------------------------------
*/
    /**
     * Build the new file object.
     *
     * @param  string  $name
     * @return File
     */
    private function newFile(string $name)
    {
        return new File(['name' => $name]);
    }

/*
|--------------------------------------------------------------------------
| Relations
|--------------------------------------------------------------------------
|
*/
    public function files()
    {
        return $this->hasMany(File::class);
    }
}
