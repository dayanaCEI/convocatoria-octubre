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

    public function login($pass, $email, $conex){
        $sql = "SELECT id, nombre, rol, pass  FROM usuario WHERE email = :email ";
        $select = $conex->prepare($sql);
        $select->execute(array(":email" => $email));
        $numFila = $select->rowCount(); 
        
        if($numFila == 0){
            echo "Email no valido";
        }
        else{
            $usuario =  $select->fetch();
            if(password_verify($pass, $usuario["pass"])){
                //crear sesion
                echo "inicio de sesion correcto";
            }
            else{
                echo "Contraseña incorrecta no valido";
            }
        }
        
    }
}

include "classConexion.php";

$conex = new Conexion();
$con = $conex->conexion();

$user = new User();
$user->login("123456", "guille@gmail.com", $con);
?>