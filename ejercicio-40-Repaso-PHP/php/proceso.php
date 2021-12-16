<?php
    $mensaje = "el nombre enviado al servidor es ".$_POST["info"]. $_POST["apellido"];
    //
    $conex = mysqli_connect("localhost", "root","","recetas");
    $sql="SELECT * FROM receta";
    $result = mysqli_query($conex,$sql);
    $lista = mysqli_fetch_array($result);
    echo json_encode($lista);
?>