<?php
session_start();
include "classConexion.php";
include "classUser.php";

$conex  = new Conexion();
$user = new User();

$caso = $_POST["oculto"];

if($caso  == 0){
    $user->login($_POST["email"],$_POST["pass"] ,$conex);
    header("Location:../index.php");
}else{
    //registro 
    $pass = password_hash($_POST["pass"],PASSWORD_DEFAULT);
    $user->registrarUsuario($_POST["email"],$_POST["nombre"],$pass,$_POST["rol"],$conex);
}