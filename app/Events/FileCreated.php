<?php

namespace App\Events;

use App\File;
use App\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class FileCreated extends Event implements ShouldBroadcast
{
    use SerializesModels;

    /**
     * The file created.
     *
     * @var File
     */
    public $file;

    /**
     * Create a new event instance.
     *
     * @param  File  $file
     * @return void
     */
    public function __construct(File $file)
    {
        $this->file = $file;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return ['projects.' . $this->file->project->id];
    }
}
