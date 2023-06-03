<?php

use MVC\Controller;
use Video\VideoStream;
use Auth\Authentication;
use FileStream\FileStream;

class ControllersStream extends Controller
{
  public function playvideoaccess(){
    try {
      $verify = Authentication::verifyJWT();
      if ($verify == "Unauthorized") {
          $this->response->sendStatus(401);
          $this->response->setContent(array("error" => "Unauthorized"));
      } else {
        $studentprofile = $this->model('studentprofile');  //model query
        $resdata = $studentprofile->getcourseaccess($_GET['id'],$verify->Email);
        $this->response->sendStatus(200);  //Response Status
        $this->response->setContent($resdata); // Response Data
      }
  } catch (Exception $e) {
      echo 'Error Message: ' . $e->getMessage();
  }
  }
  public function getpdfaccess(){
    try {
      $verify = Authentication::verifyJWT();
      if ($verify == "Unauthorized") {
          $this->response->sendStatus(401);
          $this->response->setContent(array("error" => "Unauthorized"));
      } else {
          $studentprofile = $this->model('studentprofile');  //model query
          $resdata = $studentprofile->getcourseaccess($_GET['id'],$verify->Email);
          $this->response->sendStatus(200);  //Response Status
          $this->response->setContent($resdata); // Response Data
      }
  } catch (Exception $e) {
      echo 'Error Message: ' . $e->getMessage();
  }
  }
  public function playvideo()
  {
    if (isset($_SERVER["HTTP_REFERER"])&&$_SERVER['HTTP_REFERER'] == "http://localhost:4200/") {
      $course = $this->model('course');  //model query
      $getdata = $course->getcoursebyid($_GET['coursename'], $_GET['v']);
      $filePath = VIDEO . $getdata['Course_Video'];
      if (file_exists($filePath)) {
        $stream = new VideoStream($filePath);
        $stream->start();
        exit;
      } else {
        echo "Error!";
      }
      
    } else {
      echo "Error!";
    }
  
  }
  public function getpdf()
  {
    try {

      if (isset($_SERVER["HTTP_REFERER"])&& $_SERVER['HTTP_REFERER'] == "http://localhost:4200/") {
         $course = $this->model('course');  //model query
         $getdata = $course->getcoursebyid($_GET['coursename'],$_GET['v']);
          $filePath = PDF.$getdata['Course_Pdf'];
          if (file_exists($filePath)) {
            $stream = new FileStream($filePath);
            $stream->start();
            exit;
          } else {
            echo "Error!";
          }
        
      } else {
        echo "Error!";
      }
    } catch (Exception $e) {
      echo 'Error Message: ' . $e->getMessage();
    }
  }
}
