const express = require('express');
const bodyParser = require('body-parser');  //可以获取post信息的库
const app= express();
// 只支持 application/x-www-form-urlencoded 文件结构
// app.use(bodyParser.urlencoded({ extended: false }))
let urlencoded = bodyParser.urlencoded({ extended: false });
// 只支持 application/json 文件结构
// app.use(bodyParser.json())
let jsonParser  = bodyParser.json();
// app.use(express.static('public'))     //http://localhost:3000/images/kitten.jpg
app.use('/static', express.static('public')); //http://localhost:3000/static/images/kitten.jpg
/*app.get('/usefile/:id',(req,res)=>{
   // res.status(404).jsonp({error:'error'})
   res.send('route get id '+ req.params.id)
    // res.status(400).send('Bad Request 404');
    // res.status(404).sendFile(__dirname+'/public/file/404.png');
    // res.status(404).sendFile(__dirname+'/public/file/404.html');
})*/
app.get('/usefile/:id',(req,res)=>{
    res.send('route get id '+ req.params.id)
})
app.post('/',urlencoded,(req,res)=>{
    console.dir(req.body)
    res.send('ok')
})
app.post('/up',jsonParser ,(req,res)=>{
    console.dir(req.body);
    res.send('ok')
}) 
const server = app.listen(3000, () => console.log('listening on port 3000'));
