const getRandomNumber = () => {
    var kleinerZahl = parseInt(document.getElementById('kleiner').value)
    var grosserZahl = parseInt(document.getElementById('grosser').value)

    if ((grosserZahl >> kleinerZahl) && !(isNaN(kleinerZahl) || isNaN(grosserZahl))) {
        const number = Math.floor(((Math.random() * (grosserZahl - kleinerZahl + 1))) + kleinerZahl)
        console.log(number)
        let myNumber
        let isWinner
        var counter = 0
        while (myNumber !== number) {
            myNumber = parseInt(prompt('Zgadniej, jaka to liczba'))
            isWinner = false
            if (isNaN(myNumber)) {
                myNumber = number
            } else if (myNumber == number) {
                isWinner = true
            }
            counter++
        }
        if (isWinner == true) {
            alert(`Brawo, ta liczba to ${number}. \n Udało Ci się zgadnąć za ${counter} razem.`)
        } else {
            alert(`Chodziło o liczbę ${number}. \n Następnym razem uda Ci się zgadnąć.`)
        }
    } else if (kleinerZahl == grosserZahl) {
        alert(`Jako mniejszą liczbę wpisano ${kleinerZahl}, a jako większą  ${grosserZahl}. \n Wpisane liczby są sobie równe. \n Tak nie może być. Proszę uzupełnić je ponownie.`)
        document.getElementById('kleiner').value = ""
        document.getElementById('grosser').value = ""
    } else if (kleinerZahl >> grosserZahl) {
        alert(`Jako mniejszą liczbę wpisano ${kleinerZahl}, a jako większą  ${grosserZahl}. \n A przecież ${kleinerZahl} jest większa niż ${grosserZahl}. \n Tak nie może być. Proszę uzupełnić je ponownie.`)
        document.getElementById('kleiner').value = ""
        document.getElementById('grosser').value = ""
    } else if (isNaN(kleinerZahl) || isNaN(grosserZahl)) {
        alert(`Co namjmniej jedna z wpisanych liczb jest pusta.`)
    }
}

document.getElementById("startGame").addEventListener("click", getRandomNumber)

module.exports = {
    getRandomNumber
}