<?php
    include "persona.php";
    class Estudiante extends Persona {

        public $curso;

        public function __construct($nom,$email, $cu){
            parent::__construct($nom,$email);
            $this->curso = $cu;
        }

        public function pintarEstudiante(){
            echo $this->nombreCompleto();
            echo "<p> EL curso es $this->curso";
        }
    }

    $objetoEstudian  = new Estudiante("dayana","dayan@cei.es","diseño");
    $objetoEstudian->pintarEstudiante();

?>