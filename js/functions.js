const sagHallo = () => {
    let name = prompt('Podaj swoje imię')
    alert(`Herzlichen wilkommen, ${name}`)
}

const getRandomNumber = () => {
    let kleinerZahl = prompt('Podaj dolny zakres')
    let grosserZahl = prompt('Podaj górny zakres')
    const number = Math.floor(Math.random() * (grosserZahl - kleinerZahl + 1)) + kleinerZahl
    alert(number)
}

const showAlert = () => {
    let word = prompt('joł, joł!')
    alert(`Trolololo ${word}`)
}

document.getElementById("Wilkommen").addEventListener("click", sagHallo)
document.getElementById("action").addEventListener("click", showAlert)
document.getElementById("startGame").addEventListener("click", getRandomNumber)
document.getElementById("alert").addEventListener("click", showAlert)


module.exports = {
    sagHallo,
    getRandomNumber,
    showAlert,
}