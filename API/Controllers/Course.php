<?php

use MVC\Controller;
use Auth\Authentication;

class ControllersCourse extends Controller
{
    public function getcoursedetails()
    {
        try {
            $verify = Authentication::verifyJWT();
            if ($verify == "Unauthorized") {
                $this->response->sendStatus(401);
                $this->response->setContent(array("error" => "Unauthorized"));
            } else {
                $studentprofile = $this->model('studentprofile'); 
                $checkaccess = $studentprofile->getcourseaccess($_GET['id'],$verify->Email);
                if(count($checkaccess)>0){
                $course = $this->model('course');  //model query
                $resdata = $course->getcoursedetails($_GET['id']);
               
                }
                else{
                  $resdata=array("error"=>"Unauthorized");
                }
                $this->response->sendStatus(200);  //Response Status
                $this->response->setContent($resdata); // Response Data
            }
        } catch (Exception $e) {
            echo 'Error Message: ' . $e->getMessage();
        }
    }
    public function savecoursedetails()
    {
        try {
        //$verify = Authentication::verifyJWT();
       //// if ($verify == "Unauthorized") {
      ///    $this->response->sendStatus(401);
       //   $this->response->setContent(array("error" => "Unauthorized"));
        //} 
       // else {
        $reqdata=$_POST;
        if (isset($_FILES['Course_Pdf'])){
            $uploadedFile = $_FILES['Course_Pdf']['tmp_name'];
            $folderName = 'Upload/pdf/'.$_POST['Course_Short_Name'];
            if (!file_exists($folderName)) {
                mkdir($folderName, 0777, true);
            }
            $destination = $folderName.'/'. $_FILES['Course_Pdf']['name'];
            if (move_uploaded_file($uploadedFile, $destination)) {
           
            } 
        }
        if (isset($_FILES['Course_Video'])){
            $uploadedFile = $_FILES['Course_Video']['tmp_name'];
            $folderName = 'Upload/video/'.$_POST['Course_Short_Name'];
            if (!file_exists($folderName)) {
                mkdir($folderName, 0777, true);
            }
            $destination = $folderName.'/'. $_FILES['Course_Video']['name'];
            if (move_uploaded_file($uploadedFile, $destination)) {
           
            } 

        }
        $reqdata['Course_Pdf']='/'.$_POST['Course_Short_Name'].'/'. $_FILES['Course_Pdf']['name'];
        $reqdata['Course_Video']='/'.$_POST['Course_Short_Name'].'/'. $_FILES['Course_Video']['name'];
        $studentprofile = $this->model('course');  //model query
        $resdata=$studentprofile->Savecourse($reqdata);
        $this->response->sendStatus(200);  //Response Status
        $this->response->setContent($resdata); // Response Data
        //} 
        } catch (Exception $e) {
            echo 'Error Message: ' . $e->getMessage();
        }
    }
}
