<?php
    include "header.html";
?>

<h1>AGREGAR CITA</h1>
<form method="post" class="form">
    <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Usuario</label>
        <div class="col-sm-10">
            <select class="form-control" id="user">
            </select>
        </div>
    </div>
    <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Servicio</label>
        <div class="col-sm-10">
            <select class="form-control" id="serv">
            </select>
        </div>
    </div>
    <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Fecha</label>
        <div class="col-sm-10">
            <input type="date" class="form-control" id="fecha">
        </div>
    </div>
    <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Hora</label>
        <div class="col-sm-10">
            <input type="time" class="form-control" id="hora">
        </div>
    </div>
    <div class="mb-3 row">
        <div class="col-sm-10">
            <input type="submit" class="btn btn-success" id="btn-cita">
        </div>
    </div>
</form>

<div class="mb-3 row" id="resp">

</div>

<?php  
    include "footer.html";
?>
<script src="./js/cita.js"></script>