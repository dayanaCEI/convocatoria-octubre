<?php
    include "consultas.php";
    $con = new Consultas();
    $listadoMun = $con->selectMunicipio($_POST["idp"]);

    while($mun = mysqli_fetch_array($listadoMun)){ ?>
        <option value="<?php echo $mun["idMunicipio"]?>">
            <?php echo $mun["nombreMun"];  ?>
        </option>
<?php
    }
?>