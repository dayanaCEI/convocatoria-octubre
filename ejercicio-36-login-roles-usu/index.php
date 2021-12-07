<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="container">
        <?php
            session_start();
            if(!isset($_SESSION["rol"])){
                echo '<a href ="./login.php"> Login </a> <br>';
                echo '<a href ="./registro.php"> Registrate </a>';
            }
            else{
                if($_SESSION["rol"] == "usuario"){
                    include "./php/menuUsuario.html";
                }elseif ($_SESSION["rol"] == "consultor"){
                     include "./php/menuConsultor.html";
                }else{
                    include "./php/menuAdmin.html";
                }
            }
            
        ?>

    </div>
</body>

</html>