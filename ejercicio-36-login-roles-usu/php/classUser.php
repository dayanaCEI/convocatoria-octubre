<?php
class User {
    
    public function login($email,$pass,$conex){
        $sql = "SELECT nombre, email, pass, rol FROM usuario, roles WHERE usuario.fkRol = roles.id AND email = :email";
        $select = $conex->prepare($sql);
        $select->execute(array(":email"=>$email));
        if($select->rowCount() != 0 ){
            $user = $select->fetch();
            if(password_verify($pass,$user["pass"])){
                $_SESSION["nombre"] = $user["nombre"];
                $_SESSION["rol"] = $user["rol"];
                echo "bienvenido ".  $_SESSION["nombre"];
            }
            else{
                echo "constraseña incorrecta";
            }
        }else{
            echo "email no encontrado";
        }
    }
    public function registrarUsuario($correo,$name, $pass, $rol, $cone){
        $sql = "SELECT * FROM usuario WHERE email = :email";
        $select = $cone->prepare($sql);
        $select->execute(array(":email" => $correo));

        if($select->rowCount() == 0 ){
            echo "el email no existe";
            $insert = "INSERT INTO usuario (nombre, email, pass, fkRol) VALUE(:name,:email, :pass, :fkrol)";
            $insertUser = $cone->prepare($insert);
            $insertUser->execute(array(":name" => $name, ":email" => $correo, ":pass" =>$pass, ":fkrol"=>$rol));
        }
        else{
            echo "el email esta repetido";
        }
        
    }
}
?>