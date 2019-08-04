const ejs = require('ejs');

module.exports = function (pathname,res) {
    if (pathname == '/index' || pathname == '/'){
        /*fs.readFile('./views/index.ejs',(err,data)=>{
            if (err){
                console.log(err);
                return false;
            }
            let template = data.toString();
            let html = ejs.render(template,{text:'index123'});
            res.end(html)
        });*/
        ejs.renderFile('./views/index.ejs',{text:'index4545'},(err,data)=>{
            if (err){
                console.log(err);
                return false;
            }
            res.end(data)
        })
    } else if (pathname == '/user') {
        ejs.renderFile('./views/user.ejs',{text:'user3232'},(err,data)=>{
            if (err){
                console.log(err);
                return false;
            }
            res.end(data)
        })
    } else {
        ejs.renderFile('./views/404.ejs',{status:'404'},(err,data)=>{
            if (err){
                console.log(err);
                return false;
            }
            res.end(data)
        })
    }
};