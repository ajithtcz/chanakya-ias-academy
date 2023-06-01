<?php

use MVC\Model;
class ModelsLogin extends Model {

    public function Login($req) {
        $email="'".$req['Email']."'";
        $password="'".$req['Password']."'";
        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "students WHERE Email=". $email."AND Password=".$password."AND Status='Active'");
        $query1 = $this->db->query("SELECT * FROM " . DB_PREFIX . "staffs WHERE Email=". $email."AND Password=".$password."AND Status='Active'");
        return array('res'=>$query->num_rows,'res1'=>$query1->num_rows);
    }

}