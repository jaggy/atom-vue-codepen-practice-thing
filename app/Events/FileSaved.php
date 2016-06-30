<?php

namespace App\Events;

use App\File;
use App\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class FileSaved extends Event implements ShouldBroadcast
{
    use SerializesModels;

    /**
     * The file that was saved.
     *
     * @var FIle
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
        return ['files.' . $this->file->id];
    }
}
