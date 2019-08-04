var http = require('http');
var url = require('url');
var queryString = require('querystring');

function shartSever(router,hander) {
    var server = http.createServer(function (request,response) {
        var pathname = url.parse(request.url).pathname;
        //var params = queryString.parse(url.parse(request.url).query);
        console.log('request pathname:'+ pathname);
        var data=[];
        request.on('error',function (err) {
            console.log(err)
        }).on('data',function (chunk) {
            data.push(chunk)
        }).on('end',function () {
            if (request.method == 'POST'){
                router(hander,pathname,response,queryString.parse(url.parse(request.url).query))
            } else {
                var params = url.parse(request.url,true).query;
                router(hander,pathname,response,params)
            }
        })
    })
    server.listen(3000,'127.0.0.1')
    console.log('run server post 3000')
}
module.exports.shartSever=shartSever;