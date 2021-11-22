<?php
    //echo $_POST["zoo"]. " ".$_POST["ciudad"]; 
    include "database.php";
    $nom = $_POST["zoo"];
    $ciu = $_POST["ciudad"];
    $db = new Database();
    
    $db->insertZoo($nom,$ciu);