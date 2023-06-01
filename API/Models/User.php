<?php

use MVC\Model;
class ModelsUser extends Model {
    public function getStudentbyEmail($req) {
        $email="'".$req['Email']."'";
        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "students WHERE Email=". $email);
        return $query->row;
    }
    public function getStaffbyEmail($req) {
        $email="'".$req['Email']."'";
        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "staffs WHERE Email=". $email);
        return $query->row;
    }
   
}
