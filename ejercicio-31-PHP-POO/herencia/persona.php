<?php

class Persona {
    public $nombre;
    public $email;
    
    function __construct($n,$e){
        $this->nombre = $n;
        $this->email = $e;
    }
    public function nombreCompleto(){
        $msj = "<p>El nombre es $this->nombre </p>";
        $msj.= "<p>El email es $this->email</p>";
        return $msj; 
    }
}
/*
$per1 = new Persona("sara","sara@cei.com");
echo $per1->nombreCompleto();
*/
?>