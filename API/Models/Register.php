<?php
use MVC\Model;
class ModelsRegister extends Model {
    public function lastrecord($id){
        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "students WHERE id=".$id);
        return $query->row;
    }
    public function EnrollStudents($data) {
        $array_keys =implode(",", array_keys($data));
        $array_values = "'".implode("','", array_values($data))."'";
        $query = $this->db->query("INSERT INTO " . DB_PREFIX ."students (".$array_keys.") VALUES (".$array_values.")");
        $id=$this->db->getLastId();
        $fdata=$this->lastrecord($id);
        return $fdata;
    }

}