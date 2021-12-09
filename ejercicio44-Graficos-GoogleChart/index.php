<?php
    /*
    1.- Conexion con BD
    2.- Importar o descargar la Libreria (conocerla)
    3.- Escribir el HTML donde vamos a pintar el grafico
    4.- Seleccionar los datos de la tabla, 
    5.- Crear la funcion que permita pintarlos  en el html
    */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   </head>
<body>
    
    <div class="grafico">
        
        <canvas id="bar" width="200" height = "200"></canvas>
        <canvas id="pie" width="200" height = "200"></canvas>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>
    <script src="./js/main.js"></script>

</body>
</html>