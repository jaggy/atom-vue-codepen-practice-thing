<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

$router->auth();

$router->group(['middleware' => 'auth'], function ($router) {
    $router->get('/', ['as' => 'home', 'EditorController@index']);
});

$router->get('editor', function () {
    return view('mocks.editor');
});

//Route::get('/', 'CodeClash\DashboardController@getIndex');
//Route::get('/', 'CodeClash\EditorController@getIndex');
