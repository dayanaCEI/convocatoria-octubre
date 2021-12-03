<?php
    include "classConexion.php";
    include "classServices.php";

    $conex = new Conexion();
    $con = $conex->conexion();

    $servicio = new Service();
    $arrayserv = [];
    
    $nameImg = $_FILES["img"]["name"];
    $typeImg = $_FILES["img"]["type"];
    $urlImg = $_FILES["img"]["tmp_name"];
    
    $arrayserv = [$_POST["name"],$_POST["desc"],$_POST["precio"],$nameImg];

    if(str_contains($typeImg,"jpg") ||str_contains($typeImg,"png")||str_contains($typeImg,"jpeg") ){
       if( move_uploaded_file($urlImg,"../uploads/$nameImg")){
            $servicio->insertServicio($arrayserv,$con);
       }
    }


?>