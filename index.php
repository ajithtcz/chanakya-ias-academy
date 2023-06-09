<?php
require "cors.php";
require 'config.php';
require "vendor/autoload.php";
require SYSTEM . 'Startup.php';
require SERVICES . 'Services.php';

use Router\Router;
// create object of request and response class
$request = new Http\Request();
$response = new Http\Response();

$response->setHeader('Access-Control-Allow-Origin: *');
$response->setHeader("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
$response->setHeader('Content-Type: application/json; charset=UTF-8');

// set request url and method
$router = new Router($request->getUrl(), $request->getMethod());
// import router file
require 'Router/Router.php';
// Router Run Request
$router->run();
// Response Render Content
$response->render();
