<?php
class Cita{
    public function insertCita($datos, $conex){
        $sql = "INSERT INTO cita (fkUsuario, fkServicio, fecha, hora) VALUE (:fkU,:fkS,:fecha, :hora)"; 
        $insert = $conex->prepare($sql);
        if($insert->execute(array(":fkU"=>$datos[0],
                        ":fkS" => $datos[1],
                        ":fecha" => $datos[2],
                        ":hora"=> $datos[3]))
        ) {
            return "registrado con exito";
        }else{
            return "Hubo error";
        }
    }
}