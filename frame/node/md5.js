const md5 = require('md5-node');
const fs = require('fs');
const datetime = require('node-datetime');
console.log(md5('hello nodeJs'));

fs.readFile('./index.html',(err,data)=>{
    if (err) {
        console.error('读取文件出错！', err);
        return;
    }
    //console.log(md5(data))
});
//格式化输出时间
let dt = datetime.create(new Date(),'Y-m-d I:M:S');
console.log(dt.format())