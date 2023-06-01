<?php
use MVC\Controller;
use Auth\Authentication;
class ControllersLogin extends Controller{
    public function UserLogin()
    {
        try {
            $req = $this->request->input(); //Request Method
            $loginmodel = $this->model('login');  //model query
            $usermodel = $this->model('User');
            $loginusers = $loginmodel->Login($req);

            if ($loginusers['res'] > 0) {
                $student = $usermodel->getStudentbyEmail($req);
                $JWTtoken = Authentication::generateJWT($student);
                $this->response->sendStatus(200);  //Response Status
                $this->response->setContent($JWTtoken); // Response Data
            } else if ($loginusers['res1'] > 0) {
                $staffs = $usermodel->getStaffbyEmail($req);
                $JWTtoken = Authentication::generateJWT($staffs);
                $this->response->sendStatus(200);  //Response Status
                $this->response->setContent($JWTtoken); // Response Data
            } else {
                $json = array("message" => "error");
                $this->response->sendStatus(200);
                $this->response->setContent($json);
            }
        } catch (Exception $e) {
            echo 'Error Message: ' . $e->getMessage();
        }
    }
}
?>