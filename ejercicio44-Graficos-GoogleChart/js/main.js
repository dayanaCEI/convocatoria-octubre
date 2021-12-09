$(document).ready(function () {
    function crearGrafico(titulos, data, tituloGrafico, type, container) {
        var chart = new Chart(container, {
            type: type,
            data: {
                labels: titulos,
                datasets: [{
                    label: tituloGrafico,
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    $.ajax({
        url: "./controller.php",
        type: "POST",
        /*success: function (resp) {
            var datos = JSON.parse(resp)
            console.log(datos);
        }*/
    }).done(function (resp) {
        var datos = JSON.parse(resp);
        console.log(datos);
        var titulo = datos.map((item) => { return item.nombre });
        var data = datos.map((item) => { return parseInt(item.stock) });
        //crearGrafico(titulo, data, "stock de producto", "bar", $("#bar"));
    })
    var labels = ["Terror", "suspenso", "comedia"];
    var numbers = [50, 150, 600];
    crearGrafico(labels, numbers, "peliculas", "pie", $("#pie"));

})

