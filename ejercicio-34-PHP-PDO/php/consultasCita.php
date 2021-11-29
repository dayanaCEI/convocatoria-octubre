<?php
  include "classConexion.php";
  include "classServices.php";

  $cone = new Conexion();
  $con = $cone->conexion();
  $serv = new Service();
  $listado =$serv->selectService($con);
  $arrayString = json_encode($listado);
  echo $arrayString;
?>