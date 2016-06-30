<?php

namespace App\Http\Controllers\Api;

use App\File;
use App\Events\FileSaved;
use App\Http\Controllers\Controller;
use App\Types\ContentType\Post;
use Illuminate\Http\Request;

class FilesController extends Controller
{
    /**
     * Fetch the file information
     */
    public function show($id)
    {
        return File::find($id);
    }
    
    /**
     * Update the file information.
     *
     * @route  PATCH  /api/files/:id
     *
     * @param  Request  $request
     * @param  int  $in
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $file = File::find($id);
        $file->content = $request->content;
        $file->save();

        event(new FileSaved($file->fresh()));

        return [];
    }
}
