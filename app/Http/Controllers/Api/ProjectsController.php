<?php

namespace App\Http\Controllers\Api;

use App\Project;
use App\Http\Controllers\Controller;

class ProjectsController extends Controller
{
    /**
     * Return the project and all the files under the given project.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        return Project::with('files')
            ->where('id', $id)
            ->first();
    }
}
