const conexion = require("../database/db");

const insert = (req, resp) => {
    console.log(req.body)
    const nombrePro = req.body.nombre;
    const precioProd = req.body.precio;
    const descripcionProd = req.body.descripcion;

    conexion.query("INSERT INTO productos SET ?", { nombre: nombrePro, precio: precioProd, descripcion: descripcionProd }, (error, resultado) => {
        if (error) {
            console.log("error" + error);

        } else {
            resp.redirect("/")
        }
    });
}
const select = (req, resp) => {
    return new Promise((resolve, reject) => {
        conexion.query("SELECT id,nombre, precio, descripcion FROM productos", (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}
const selectId = () => {

}
const update = () => {

}
module.exports = {
    insert: insert,
    select: select
}