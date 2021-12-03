<?php

class Service{
    public function selectService($con){
        $sql = "SELECT id, nombre FROM servicio";
        $select = $con->prepare($sql);
        $select->execute();
        $listado = $select->fetchAll();
        return $listado;
    }
    //insertar servicios
    /*
    X 0.- Añadirle a la tabla de servicios la columna para la imagen
    X 2.- crear el formulario para pedir los datos del servicio
    1.- crear el metodo para insertar un servicio
    3.- recoger los dato del form (validar que el fichero sea jpg-png-jpeg)
    4.- crear el objeto de la clase services para ejecutar el metodo
    */

    public function insertServicio($arrayServic, $conex){
        $sql = "INSERT INTO servicio (nombre descripcion, precio, imagen) VALUES (:nom,:descr,:prec,:img)";
        $insert = $conex->prepare($sql);
        $insert->execute(array(":nom"=>$arrayServic[0],":descr"=>$arrayServic[1], ":prec"=> $arrayServic[2],":img"=>$arrayServic[3]));
    }
}


?>