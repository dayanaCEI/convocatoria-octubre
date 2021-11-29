<?php

    include "classConexion.php";
    include "classUser.php";

    $conex = new Conexion();
    $con = $conex->conexion();

    $user = new User();
    echo $user->insertUser($_POST["name"],$_POST["email"],$_POST["pass"],$con);
    
?>