<?php
use MVC\Controller;
use Email\Mail;
class ControllersRegister extends Controller{

  public function Enroll(){
    try {
      $req=$this->request->input();
      $model=$this->model('register');
      $req['Enrolled_Courses']=implode(",",$req['Enrolled_Courses']);
      $resdata=$model->EnrollStudents($req);
      Mail::sendmail($req,$resdata['Enrolled_Courses']);
      $this->response->sendStatus(200);
      $this->response->setContent(array("message"=>"Successfully enrolled"));
    } 
    catch (Exception $e) {
        echo 'Error Message: ' . $e->getMessage();
    }
  }

}