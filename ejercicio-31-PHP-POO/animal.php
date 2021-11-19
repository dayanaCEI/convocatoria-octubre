<?php
class Animal{
    //public, private, protected
    public $nombreMascota;
    public $raza;
    private $fechaNa;

    public function __construct($nomb,$raza,$fecha){
        $this->nombreMascota = $nomb;
        $this->raza = $raza;
        $this->fechaNa = $fecha;
    }
    public function paint(){
        echo "La mascota se llama ". $this->nombreMascota;
    }
    public function paintRaza(){
        echo "RAzas ". $this->raza;
        $this->paint();
        echo "<br>";
    }
}
$primerAnimal = new Animal("pepa","chihuahua","2021");
$primerAnimal->paintRaza();

$segundoAnimal = new Animal("zeus","pitbull","2020");
$segundoAnimal->paintRaza();
?>