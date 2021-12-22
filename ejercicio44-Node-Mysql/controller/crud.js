const conexion = require("../database/db");

const insert = (req, resp) => {
    const nombrePro = "Planta de navidad";
    const precioProd = 5;
    const descripcionProd = "planta roja navideña";

    conexion.query("INSERT INTO productos SET ?", { nombre: nombrePro, precio: precioProd, descripcion: descripcionProd }, (error, resultado) => {
        console.log(resultado);
    });
}
/*const select = () => {
}
*/
module.exports = {
    insert: insert
}