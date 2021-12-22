const mysql = require("mysql");
const conex = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "producto"
});
conex.connect((err) => {
    if (!err) {
        console.log("se conecto");
    } else {
        console.log("no se ha conectado");
    }
});
module.exports = conex;