<?php
    include "classConexion.php";
    class Grafico {

        public $conex;

        public function __construct(){
            $this->conex = new Conexion();
        }

        public function selectProducto(){
            $select = $this->conex->query("SELECT * FROM productos");
            $listProducto =  $select->fetchAll(PDO::FETCH_ASSOC);
            return $listProducto;  
        }

    }
?>