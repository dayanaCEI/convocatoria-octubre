const movies = ["peli1", "peli2", "peli3"];

function paintMovies() {
    movies.forEach(m => {
        console.log(m);
    })
}

module.exports = {
    listMovies: movies,
    print: paintMovies
}