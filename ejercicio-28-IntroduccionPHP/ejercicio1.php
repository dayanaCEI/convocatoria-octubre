<?php
 echo "<h1> Hola Mundo! </h1>";
 echo "<p>hola hola </p>";

 $nombre = "olivia";
 $precio = 150.2;
 $cantidad = 3;

 echo "<p>Hola ". $nombre. "<p>";
 echo "<p>El precio es $precio </p>";
 echo '<p>La cantidad es $cantidad </p>';
 include "success.php";
 include "error.php";
 if($cantidad < 5){
    echo $error;
    echo $precio * $cantidad;
 }else{
    echo $mensaje;
 }

 echo "<br>";
 
 for($i = 1; $i <=10; $i++){
    echo $i;
 }

?>