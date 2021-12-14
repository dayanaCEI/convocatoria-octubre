<?php
    include "classGraficos.php";
    $graf = new Graficos();
    $listado = $graf->selectProductos();
    echo json_encode($listado);
?>