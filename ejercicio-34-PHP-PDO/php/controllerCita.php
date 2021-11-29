<?php
include "classConexion.php";
include "classCita.php";
$con = new Conexion();
$conex = $con->conexion();

$listdata = [$_POST["usuario"],$_POST["servicio"],$_POST["fecha"],$_POST["hora"]];
$cita = new Cita();
echo $cita->insertCita($listdata,$conex);