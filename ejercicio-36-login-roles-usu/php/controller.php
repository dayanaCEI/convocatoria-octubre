<?php
session_start();
include "classConexion.php";
include "classUser.php";

$conex  = new Conexion();
$user = new User();
$user->login($_POST["email"],$_POST["pass"] ,$conex);
header("Location:../index.php");