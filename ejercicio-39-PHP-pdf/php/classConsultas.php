<?php

include "classConexion.php";

class Consultas{

    public $conex;
    public function __construct(){
        $this->conex = new Conexion();
    }
    public function  selectRecetas(){
        $sql = "SELECT receta.idReceta as id ,receta.nombreReceta as receta, receta.instrucciones as instrucc, categoria.nombreCategoria as categ, pais.nombrePais as pais FROM receta, categoria,pais WHERE receta.idCategoria = categoria.idCategoria AND receta.idPais_receta = pais.idPais";
        $select = $this->conex->query($sql);
        $listado = $select->fetchAll(PDO::FETCH_ASSOC);        
        return $listado;
    }

    public function  selectRecetasId($id){
        $sql = "SELECT receta.idReceta as id ,receta.nombreReceta as receta, receta.instrucciones as instrucc, categoria.nombreCategoria as categ, pais.nombrePais as pais FROM receta, categoria,pais WHERE receta.idCategoria = categoria.idCategoria AND receta.idPais_receta = pais.idPais and receta.idReceta= :id";
        $select = $this->conex->prepare($sql);
        $select->execute(array(":id"=> $id));
        $listado = $select->fetch(PDO::FETCH_ASSOC);        
        return $listado;
    }
}
?>