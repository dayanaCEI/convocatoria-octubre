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

<form method="post" class="form" enctype="multipart/form-data" action="./php/controllerService.php">
    <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Nombre</label>
        <div class="col-sm-10">
            <input type="text" name="name" class="form-control" id="name">
        </div>
    </div>
    <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Descripcion</label>
        <div class="col-sm-10">
            <input type="text" name="desc" class="form-control" id="desc">
        </div>
    </div>
    <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Precio</label>
        <div class="col-sm-10">
            <input type="number" name="precio" class="form-control" id="precio">
        </div>
    </div>

    <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Imagen</label>
        <div class="col-sm-10">
            <input type="file" name="img" class="form-control" id="img">
        </div>
    </div>

    <div class="mb-3 row">
        <div class="col-sm-10">
            <input type="submit" class="btn btn-success" id="btn-services">
        </div>
    </div>
</form>

<?php
    include "footer.html";
?>