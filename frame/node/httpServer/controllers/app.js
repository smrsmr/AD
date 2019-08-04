/*
* 模仿express 封装路由
* */
const url = require('url');
function send(res){
    res.send = function (data) {
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        res.end(data);
    }
}
let Server = function () {
    const G={};
    const app = function (req,res) {
        send(res);
        let pathname = url.parse(req.url).pathname;
        if (pathname == '/favicon.ico' ) {
            return
        }
        if (G[pathname]){
            G[pathname](req,res)
        }else {
            res.end('no router')
        }
    };
    app.get = function (string,callback) {
        G[string] = callback;
    };
    app.post = function (string,callback) {
        G[string] = callback;
    };
    return app
};

module.exports = Server();