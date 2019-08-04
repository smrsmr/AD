const express = require('express');
const bodyParser = require('body-parser');   //可以获取post信息的库
const mongoose = require('mongoose');
const fsFun = require('./controllers/fs');
const app= express();
const ejs = require('ejs');
app.engine('.html',ejs.__express);
app.set('view engine', 'html');
//链接mongodb
let connection = mongoose.createConnection('mongodb://localhost/mongodb',{useNewUrlParser: true});
//设置变量类型
let schema = new mongoose.Schema(
    {
        name: String,
        phone: String,
        brand_id: String,
        series_id: String,
        prov: String,
        city: String,
        dealers: String,
        act_id: String
    }
);
let Todo = connection.model('baomings', schema);
// 只支持 application/x-www-form-urlencoded 文件结构
// app.use(bodyParser.urlencoded({ extended: false }))
let urlencoded = bodyParser.urlencoded({ extended: false });
app.get('/',(req,res)=>{
    res.render('post')
});
app.post('/post',urlencoded,(req,res)=>{
    //console.log(req.body.phone);
    //提交前判断 数据库中是否有存在相同手机号
    Todo.find({phone:req.body.phone},(err,data)=>{
        if (err) throw err;
        if (data.length=='0') {
            Todo(req.body).save().then((data)=>{
                //console.dir(req.body);
                console.log('保存成功');
                res.send({status:1,message:'报名成功',data:req.body,img:fsFun()});
            }).catch((err)=>{console.log(err)});
        } else {
            res.send({status:-1,message:'该号码已存在',data:req.body});
        }

    });
});
app.listen(3000,()=>{
    console.log('listening port 3000');
});