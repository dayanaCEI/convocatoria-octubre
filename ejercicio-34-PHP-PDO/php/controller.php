<?php
    session_start();
    include "classConexion.php";
    include "classUser.php";

    $conex = new Conexion();
    $con = $conex->conexion();
    $user = new User();
    /*
    if($_POST["proceso"]==0){
        //registro de usuario
        $pass = password_hash($_POST["pass"],PASSWORD_DEFAULT);
        echo $user->insertUser($_POST["name"],$_POST["email"], $pass,$con);
    }
    else if($_POST["proceso"]==1){
        //login
    }
    */
    /************ */
    switch ($_POST["proceso"]) {
        case 0://registro de usuario
            $pass = password_hash($_POST["pass"],PASSWORD_DEFAULT);
            echo $user->insertUser($_POST["name"],$_POST["email"], $pass,$con);
            break;
        case 1:// login
            $user->login($_POST["pass"],$_POST["email"], $con);
            $user->cookies($_POST["cookies"],$_POST["email"],$_POST["pass"]);
            
    }
    
?>