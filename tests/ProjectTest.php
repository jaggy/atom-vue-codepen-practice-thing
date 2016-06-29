<?php

use App\Project;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ProjectTest extends TestCase
{
    use DatabaseMigrations;

    /** @test **/
    public function it_creates_a_file_under_the_given_project()
    {
        $project = factory(Project::class)->create();

        $project->addFile('theme.scss');

        $this->seeInDatabase('files', [
            'name' => 'theme',
            'extension' => 'scss'
        ]);
    }
}
