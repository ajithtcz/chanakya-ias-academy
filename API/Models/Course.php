<?php

use MVC\Model;
class ModelsCourse extends Model {
    public function lastrecord($id){
        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "coursedetails WHERE id=".$id);
        return $query->row;
    }

    public function admingetallcourse(){
        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "coursedetails");
        return $query->rows;
    }
    public function getcoursedetails($shortname){
        $id="'".$shortname."'";
        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "coursedetails WHERE Course_Status='Active' AND Course_Short_Name=".$id);
        return $query->rows;
    }
    public function getcoursebyid($shortname,$v){
        $name="'".$shortname."'";
        $id="'".$v."'";
        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "coursedetails WHERE Course_Status='Active' AND Course_Short_Name=".$name."AND id=".$id);
        return $query->row;

    }
    public function Savecourse($data) {
        $array_keys =implode(",", array_keys($data));
        $array_values = "'".implode("','", array_values($data))."'";
        $query = $this->db->query("INSERT INTO " . DB_PREFIX ."coursedetails (".$array_keys.") VALUES (".$array_values.")");
        $id=$this->db->getLastId();
        $fdata=$this->lastrecord($id);
        return $fdata;
    }
    public function Update($data,$id) {
        if(array_key_exists("id",$data))
        {
           unset($data['id']);
        }
        $cols = array();
        foreach ($data as $key => $val) {
            $cols[] = "$key = '$val'";
        }
        $query = $this->db->query("UPDATE " . DB_PREFIX . "coursedetails SET " . implode(', ', $cols) . " WHERE id=" . $id);
        $fdata = $this->lastrecord($id);
        return $fdata;
    }
    public function Delete($id) {
        $query = $this->db->query("DELETE FROM " . DB_PREFIX ."coursedetails WHERE id=".$id);
        return $id;
    }
}