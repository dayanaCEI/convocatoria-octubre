const mascota = {
    nombre: "Luna",
    edad: 3,
    raza: "cocker",
    direccion: {
        ciudad: "madrid",
        CP: 28051
    },
    hijos: ["lucy", "pepe", "sasha"],
    imprimir: function () {
        console.log("mi nombre es " + this.nombre);
        console.log("mi ciudad es " + this.direccion.ciudad)
    }
}
console.log(mascota.raza);
mascota.imprimir();
