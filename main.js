var http = require('http');
var name = 'Beata'
var page = `<h1>Hallo Welt</h1> <hr>Tu ${name} <hr><h2> Oto moja strona. </h2>`
http.createServer(function handler(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(page);
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');