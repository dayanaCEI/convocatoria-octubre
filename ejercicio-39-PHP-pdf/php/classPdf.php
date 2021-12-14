<?php

    include "../fpdf/fpdf.php";
    
    class Pdf extends FPDF{
        
        function Header(){
            $this->Setfont("Times", "I",16);
            $this->Cell(0,10,"esta es el header de la pagina",1,0,"C");
            $this->Ln(5);
        }
        function Footer(){
            $this->Setfont("Helvetica","",10);
            $this->SetY(-20);
            $this->Cell(0,10,"pagina ".$this-> PageNo(),0,0,"R");
        }
        
        function createTable($data,$header){
            $this->Setfont("Times", "B",12);
            $this->SetY(30);

            foreach($header as $column){
                $this->SetTextColor(150,150,80);
                $this->Cell(45,7,$column,1);
            }
            $this->Ln();
            
            foreach($data as $row){
                foreach($row as $cellData){
                    $this->SetTextColor(150,150,150);
                    $this->Cell(45,7,$cellData,1);
                }
                $this->Ln();
            }
        }
    }
?>