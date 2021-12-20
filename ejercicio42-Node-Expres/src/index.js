// configuracion servidor
const express = require("express");
const cors = require("cors");
const server = express();
server.use(cors());
server.use(express.json())
const port = 3500;

server.listen(port, () => {
    console.log("listen servidor");
});

const staticUrl = "./public";
server.use(express.static(staticUrl));

//get, post
/*server.get("/", (req, resp) => {
    resp.json("holacomo estas");
});*/
server.get("/home", (req, resp) => {
    const respuesta = [{ name: "maria" }, { name: "luis" }];
    resp.json(respuesta);
});

server.post("/user", (req, resp) => {
    console.log(req.body.userName);
    //recoger estos datos y hacer un insert en la BD
    //Devuelvo si se ha insertado o no
    resp.json("El usuario" + req.body.userName + "se ha añadido correctamente");
})


