<?php
    include "consultas.php";
    $consult = new Consultas();
    $id = $_POST["idP"];
    $listado = $consult->selectProvincia($id);

    while($object = mysqli_fetch_object($listado)){ ?>
        <option value="<?php echo $object->idProvincia; ?>">
            <?php echo $object->nombrePro; ?>
        </option>
    <?php } ?>