<?php
///insert sucesivos 
$listado = $_POST["checkes"];

include "consultas.php";
$objetoConsulta  = new Consultas(); 

for($i =0; $i < count($listado); $i++ ){
    echo $listado[$i];
    $objetoConsulta->insertEnfermedad($listado[$i]);
}

?>