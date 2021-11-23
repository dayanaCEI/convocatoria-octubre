<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="./js/main.js"></script>
</head>
<body>
    <?php
        include "consultas.php";
        $consulta = new Consultas();
    ?>
    <form action="">
        <select name="pais" id="pais">
            <option>Seleccione </option>
            <?php
                $listadoPais = $consulta->selectPais();
                while($object = mysqli_fetch_object($listadoPais)){ ?>
                    <option value="<?php echo $object->idPais;?>"> 
                        <?php echo $object->nombrePais;?>
                    </option>
                
            <?php } ?>
        </select>

        <select name="provincia" id="provincia">
            
        </select>
        
        <select name="municipio" id="municipio">
        </select>

        <select name="calle" id="calle">
        </select>

    </form>
</body>
</html>