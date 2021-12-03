<?php
 $activeMenu1 = "";
 $activeMenu2 = "";
 $activeMenu3 = "";
if(isset( $_GET["p"])){
    if( $_GET["p"] == 1 ){
        $activeMenu1 = "active-menu";    
    }else if($_GET["p"] == 2){
        $activeMenu2 = "active-menu";   
    }else{
        $activeMenu3 = "active-menu";   
    }
}
?>
<header>
    <nav>
        <ul>
            <li>
                <a class="link <?php echo $activeMenu1; ?>" href="nosotros.php?p=1">Nosotros</a>
            </li>
            <li>
                <a class="link <?php echo $activeMenu2; ?>" href="servicio.php?p=2">Servicios</a>
            </li>
            <li>
                <a class="link <?php echo $activeMenu3; ?>" href="quienes.php?p=3">Quienes</a>
            </li>
        </ul>
    </nav>
</header>