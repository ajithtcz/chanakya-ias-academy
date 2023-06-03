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
        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "students WHERE FIND_IN_SET(".$id.",Enrolled_Courses) AND Email=".$email);
        return $query->rows;
    }
}
