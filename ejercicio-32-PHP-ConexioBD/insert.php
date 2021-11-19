<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/pulse/bootstrap.min.css" integrity="sha384-L7+YG8QLqGvxQGffJ6utDKFwmGwtLcCjtwvonVZR/Ba2VzhpMwBz51GaXnUsuYbj" crossorigin="anonymous">
</head>
<body>
<form method="post" action="controlador.php">
  <fieldset>
    <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Nombre Zoo</label>
      <div class="col-sm-10">
        <input type="text"  name="zoo">
      </div>
    </div>
    <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Ciudad</label>
      <div class="col-sm-10">
        <input type="text"  name="ciudad">
      </div>
    </div>
    </fieldset>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
</body>
</html>