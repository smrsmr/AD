/*
* nodeJs 文件服务器
* */

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
let fp = path.resolve('.');     //获取当前目录路径
http.createServer((req,res)=>{
    let pathName = url.parse(req.url).pathname;
    if (pathName == '/favicon.ico') {
        return false
    }
    let file = path.join(fp,pathName);   //拼接字符串
    fs.stat(file,(err,stats)=>{
        if (!err && stats.isFile()) {
            //不报错 并且 是文件结构
            fs.createReadStream(file).pipe(res);
            res.writeHead(200);
        } else {
            res.end('The file could not be found')
        }
    })
}).listen(3000,function () {
    console.log('Successfully run port 3000')
});