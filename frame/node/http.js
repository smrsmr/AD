//http

/*
var http = require('http');
var server = http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello from out application 3000')
})
server.listen(3000,'127.0.0.1');
console.log('Server started on location port 3000')*/
//响应JSON
/*var http = require('http');
var server = http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'application/json'});
    let obj = {
        name:'smr',
        age: '男',
        num: 22
    }
    response.end(JSON.stringify(obj))
})
server.listen(3000,'127.0.0.1');
console.log('Server started on location port 3000')*/
//响应html
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text/html'});
    var myReadStrem = fs.createReadStream(__dirname+'/index.html');
    myReadStrem.pipe(response)
})
server.listen(3000,'127.0.0.1');
console.log('Server started on location port 3000')
