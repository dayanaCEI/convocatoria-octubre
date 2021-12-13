<?php
session_start();
include "classConexion.php";
include "classUser.php";

$conex  = new Conexion();
$user = new User();
$caso = isset($_POST["oculto"]) ? $_POST["oculto"] : 2;

if($caso  == 0){
    $user->login($_POST["email"],$_POST["pass"] ,$conex);
    header("Location:../index.php");
}else if($caso  == 1){
    //registro 
    $pass = password_hash($_POST["pass"],PASSWORD_DEFAULT);
    $user->registrarUsuario($_POST["email"],$_POST["nombre"],$pass,$_POST["rol"],$conex);
    
}else if($caso  == 2){
    $listado = $user->selectRoles($conex);
    echo json_encode($listado);
}