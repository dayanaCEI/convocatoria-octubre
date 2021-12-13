<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/darkly/bootstrap.min.css"
        integrity="sha384-nNK9n28pDUDDgIiIqZ/MiyO3F4/9vsMtReZK39klb/MtkZI3/LtjSjlmyVPS3KdN" crossorigin="anonymous">
</head>

<body>
    <div class="container">
        <form method="POST" class="form">
            <input name="oculto" type="hidden" value="1">

            <fieldset>
                <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label mt-4">Nombre</label>
                    <input name="nombre" type="text" class="form-control" aria-describedby="emailHelp"
                        placeholder="indique tu nombre">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label mt-4">Email</label>
                    <input name="email" type="email" class="form-control" aria-describedby="emailHelp"
                        placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
                    <input name="pass" type="password" class="form-control" placeholder="Password">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
                    <select name="rol" class="jsRol">
                        <option value="1"> seleccione </option>
                    </select>
                    <small class="msjRol"></small>
                </div>
                <input type="submit" class="btn btn-primary" value="Registrate">
            </fieldset>
        </form>
    </div>
    <div class="msj">
        <div>
            <script src="./js/main.js"></script>
</body>

</html>