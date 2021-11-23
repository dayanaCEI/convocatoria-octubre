<?php

include "conexion.php";
class Consultas extends Conexion{

    public function __construct(){
        parent::__construct();
    }
    public function selectPais(){
        $sql = "SELECT idPais, nombrePais FROM pais";
        $result = mysqli_query($this->conex, $sql);
        return $result;
    }
    public function selectProvincia($idPais){
        $sql = "SELECT idProvincia,nombrePro, fkPais
        FROM provincia WHERE fkPais = $idPais";
        $result = mysqli_query($this->conex, $sql );
        return $result;
    }

}

