<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <a href="./php/controller.php">Descargar recetas</a>
    <table borde="1">
        <tr>
            <th>RECETAS</th>
            <th>INSTRUCCIONES</th>
            <th>CATEGORIA</th>
            <th>PAIS</th>
        <tr>
            <?php
        include "./php/classConsultas.php";
        $consulta = new Consultas();
        $listado = $consulta->selectRecetas();
        foreach($listado as $row){ ?>
        <tr>
            <td><a href="./php/controllReceta.php?id=<?php echo $row["id"]; ?>"> <?php echo $row["receta"]; ?></a></td>
            <td><?php echo $row["instrucc"]; ?></td>
            <td><?php echo $row["categ"]; ?></td>
            <td><?php echo $row["pais"]; ?></td>
        </tr>
        <?php } ?>
</body>
<!--
    X 1.- Crea La nueva clase para las consultas de la BD
    X 2.- Crear método para consultar los  datos de la BD 
    (SQL con tablas relacionadas )
    3.-  Crear un archivo controlador,  y alli le  pasamos los datos  
    al metodo de la tabla
    4.- Apuntar el el enlace al fichero controlador
 -->

</html>