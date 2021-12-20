const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

const puerto = 3500;

server.listen(puerto, () => {
    console.log("estoy escuchando al servidor");
})
const staticServer = "./public";
server.use(express.static(staticServer));

server.post("/person", (req, resp) => {
    console.log(req.body.name);
    resp.json("hola")
})




//GET, POST, PUT, DELETE
/*server.get("/", (require, respuesta) => {
    respuesta.json({
        nombre: "juan", apellido: "ruiz"
    });
})
*/


