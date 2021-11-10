/*
X  Definir la estructura HTML
X  petición a la API, para pintar los vj cuando carga la pagina
X  funcion Pintar los resultados en el HTML
X  hacer le filtro con el vj, buscado por el usuario
X  volver a llamar a la API y pintar nuevamente los resultados
X  Hacer click en un juego y añadirlo a la cesta de la compra
x  IF validar la existencia del juego en el carrito, si esta lo sacamos, sino lo metemos
-  Guardar en el localStoarge el listado del carrito así la próxima vez
que cargue la pagina tendrás el carrito lleno si hubiera datos

- Array--> juegos, carrito,
*/
let games = [];
const car = [];
const ulGames = document.querySelector(".juegos");
const btnSearch = document.querySelector(".js-btn");
const input = document.querySelector(".js-input");

function handleClick(ev) {
    ev.preventDefault();
    const inputValue = input.value;
    getDataFromApi(inputValue);
}
btnSearch.addEventListener("click", handleClick)

function paintGames(listGames) {
    ulGames.innerHTML = "";
    for (const element of listGames) {
        const li = document.createElement("li");
        ulGames.appendChild(li);
        li.setAttribute("id", element.id);

        const divCard = document.createElement("div");
        divCard.classList.add("card");
        divCard.style.width = "14rem";
        li.appendChild(divCard);

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = element.img;
        divCard.appendChild(img);

        const title = document.createElement("h5");
        const textNode = document.createTextNode(element.title);
        title.appendChild(textNode);
        divCard.appendChild(title);

        const price = document.createElement("p");
        const textPrice = document.createTextNode(element.price);
        price.appendChild(textPrice);
        divCard.appendChild(price)

        const a = document.createElement("a");
        const textA = document.createTextNode("Añadir al carrito");
        a.classList.add("btn", "btn-purple", "js-addCar");
        a.setAttribute("id", element.id);
        a.appendChild(textA);
        divCard.appendChild(a);
    }
}
function handleCar(ev) {
    const idCliked = ev.currentTarget.id
    const foundGame = games.find((gam) => {
        return gam.id === idCliked
    });

    const foundCar = car.findIndex((gam) => {
        return gam.id === idCliked
    })
    if (foundCar === -1) {
        car.push(foundGame);
    }
    else {
        car.splice(foundCar, 1)
    }
    localStorage.setItem("carrrito", JSON.stringify(car))
}
function listenA() {
    const listA = document.querySelectorAll(".js-addCar");
    for (const a of listA) {
        a.addEventListener("click", handleCar);
    }
}
function getDataFromApi(title) {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${title}`)
        .then((response) => response.json())
        .then((info) => {
            games = [];
            info.forEach(element => {
                const objectGame = {
                    id: element.gameID,
                    title: element.external,
                    price: element.cheapest,
                    img: element.thumb
                };
                games.push(objectGame);
            })
            paintGames(games);
            listenA();
        })
}



//main
getDataFromApi("eternals");

