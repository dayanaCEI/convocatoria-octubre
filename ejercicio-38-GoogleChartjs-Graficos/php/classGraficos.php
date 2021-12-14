<?php
    include "classConexion.php";
    class Graficos{
        public $conex;

        public function __construct(){
            $this->conex =  new Conexion();
        }

        public function selectProductos(){
            $sql = "SELECT nombre, precio FROM productos";
            $select = $this->conex->query($sql);
            /*
            $select = $this->conex->prepare($sql);
            $select->execute();*/
            $listado  = $select->fetchAll();
            return $listado;
        }
    }
?>