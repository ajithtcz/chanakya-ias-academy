<?php
use MVC\Controller;
use Auth\Authentication;
class ControllersStudentprofile extends Controller
{
   public function getstudentprofile(){
    try {

        $verify = Authentication::verifyJWT();
        if ($verify == "Unauthorized") {
          $this->response->sendStatus(401);
          $this->response->setContent(array("error" => "Unauthorized"));
        } 
        else {
        $req = $this->request->input(); //Request Method
        $studentprofile = $this->model('studentprofile');  //model query
        $resdata=$studentprofile->getStudentbyEmail($verify->Email);
        $this->response->sendStatus(200);  //Response Status
        $this->response->setContent($resdata); // Response Data
        }

    }
    catch (Exception $e) {
        echo 'Error Message: ' . $e->getMessage();
    }
   }
}