<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Project;
use App\Http\Controllers\Controller;

class ProjectFilesController extends Controller
{
    /**
     * Create a new file.
     */
    public function store(Request $request, $id)
    {
        return ['test' => 'hello'];
    }
}
