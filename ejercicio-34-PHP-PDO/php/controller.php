<?php

    include "classConexion.php";
    include "classUser.php";

    $conex = new Conexion();
    $con = $conex->conexion();

    $user = new User();
    $pass = password_hash($_POST["pass"],PASSWORD_DEFAULT);
    echo $user->insertUser($_POST["name"],$_POST["email"], $pass,$con);
    
?>