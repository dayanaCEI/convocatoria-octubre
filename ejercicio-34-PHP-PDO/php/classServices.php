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

    
    
}

?>