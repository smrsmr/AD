var fs = require('fs');

function home(response) {
    response.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/home.html','utf8').pipe(response);
}
function page(response,jsonObj) {
    response.writeHead(200,{'Content-Type':'application/json'});
   /* var obj = {
        name:'smr',
        sex: '男',
        age: 18
    };*/
    response.end(JSON.stringify(jsonObj))
}
module.exports = {
    home:home,
    page:page
};