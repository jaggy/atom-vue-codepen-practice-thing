<?php

use App\File;
use App\Events\FileCreated;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class FileTest extends TestCase
{
    use DatabaseMigrations;

    /** @test **/
    public function it_extracts_the_file_extension_from_the_name()
    {
        $project = factory(App\Project::class)->create();

        $file = $project->files()->save(new File([
            'name' => 'master.blade.php'
        ]));

        $this->assertEquals('blade.php', $file->extension);
        $this->assertEquals('master', $file->name);
    }

    /** @test **/
    public function it_triggers_a_file_created_event_on_creation()
    {
        $this->expectsEvents(FileCreated::class);

        $project = factory(App\Project::class)->create();

        $project->addFile('theme.scss');
    }
}
