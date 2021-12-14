function crearGrafico(type, labels, data, title, canvas) {
    const ctx = document.getElementById(canvas).getContext('2d');
    const myChart = new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                label: title,
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
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
function getData(type, canvas) {
    $.get("./php/controller.php", function (respuesta) {
        let listado = JSON.parse(respuesta);
        let labels = [];
        for (const product of listado) {
            labels.push(product.nombre);
        }
        let data = listado.map((product) => { return parseInt(product.precio) });
        let title = "Stock en mi tienda online";
        crearGrafico(type, labels, data, title, canvas);
    });
}

$(".btn-tarta").on("click", function () {
    getData("pie", "myChart");
})
$(".btn-barra").on("click", function () {
    getData("bar", "myChart2");
})