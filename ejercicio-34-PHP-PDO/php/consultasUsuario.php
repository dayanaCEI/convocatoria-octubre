<?php
   include "classConexion.php";
   include "classUser.php";
   $con =  new Conexion();
   $conex = $con->conexion();

   $user = new User();
   $listado = $user->selectUsers($conex);
   $stringListado = json_encode($listado);
   echo  $stringListado;
    
?>