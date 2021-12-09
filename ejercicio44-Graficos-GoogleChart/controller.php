<?php
    include "classGrafico.php";
    $graf = new Grafico();
    $data = $graf->selectProducto();
    echo json_encode($data);
?>