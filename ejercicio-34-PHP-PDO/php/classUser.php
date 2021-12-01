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
                $_SESSION["idUser"] = $usuario["id"];
                $_SESSION["nombre"] = $usuario["nombre"];
                $_SESSION["rol"] = $usuario["rol"];
                echo "session";
            }
            else{
                echo "Contraseña incorrecta no valido";
            }
        }
    }
    public function cookies($checkbox,$email, $pass){
        $cookies = [];
        if($checkbox){
            setcookie("email", $email, time() + 3600);
            $cookies[0] = $_COOKIE["email"];
            setcookie("pass", $pass, time()+3600);
            $cookies[1] = $_COOKIE["pass"];
        }
        return $cookies;
    }
}

?>