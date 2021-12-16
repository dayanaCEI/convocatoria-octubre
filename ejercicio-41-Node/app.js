console.log("hola mundo node∫");
const { listMovies, print } = require("./movies.js");
const { random } = require("./numeros.js");

const randomNumber = random(listMovies.length - 1);
console.log(randomNumber);
console.log(listMovies[randomNumber]);
//print();
var cowsay = require("cowsay");
console.log(cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U "
}));