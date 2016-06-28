<?php

namespace App\Http\Controllers\CodeClash;

use Illuminate\Http\Request;

class DashboardController extends CodeClashController {

	public function __construct()
	{
		parent::__construct();
		$this->middleware('auth');
	}

	public function getIndex(Request $request) {
		return view('app.dashboard');
	}
}