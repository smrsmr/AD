/*
*  fs 文件系统
* */
const fs = require('fs');
/*fs.rename('./redaMe1.txt','./redaMe.txt',err => {
    if (err){
        console.error(err);
        return false;
    }
    console.log('修改成功')
})*/

/*
fs.readFile('./redaMe.txt','utf8',(err,data)=>{
    if (err){
        console.error(err);
        return false;
    }
    console.log(data);
})*/

//同步地测试 path 指定的文件或目录的用户权限。 mode 参数是一个可选的整数，指定要执行的可访问性检查。 文件访问常量定义了 mode 可选的值。 可以创建由两个或更多个值的位或组成的掩码（例如 fs.constants.W_OK | fs.constants.R_OK）。
// 如果可访问性检查失败，则抛出一个 Error 对象。 否则返回 undefined。
/*function mkdir(file) {
    try {
        fs.accessSync(file)
    } catch (e) {
        fs.mkdirSync(file);
        console.log('创建目录成功')
    }
}*/
/*
function mkdir(file){
    fs.access(file,fs.constants.R_OK,(err)=>{
        if (err){
            //console.log(err);
            fs.mkdir(file,()=>{
                console.log('创建目录成功')
            })
        }else {
            console.log('目录已存在')
            return;
        }
    })
}
mkdir('./css123');
*/
//文件追加
/*
fs.appendFile('./redaMe.txt','hello nodejs4\n','utf8',(err)=>{
    if (err){
        console.log(err);
        return false;
    }
    console.log('添加成功')
});
*/
//流 读取和写入
/*
const Stream = fs.createReadStream('./stream.txt');
let str = '',num=0;
Stream.on('data',(chunk)=>{
    str += chunk
    num++;
});
Stream.on('end',(data)=>{
    console.log(str);
    console.log(num);
});
Stream.on('error',(error)=>{
    console.log(error)
});
*/
/*
let data = 'NodeJs 123'
const WriteStream = fs.createWriteStream('./outFile.txt');
WriteStream.write(data);
WriteStream.end();
WriteStream.on('finish',()=>{
    console.log('写入完成')
})
*/
/*
const ReadStream = fs.createReadStream('./stream.txt');
const WriteStream = fs.createWriteStream('./outFile.txt');
ReadStream.pipe(WriteStream)
*/

//通过回调函数的方式 拿到异步函数的数据
/*
function f(callback) {
    fs.readFile('./stream.txt',(err,data)=>{
        callback(data)
    })
}
f(function (result) {
    console.log(result)
})
*/
//通过事件驱动events 异步调用
const event  = require('events');
const EventEmitter = new event();
fs.readFile('./stream.txt',(err,data)=>{
    if (err){
        console.error(err);
        return false;
    }
    EventEmitter.emit('getData',data)
});
EventEmitter.on('getData',(data)=>{
    console.log(data.toString())
});