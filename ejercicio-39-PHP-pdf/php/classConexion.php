<?php
    class Conexion extends PDO{
        private $type = "mysql";
        private $host = "localhost";
        private $db = "recetas";
        private $user = "root";
        private $pass = "";
        public function __construct(){
            
            try{
                parent::__construct("{$this->type}:dbname={$this->db};host={$this->host};",$this->user,$this->pass);
            }
            catch(PDOException $e){
                echo "no se ha conectado". $e->getMessage();
            }
        }
    }

?>