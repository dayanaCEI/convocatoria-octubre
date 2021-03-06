const { response } = require("express");
const express = require("express");
const server = express();

//especificar  el  motor  de plantillas, html dinamicos
server.set("view engine", "ejs");
server.set("views", __dirname + "/views");

//configuracion servidor estatico, js, css
server.use(express.static(__dirname + "/public"));

server.use(express.urlencoded({ extended: false }))

// incluyo el crud de la BD
const crud = require("./controller/crud");

server.get("/", (req, resp) => {
    crud.select()
        .then((listado) => {
            resp.render("index", { titulo: "pagina principal", subtitulo: "este es un titulo secundario", listado: listado });
        })
})

server.get("/servicios", (req, resp) => {
    resp.render("servicios");
})

server.get("/producto", (req, resp) => {
    resp.render("producto", {
        nombre: "Cono de trafico",
        precio: 100,
        img: "cone.jpeg"
    })
})
server.post("/insert", crud.insert)

server.get("/crearproducto", (req, resp) => {
    resp.render("crearproducto");
})


server.use((req, resp) => {
    resp.status(404).render("404")
})

const puerto = 3000;
server.listen(puerto, () => {
    console.log("estoy escuchando al servidor")
})
