<?php

$router->resource('projects', 'ProjectsController');
$router->resource('files', 'FilesController');
$router->resource('projects.files', 'ProjectFilesController');
