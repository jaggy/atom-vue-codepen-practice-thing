<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Project;
use App\Http\Controllers\Controller;

class ProjectFilesController extends Controller
{
    /**
     * List out all the files from the given project.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function index($id)
    {
        return Project::find($id)->files;
    }

    /**
     * Create a new file.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request, $id)
    {
        return Project::find($id)
                      ->addFile($request->filename);
    }
}
