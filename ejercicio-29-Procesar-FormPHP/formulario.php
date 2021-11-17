<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/main.css">
</head>
<body>
    <?php
        include "header.html";
    ?>
    <form action="proceso.php" method="post">
        <label>nombre </label>
        <input type="text" name="nombre" ><br>
        <label>apellido </label>
        <input type="text" name="apellido" ><br>
        <label>edad </label>
        <input type="number" name="edad" ><br>
        <label>email </label>
        <input type="email" name="email" ><br>
        <select name="pais">
            <option value="1"> España</option>
            <option value="2"> Francia</option>
            <option value="3"> Italia</option>
        </select> <br>
        <label>estado civil </label>
        <input type="radio" name="estado" value="S"> Soltero
        <input type="radio" name="estado" value="C"> Casado
        <input type="radio" name="estado" value="V"> viudo <br>
        Género de peliculas favoritas <br>
        <input type="checkbox" name="pelis[]" value="comedia"> comedia <br>
        <input type="checkbox" name="pelis[]" value="terror"> terror <br>
        <input type="checkbox" name="pelis[]" value="accion"> accion <br>
        <input type="checkbox" name="pelis[]" value="ficcion"> ficcion <br>
        <input type="checkbox" name="pelis[]" value="romantica"> romantica <br>
        <input type="submit" value="Aceptar">
    </form>
<br>
    <form method="get" action= "proceso.php">
        <input type="text" name="buscar" placeholder="indica nombre a buscar">
        <input type="submit" value="buscar">
    </form>

</body>
</html>