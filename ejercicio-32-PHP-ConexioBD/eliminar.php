<?php
    echo "eliminar";
    include "database.php";
    $objectZoo = new Database();
    $objectZoo->deleteZoo($_GET["id"]);
    echo "eliminado con exito";
    header("Location:index.php");
?>