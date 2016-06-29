<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EditorController extends CodeClashController
{
    /**
     * Display the editor.
     *
     * @param  Request  $request
     * @return \Illuminate\Contracts\View\View
     */
    public function index(Request $request)
    {
		return view('app.editor');
	}
}
