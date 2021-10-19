/*
form -> precio producto y la cantidad a comprar
tienda donde vamos a comprar X cantidad de productos
si cantidad a comprar esta entre 12 y 24 desc 10%
si cantidad a comprar esta entre 24 y 100 desc 15%
si cantidad a comprar mayor  a 100  desc 30%
generar la factura y lo pintaremos en el HTML en un P
desglosado
FUNCIONES --> descuento, total, pintarHtml
*/
const precio = parseInt(document.querySelector("#precio").value);
const cantidad = parseInt(document.querySelector("#cantidad").value);

const descuento = (cant, pre) => {
    let calcDesc = 0;
    if (cant >= 12 && cant <= 24) {
        calcDesc = (pre * cant) * 0.10;
    } else if (cant > 24 && cant <= 100) {
        calcDesc = (pre * cant) * 0.15;
    } else if (cant > 100) {
        calcDesc = (pre * cant) * 0.30;
    }
    return calcDesc;
}
const total = function (cant, pre) {
    let totalPagar = cant * pre;
    return totalPagar;
}
function pintarHtml(cant, pre) {
    const parrafo = document.querySelector(".texto");
    parrafo.innerHTML = ` EL total a pagar es ${total(cant, pre) - descuento(cant, pre)}`;
}

pintarHtml(cantidad, precio);

