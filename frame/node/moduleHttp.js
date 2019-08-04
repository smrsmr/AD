var http = require('http');
var fs = require('fs');
function starServer() {
    var server = http.createServer(function (request,response) {
        response.writeHead(200,{'Content-Type':'text/html'});
        var myReadStrem = fs.createReadStream(__dirname+'/index.html');
        myReadStrem.pipe(response)
    })
    server.listen(3000,'127.0.0.1');
    console.log('Server started on location port 3000')
}
exports.starServer=starServer;