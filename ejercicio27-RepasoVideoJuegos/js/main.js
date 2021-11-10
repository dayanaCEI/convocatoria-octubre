/*
X  Definir la estructura HTML
-  petición a la API, para pintar los vj cuando carga la pagina
-  funcion Pintar los resultados en el HTML
-  hacer le filtro con el vj, buscado por el usuario
-  volver a llamar a la API y pintar nuevamente los resultados
-  Hacer click en un juego y añadirlo a la cesta de la compra
-  IF validar la existencia del juego en el carrito, si esta lo sacamos
-  Guardar en el localStoarge el listado del carrito así la próxima vez
que cargue la pagina tendrás el carrito lleno si hubiera datos

- Array--> juegos, carrito,
*/
const games = [];
const car = [];
const ulGames = document.querySelector(".juegos");

function paintGames(listGames) {
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
        a.classList.add("btn", "btn-purple");
        a.appendChild(textA);
        divCard.appendChild(a);

    }
}

function getDataFromApi(title) {
    console.log(`https://www.cheapshark.com/api/1.0/games?title=${title}`)
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${title}`)
        .then((response) => response.json())
        .then((info) => {
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
        })
}

//main
getDataFromApi("eternals")