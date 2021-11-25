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

    public function selectMunicipio($idProv){
        $sql = "SELECT idMunicipio, nombreMun, fkProvincia
        FROM municipio WHERE fkProvincia = $idProv";
        $result = mysqli_query($this->conex,$sql);
        return $result;
    }

    public function selectCalles($idMun){
        $sql = "SELECT idCalle, nombreCalle, fkMunicipio
        FROM calle WHERE fkMunicipio = $idMun";
        $result = mysqli_query($this->conex,$sql);
        return $result;
    }
    public function insertEnfermedad($nomEnf){
        $sql = "INSERT INTO enfermedad (nombre) VALUE ('$nomEnf')";
        mysqli_query($this->conex, $sql);
    }
}

