<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Editar</h1>
    <?php
        //echo $_GET["id"];
        include "database.php";
        $zoo = new Database();
        $result = $zoo->selectZooId($_GET["id"]);
        $selectedZoo = mysqli_fetch_object($result);
        //echo $_POST;
        if (isset($_POST["zoo"])){
          $zoo->updateZoo($_POST["zoo"],$_POST["ciudad"],$_POST["id"]);
        }
    ?>


<form method="post">
  <fieldset>
  <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">ID</label>
      <div class="col-sm-10">
        <input type="text"  name="id" readonly value = "<?php echo $selectedZoo->idZoo;?>">
      </div>
    </div>
    <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Nombre Zoo</label>
      <div class="col-sm-10">
        <input type="text"  name="zoo" value= "<?php echo $selectedZoo->nombreZoo ?>">
      </div>
    </div>
    <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Ciudad</label>
      <div class="col-sm-10">
        <input type="text"  name="ciudad" value= "<?php echo $selectedZoo->ciudad ?>">
      </div>
    </div>
    </fieldset>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>

</body>
</html>