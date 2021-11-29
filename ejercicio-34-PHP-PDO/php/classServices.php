<?php

class Service{
    public function selectService($con){
        $sql = "SELECT id, nombre FROM servicio";
        $select = $con->prepare($sql);
        $select->execute();
        $listado = $select->fetchAll();
        return $listado;
    }
}

?>