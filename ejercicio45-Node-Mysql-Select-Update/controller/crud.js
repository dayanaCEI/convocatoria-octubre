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
const selectId = (id) => {
    return new Promise((resolve, reject) => {
        conexion.query("SELECT * FROM productos WHERE id = ?", [id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result[0]);
            }
        })
    })
}
const update = (require, response) => {
    const nomb = require.body.nombre;
    const pre = require.body.precio;
    const desc = require.body.descripcion;
    const id = require.body.id;
    conexion.query("UPDATE productos SET nombre = ?, precio = ?, descripcion = ? WHERE id = ?", [nomb, pre, desc, id], (error, result) => {
        if (error) {
            console.log(error)
        } else {
            response.redirect("/")
        }
    })
}
module.exports = {
    insert: insert,
    select: select,
    selectId: selectId,
    update: update
}