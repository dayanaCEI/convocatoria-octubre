<?php
    $user = "admin";
    $pass = "1234";

    if($_POST["user"] == $user && $_POST["pass"] == $pass){
        //echo " bienvenido ";
        header("location:admin.php?user=".$_POST["user"]);
    }
    else if($_POST["user"] != $user){
        echo "usuario incorrecto";
    }else{
        echo "contraseña incorrecta";
    }

?>