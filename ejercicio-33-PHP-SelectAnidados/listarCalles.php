<?php
    include "consultas.php";
    $consulta = new Consultas();
    $listadoCalles = $consulta->selectCalles($_POST["idMunicipio"]);?>
    <option value="">Selecione</option>
    <?php
    while($row = mysqli_fetch_array($listadoCalles)){ ?>
        <option value= "<?php echo $row["idCalle"] ?>">
            <?php echo $row["nombreCalle"]?>
        </option>
  <?php } ?>