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
}
?>