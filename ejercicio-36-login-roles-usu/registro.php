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
        <form method="POST" action="./php/controller.php">
            <fieldset>
                <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label mt-4">Nombre</label>
                    <input name="nombre" type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="indique tu nombre">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label mt-4">Email</label>
                    <input name="email" type="email" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
                    <input name="pass" type="password" class="form-control" id="exampleInputPassword1"
                        placeholder="Password">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
                    <select>
                        <option value="usuario">Usuario</option>
                        <option value="admin">admin</option>
                        <option value="consultor">consultor</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </fieldset>
        </form>
    </div>
</body>

</html>