<?php

class Conexion{
    public function conexion(){
        try{   
            $bd = "SPA";
            $user = "root";
            $pass=  "";
            $host = "localhost";
            $conexion = new PDO("mysql:host=$host;dbname=$bd",$user,$pass);
            return $conexion;
        }
        catch(PDOException $e){
            echo $e;
        }
    }
}