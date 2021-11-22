<?php
class Database{
    private $db;
    private $host;
    private $user;
    private $pass;
    private $con;

    public function __construct(){
        $this->db = "zoologico";
        $this->host = "localhost";
        $this->user = "root";
        $this->pass = ""; 
        $this->con = mysqli_connect($this->host,$this->user,$this->pass,$this->db);
        if(mysqli_connect_error()){
            echo "error de conexion ". mysqli_connect_errno();
        }
       /* else{
            echo " conexion correcta";
        }*/
    }
    public function insertZoo($nombre,$ciudad){
        $sql = "INSERT INTO zoo (nombreZoo, ciudad) VALUES 
        ('$nombre','$ciudad')";
        $result = mysqli_query($this->con, $sql); 
    }
    public function selectZoo(){
        $sql= "SELECT idZoo, nombreZoo, ciudad FROM zoo";
        $result = mysqli_query($this->con,$sql);
        return $result;
    }
    public function selectZooId($id){
        $sql = "SELECT idZoo, nombreZoo, ciudad FROM zoo WHERE  idZoo = $id";
        $result = mysqli_query($this->con, $sql);

        if(mysqli_error($this->con)){
           echo  mysqli_error($this->con);
        }
        return $result;
    }

    public function updateZoo($nom,$city,$id){
        $sqlUpdate = "UPDATE zoo SET nombreZoo = '$nom', ciudad = '$city' WHERE idZoo = $id";
        mysqli_query($this->con,$sqlUpdate);

        if(mysqli_error($this->con)){
            echo  mysqli_error($this->con);
        }
    }

}

?>