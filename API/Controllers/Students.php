<?php
use MVC\Controller;
use Auth\Authentication;
class ControllersStudents extends Controller{

public function admingetallstudent(){
    try {
        $verify = Authentication::verifyJWT();
        if ($verify == "Unauthorized") {
            $this->response->sendStatus(401);
            $this->response->setContent(array("error" => "Unauthorized"));
        } else {
         
            if($verify->Role=="Admin"){
            $course = $this->model('students');  //model query
            $resdata = $course->Index();
            $this->response->sendStatus(200);  //Response Status
            $this->response->setContent($resdata); // Response Data
                 
        }
        else{
          $resdata=array("error"=>"Unauthorized");
        }
        }
    } catch (Exception $e) {
        echo 'Error Message: ' . $e->getMessage();
    } 
}

public function adminsavestudent()
{
    try {
        $verify = Authentication::verifyJWT();
        if ($verify == "Unauthorized") {
            $this->response->sendStatus(401);
            $this->response->setContent(array("error" => "Unauthorized"));
        } else {
            $reqdata = $this->request->input();
            $studentprofile = $this->model('students');  //model query
            $resdata = $studentprofile->Save($reqdata);
            $this->response->sendStatus(200);  //Response Status
            $this->response->setContent($resdata); // Response Data
        }
    } catch (Exception $e) {
        echo 'Error Message: ' . $e->getMessage();
    }
}
public function adminupdatestudent(){
    try {
        $verify = Authentication::verifyJWT();
        if ($verify == "Unauthorized") {
            $this->response->sendStatus(401);
            $this->response->setContent(array("error" => "Unauthorized"));
        } else {
            $reqdata = $this->request->input();
            $course = $this->model('students');  //model query
            $reqdata['data']['Enrolled_Courses']=implode(",",($reqdata['data']['Enrolled_Courses']));
            $resdata = $course->Update($reqdata['data'],$reqdata['id']);
           // $resdata['Enrolled_Courses']=json_decode($resdata['Enrolled_Courses']);
            $this->response->sendStatus(200);  //Response Status
            $this->response->setContent($resdata); // Response Data
        }
    } catch (Exception $e) {
        echo 'Error Message: ' . $e->getMessage();
    }

}
public function admindeletestudent(){
    try {
        $verify = Authentication::verifyJWT();
        if ($verify == "Unauthorized") {
            $this->response->sendStatus(401);
            $this->response->setContent(array("error" => "Unauthorized"));
        } else {
            $reqdata = $this->request->input();
            $course = $this->model('students');  //model query
            $resdata = $course->Delete($reqdata['id']);
            $this->response->sendStatus(200);  //Response Status
            $this->response->setContent($resdata); // Response Data
        }
    } catch (Exception $e) {
        echo 'Error Message: ' . $e->getMessage();
    }

}


}