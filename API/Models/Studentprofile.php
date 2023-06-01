<?php

use MVC\Model;
class ModelsStudentprofile extends Model {
    public function getStudentbyEmail($req) {
        $email="'".$req."'";
        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "students WHERE Email=". $email);
        return $query->row;
    }
    public function getcourseaccess($shortname,$emailid){
        $id="'".$shortname."'";
        $email="'".$emailid."'";
        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "students WHERE Enrolled_Courses=".$id." AND Email=".$email);
        return $query->rows;
    }
}
