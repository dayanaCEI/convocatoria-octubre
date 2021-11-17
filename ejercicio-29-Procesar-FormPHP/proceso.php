<?php
    echo "he recibido el form <br>";
   //var_dump($_POST);
   //isset, empty
   if( isset($_POST) &&  !empty($_POST)){
        echo $_POST["nombre"]."<br>";
        echo $_POST["apellido"]."<br>";
        echo $_POST["edad"]."<br>";
        echo $_POST["email"]."<br>";
        echo $_POST["pais"]."<br>";
        echo $_POST["estado"]."<br>";

        $longitud = count($_POST["pelis"]);
        echo "la longitud de las pelis es $longitud <br>";
        $arrayPelis = $_POST["pelis"];
        for($i= 0; $i < $longitud; $i++){
                echo $arrayPelis[$i]. " ";

        }
    } 
    else{
        echo $_GET["buscar"];
    }
   /*  FORMULARIO METODO GET */ 

   
?>