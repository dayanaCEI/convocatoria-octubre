<?php
class Conexion{
    private $db;
    private $host;
    private $user;
    private $pass;
    public $conex;
    
    public function __construct(){
        $this->db = "Servicios";
        $this->host = "localhost";
        $this->user= "root";
        $this->pass = "";
        $this->conex = mysqli_connect($this->host,$this->user,$this->pass,$this->db);
        if(mysqli_connect_error()){
            echo "error de conexion".mysqli_connect_error();
        }else{
            //echo "se ha conectado correctamente";
        }
    }
}


?>