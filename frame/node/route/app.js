var server = require('./server');
var router = require('./route');
var handler = require('./handler');

var hander = {};
hander['/'] = handler.home;
hander['/home'] = handler.home;
hander['/page'] = handler.page;

server.shartSever(router.router,hander)