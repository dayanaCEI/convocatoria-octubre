<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/pulse/bootstrap.min.css" integrity="sha384-L7+YG8QLqGvxQGffJ6utDKFwmGwtLcCjtwvonVZR/Ba2VzhpMwBz51GaXnUsuYbj" crossorigin="anonymous">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

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
                <td> 
                  <!--<a href="modificar.php?id=<?php echo $fila->idZoo;?>&zoo=<?php echo $fila->nombreZoo;?>&ciudad=<?php echo $fila->ciudad;?>"> Editar </a>-->
                  <a href="modificar.php?id=<?php echo $fila->idZoo;?>"> 
                    <i class="fas fa-pencil-alt"></i> 
                  </a>
                  <a href="eliminar.php?id=<?php echo $fila->idZoo;?>"> 
                    <i class="fas fa-trash-alt"></i> 
                  </a>
                </td>

            </tr>
       <?php } ?> 
  </tbody>
</table>
</body>
</html>