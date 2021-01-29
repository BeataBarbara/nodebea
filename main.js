const express = require("express");
const port = 3000;
const app = express();
var functions = require('./functions');
var rod = ('./rod')
var wilkommen = functions.sagHallo('Beata')
var number = functions.getRandomNumber(1, 50)
var name = 'Beata'
var page = `<h1>Hallo Welt</h1> <hr>Tu ${name} <hr><h2> Oto moja strona. </h2> <h3> ${wilkommen} </h3> <h3> Twój szczęśliwy numer to ${number}</h3><hr>
<p><a href="http://localhost:3000/rod">ROD</a></p><hr>`

app.set("view engine", 'hbs')

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/rod', function(req, res) {
    res.render('dzialki')
})

app.listen(port, (err) => {
    if (err) {
        return console.log("coś poszło nie tak...:", err)
    }
    console.log("serwer działa na porcie", port)
})

//app.listen(port)
console.log('http://localhost:3000/')