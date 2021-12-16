function getRandom(max) {
    return Math.round(Math.random() * max);
}
module.exports = {
    random: getRandom
}