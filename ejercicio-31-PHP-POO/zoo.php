<?php
/* 
    Definir un ZOO, que las siguientes caracteristicas: ciudad,metros,nombre,isOpen, precio entrada
    Definir una funcionalidad que pinte en el html, Ciudad, nombre
    Funcion que valide si está abierto. SI esta abierto debe pintar el precio de la entrada
    Si esta cerrado de mostrar un mensaje que cuando abre
    */
    class Zoo{

        public $ciudad;
        public $metros;
        public $nombre;
        public $isOpen;
        public $precio;

        public function __construct($ciu,$met,$nom,$isOp,$pre){
            $this->ciudad = $ciu;
            $this->metros = $met;
            $this->nombre = $nom;
            $this->isOpen = $isOp;
            $this->precio = $pre;
        }
        public function pintarZoo(){
            echo "<p>EL Zoo se llama: $this->nombre</p>";
            echo "<p>Se encuentra en la ciudad: $this->ciudad </p>";
        }

        public function validarPrecio(){
            if($this->isOpen){
                echo " la entrada tiene un precio de: $this->precio";
            }
            else{
                echo " temporalmente cerrado";
            }
        }
    }
    $primerZoo = new Zoo("madrid", 2500, "safari", true, 120);
    $primerZoo->pintarZoo();
    
    $primerZoo->validarPrecio();
?>