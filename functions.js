const sagHallo = (name) => {
    return `Herzlichen Wilkommen, ${name}`
}
const getRandomNumber = (kleinerZahl, grosserZahl) => {
    return Math.floor(Math.random() * (grosserZahl - kleinerZahl + 1)) + kleinerZahl
}
module.exports = {
    sagHallo,
    getRandomNumber
}