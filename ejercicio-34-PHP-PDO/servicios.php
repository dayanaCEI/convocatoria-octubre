<?php
    session_start();
    include "header.html";

    if(isset($_SESSION["nombre"])){
        echo "<h1>Bienvenido ". $_SESSION["nombre"]. "</h1>";
    }else{
        header("location:index.php");
    }
    
?>
<a href="cerrar.php">Cerrar Sesion</a>

<?php
    include "footer.html";
?>