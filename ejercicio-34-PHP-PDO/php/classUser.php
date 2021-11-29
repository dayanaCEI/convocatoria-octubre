<?php

class User{
    
    public function insertUser($name, $mail, $pass, $con){
        $insert = "INSERT INTO usuario (nombre, email, pass, rol) VALUES (:name, :email, :pass, :rol)";
        $sql = $con->prepare($insert);
        if(!$sql->execute(array(":name"=>$name,":email"=>$mail,":pass"=>$pass,":rol"=>"c"))){
            return false;
        }else{
            return true;
        }
    }
    public function selectUsers($con){
        $sql = "SELECT id, nombre FROM usuario";
        $select = $con->prepare($sql);
        $select->execute();
        return $select->fetchAll();
    }
}

?>