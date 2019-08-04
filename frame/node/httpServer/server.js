const http = require('http');
const router = require('./controllers/router');
const app = require('./controllers/app');
const ejs = require('ejs');

http.createServer(app).listen(3002);
app.get('/',(req,res)=>{
    // res.send('这是主页')
    ejs.renderFile('././views/index.ejs',{data:{data:[111,222,333,444,555]}},(err,data)=>{
        if (err){
            console.log(err);
            return false;
        }
        res.send(data)
    })
});
app.get('/login',(req,res)=>{
    res.send('login')
});

console.log('server run Post 3002');
