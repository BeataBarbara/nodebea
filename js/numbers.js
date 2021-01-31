const getRandomNumber = () => {
    let kleinerZahl = document.getElementById('kleiner').value
    let grosserZahl = document.getElementById('grosser').value
    const number = Math.floor((Math.random() * (grosserZahl - kleinerZahl + 1)) + kleinerZahl) / 10 * 10
    console.log(number)
    let myNumber
    let isWinner
    while (myNumber !== number) {
        myNumber = parseInt(prompt('Zgadniej, jaka to liczba'))
        console.log(myNumber)
        if (isNaN(myNumber)) {
            isWinner = false
            myNumber = number
        } else if (myNumber !== number) {
            isWinner = true
        }
    }
    if (isWinner == true) {
        alert(`Brawo, ta liczba to ${number}`)
    } else {
        alert(`Chodziło o liczbę ${number}. \n Następnym razem uda Ci się zgadnąć.`)
    }
}

document.getElementById("startGame").addEventListener("click", getRandomNumber)

module.exports = {
    getRandomNumber
}