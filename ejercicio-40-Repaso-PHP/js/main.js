console.log("ready :D")

$(".boton").on("click", function () {
    //enviar datos a el servidor
    let info = $(".nombre").val();
    //Usando post
    /*$.post("./php/proceso.php", { data: info }, function (respuesta) {
        console.log(respuesta);
        $(".msj").html(respuesta);
    });*/
    $.ajax({
        url: "./php/proceso.php",
        method: "POST",
        data: { info: info, apellido: "romero" },
        success: function (respuesta) {
            let recetas = JSON.parse(respuesta);
            console.log(recetas);
            $(".msj").html(recetas.nombreReceta);
        },
        error: function (error) {
            console.log(error);
        }
    });
    //Solo peticion sin enviar datos
    //$.get();
})