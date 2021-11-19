<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/pulse/bootstrap.min.css" integrity="sha384-L7+YG8QLqGvxQGffJ6utDKFwmGwtLcCjtwvonVZR/Ba2VzhpMwBz51GaXnUsuYbj" crossorigin="anonymous">

</head>
<body>
<a href= "insert.php">Registrar Zoo </a>

<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nombre</th>
      <th scope="col">Ciudad</th>
    </tr>
  </thead>
  <tbody>
     <?php
        include "database.php";
        $zoo = new Database();
        $listadoZoo = $zoo->selectZoo();
        while($fila = mysqli_fetch_object($listadoZoo)){ ?>
            <tr class="table-active">
                <th scope="row"><?php echo  $fila->idZoo; ?></th>
                <td> <?php echo $fila->nombreZoo; ?></td>
                <td> <?php echo $fila->ciudad; ?></td>
            </tr>
       <?php } ?> 
   
  </tbody>
</table>
</body>
</html>