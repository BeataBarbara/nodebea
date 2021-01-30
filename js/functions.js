// const prompt = require('prompt-sync')({ sigint: true });
const sagHallo = () => {
    var name = prompt('Podaj swoje imię')
    alert(`Herzlichen Wilkommen, ${name}`)
}
const getRandomNumber = (kleinerZahl, grosserZahl) => {
    return Math.floor(Math.random() * (grosserZahl - kleinerZahl + 1)) + kleinerZahl
}

const showAlert = () => {
    let word = prompt('joł, joł!')
    alert(`Trolololo ${word}`)
}

document.getElementById("Wilkommen").addEventListener("click", sagHallo)
document.getElementById("action").addEventListener("click", showAlert)

module.exports = {
    sagHallo,
    getRandomNumber,
    showAlert,
}