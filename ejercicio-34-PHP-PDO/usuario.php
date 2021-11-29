<?php
    include "header.html";
?>

<h1>Estoy en usuarios</h1>
<form method="post" class="form">
    <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Nombre</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="name">
        </div>
    </div>
    <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="email">
        </div>
    </div>
    <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
            <input type="password" class="form-control" id="pass">
        </div>
    </div>
    <div class="mb-3 row">
        <div class="col-sm-10">
            <input type="submit" class="btn btn-success" id="btn">
        </div>
    </div>
</form>
<?php   
    include "footer.html";
?>