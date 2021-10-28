//DOM  document object model
const ul = document.querySelector(".lista");

//ul.innerHTML = '<li> <img src=""> <p>texto</p> </li> '
const liElement = document.createElement("li");
ul.appendChild(liElement);

const texto = document.createTextNode("Nuevo li");
liElement.appendChild(texto);

const nombres = ["maria", "sonia", "alberto", "ayoub", "michael", "pedro", "beatriz"];
nombres.forEach((nom, i) => {
    const li = document.createElement("li");
    const text = document.createTextNode(nom);
    li.setAttribute("id", i);
    li.setAttribute("class", "classCSS");
    li.appendChild(text);
    ul.appendChild(li);
})

const citys = document.querySelector(".citys");
const ciudades = ["madrid", "murcia", "alicante"];

ciudades.forEach((ciud, i) => {
    const option = document.createElement("option");
    option.setAttribute("value", ciud);
    const texto = document.createTextNode(ciud);
    option.appendChild(texto);
    citys.appendChild(option)
});
//escuchamos el evento change sobre el select
const img = document.querySelector(".img")
function handlesCitys() {
    const ciudad = citys.value;
    const url = `../images/${ciudad}.jpeg`;
    img.setAttribute("src", url);
    // tarea terminar los dos casos que faltan,
    /*if (ciudad === "madrid") {
        img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lorenzo_Quir%C3%B3s_-_Ornato_de_Plaza_Mayor_con_motivo_de_la_entrada_de_Carlos_III_en_Madrid.jpg/440px-Lorenzo_Quir%C3%B3s_-_Ornato_de_Plaza_Mayor_con_motivo_de_la_entrada_de_Carlos_III_en_Madrid.jpg")
    } else if (ciudad === "murcia") {
        img.setAttribute("src", "https://viajes.nationalgeographic.com.es/medio/2021/03/31/bellezas-rurales_60f20f92_1254x836.jpg")
    } else if (ciudad === "alicante") {
        img.setAttribute("src", "https://www.residenciadeestudiantes.org/uploads/paginas/vacaciones-alicante.gif")
    }
    */
}
citys.addEventListener("change", handlesCitys)
//change, click