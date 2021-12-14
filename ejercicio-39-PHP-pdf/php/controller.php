<?php
    include "classPdf.php";
    include "classConsultas.php";
    
    $pdf = new Pdf();
    $header = array("Receta","Instrucciones","Categoria","pais");
    $consulta = new Consultas();
    $data = $consulta->selectRecetas();
    
    /*array(
        array("Alfreds Futterkiste","Maria Anders","Germany"),
        array("Ernst Handel","Roland Mendel","Austria"),
        array("Island Trading","Helen Bennett","UK")
    );*/
    //pagina 1
    $pdf->AddPage();
    $pdf->createTable($data,$header);

    //pagina 2
    $pdf->AddPage();
    $pdf->Output();

?>