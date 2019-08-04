/*
* node.js 上传文件
* */
const express = require('express');
/*
* Multer 是一个 node.js 中间件，用于处理 multipart/form-data 类型的表单数据，它主要用于上传文件。它是写在 busboy 之上非常高效。
* 注意: Multer 不会处理任何非 multipart/form-data 类型的表单数据。
**/
const multer = require('multer');
const fs = require('fs');
const app= express();
app.use('/upload',express.static('upload'))
app.set('view engine', 'ejs'); //引入模板引擎ejs
//创建目录函数
let createFload = function (fload) {
    try {
        //判断目录是否存在,使用同步,异步不行
        //目录不存在会抛出异常
        fs.accessSync(fload)
    }catch (e) {
        // 抛出异常后创建目录,同步创建
        //console.log(e)
        fs.mkdirSync(fload)
    }
};
//赋值文件目录字符串(相对路径)
let uploadFload = './upload';
createFload(uploadFload);
// 创建一个storage对象
//The disk storage engine gives you full control on storing files to disk.
// 翻译的意思是:这个硬盘存储引擎可以让你完全掌控把文件存储到硬盘==>意思是:按照你想要的方式存储上传来的文件
let storage = multer.diskStorage({
    // 设置存放位置
    destination: function (req, file, cb) {
        cb(null, uploadFload);
    },
    // 设置文件名称
    filename: function (req, file, cb) {
        cb(null, file.originalname);
        //cb(null, file.fieldname + '-' + Date.now());
    }
});
//调用
let upload = multer({
    storage: storage,
});
app.get('/form/:name',(req,res)=>{
    // let person = req.params.name;
    let person = {
        name:'这是标题',
        arr:['abc','ss']
    }
    res.render('form',{person:person})  //模板引擎写法
    // res.sendFile(__dirname+'/pages/form.html')
});
app.get('/home',(req,res)=>{ 
    res.render('home')
})
// app.post(path, callback [, callback ...])可以放多个回调函数,意思是你可以放一下中间件
// upload.single('logo') ==>single代表单文件上传 和name属性保持一致 <input type="file" name="logo">
// upload.single('avatar') // 单文件上传
// upload.array('photos', 12) //文本上传
/*单文件上传*/
// app.post('/upload', upload.single('logo'), (req, res) => {
//     console.dir(req.file);
//     res.send({
//         'ret_code': 0
//     });
// })
/*
* 多文件上传
* maxCount 最多同时上传多少个文件
* */
app.post('/upload', upload.fields([{ name: 'logo', maxCount: 8 }]), (req, res) => {
   // console.dir(req.file);
    res.send({
        'ret_code': 0
    });
});
app.listen(3000, '127.0.0.1', () => {
    console.log("started");
});
