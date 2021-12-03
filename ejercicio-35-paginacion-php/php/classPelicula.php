<?php
include "classConexion.php";
class Pelicula{
    public $conex;
    public $totalPagina;
    public $nPorPagina;
    public $indice;
    public $pagActual;

    public function __construct(){
        $this->indice = 0;
        $this->pagActual = 1;
        $this->nPorPagina = 2;
        $this->conex = new Conexion();
        $this->calcularPagina();
    }
    public function selectPeliculas(){
        $select = $this->conex->prepare("SELECT id, nombre, imagen FROM  pelicula LIMIT $this->indice, $this->nPorPagina");
        $select->execute();
        $listado = $select->fetchAll();
        foreach ($listado as $peli) {
            include "peli.php";
        }
    }
    public function calcularPagina(){
        //max, min, count, sum
        $count =  $this->conex->query("SELECT COUNT(*) as total FROM pelicula");
        // obtengo el resultado de la consulta en forma de objeto
        $numResultado = $count->fetch(PDO::FETCH_OBJ)->total;
        $this->totalPagina = ceil($numResultado/$this->nPorPagina);

        if(isset($_GET["pag"])){
            $this->pagActual = $_GET["pag"];
            $this->indice = ($_GET["pag"] - 1) * $this->nPorPagina;
        }
    }
    public  function mostrarPaginas(){
        echo '<div> <ul>';
        for($i = 1; $i <= $this->totalPagina; $i++){
            /*
            if($this->pagActual == $i){
                $class =  ' class="active"';
            }else{
                $class = '';
            }
            echo '<li><a '.$class.' href="?pag='.$i.'">'. $i .'</a></li>';

            */
            echo '<li><a';
            if($this->pagActual == $i){
                echo ' class="active"';
            }
            echo ' href="?pag='.$i.'">'. $i .'</a></li>';
        }
        echo '</ul> </div>';
    }
    
}

?>