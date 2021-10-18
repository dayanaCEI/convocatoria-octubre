/*
Crea un div que contenga un título "NOTIFICACIÓN" y un texto "Mensaje por defecto".

Crea también tres clases:
La primera,
.succes, aplicará un borde verde oscuro, un fondo verde claro y el color de fuente verde oscuroLa segunda,
.error, igual pero sustituyendo el verde por rojo
.warning, lo mismo pero usando el color amarillo

Usando JavaScript,
Haremos que:
Si contiene la clase js-alerta, el título sea 'AVISO' y el texto sea: 'Tenga cuidado', añadir la clase warning
Si contiene la clase js-error, el título sea 'ERROR' y el texto sea: 'Ha surgido un error' añadir la clase error
Si contiene la clase js-exito, el título sea 'CORRECTO' y el texto sea: 'Los datos son correctos' añadir la clase success

Cambia la clase en HTML y comprueba que el código de JavaScript funciona.
*/
//elemt.classList.add("claseAñadir")
//elemt.classList.contains("js-alerta")

const titulo = document.querySelector(".titulo");
const texto = document.querySelector(".texto");
const contenedor = document.querySelector(".container");

if (contenedor.classList.contains("js-alerta")) {
    titulo.innerHTML = "AVISO";
    texto.innerHTML = "Tenga cuidado";
    contenedor.classList.add("warning");
}
else if (contenedor.classList.contains("js-error")) {
    titulo.innerHTML = "ERROR";
    texto.innerHTML = "Ha ocurrido un error";
    contenedor.classList.add("error");
}
else if (contenedor.classList.contains("js-exito")) {
    titulo.innerHTML = "EXITO";
    texto.innerHTML = "Los datos son correctos";
    contenedor.classList.add("success")
}
else {
    contenedor.classList.add("original");
}

