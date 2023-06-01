<?php
use MVC\Controller;
class ControllersRegister extends Controller{

  public function Enroll(){
    try {
      $req=$this->request->input();
      $model=$this->model('register');
      $resdata=$model->EnrollStudents($req);
      $this->response->sendStatus(200);
      $this->response->setContent(array("message"=>"Successfully enrolled"));
    } 
    catch (Exception $e) {
        echo 'Error Message: ' . $e->getMessage();
    }
  }

}