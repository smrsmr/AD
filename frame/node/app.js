//console.log('hello node')
//console.log(__dirname) //E:\web\AD\frame\node

//console.log(__filename)  //E:\web\AD\frame\node\app.js
/*
setTimeout(function () {
    console.log('time')
},3000)*/
//module  模块
/*var state = require('./count')
console.log(state.sum(3,16))
console.log(state.arr(['f','h',123]))*/
//events 事件
/*
const EventEmitter  = require('events');
const myEvent = new EventEmitter();
myEvent.on('event',function (message) {
    console.log('this is event: '+message)
})
myEvent.emit('event','data')*/
//events 事件继承
/*
const EventEmitter  = require('events');
class MyEvent extends EventEmitter {}
const a = new MyEvent();
const b = new MyEvent();
const c = new MyEvent();
const person=[a,b,c];
person.forEach(function (person) {
    person.on('event',function (message) {
        console.log(message+'  this is 1234567890')
    })
});
a.emit('event','a')
b.emit('event','b')
c.emit('event','c')*/
//fs 文件读取、写入 异步
/*const fs = require('fs');
fs.readFile('./redaMe.txt','utf8',function (err,data) {
    if (err) throw err;
    console.log(data);
    fs.writeFile('./redaMe2.txt', data, (err) => {
        if (err) throw err;
        console.log('文件已保存！');
    });
});
console.log('我先执行');  //由于异步请求 优先执行*/
/*
fs.watch('./redaMe.txt', (eventType, filename) => {
    console.log(`事件类型是: ${eventType}`);
    if (filename) {
        console.log(`提供的文件名: ${filename}`);
    } else {
        console.log('未提供文件名');
    }
});*/
//util 工具库 promisify
/*
const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
async function read() {
    const content = await readFileAsync('./redaMe.txt', 'utf-8');
    return content;
}
async function write() {
    const writeText = await writeFileAsync('./redaMe3.txt','write hello Node.js','utf-8')
    return writeText;
}
read().then(v => {
    console.log(v);
}).catch(e => {
    console.log(e)
});
write().then(()=>{
    console.log('保存成功')
}).catch(e=>{
    console.log(e)
});*/
//流 和 管道
/*
var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname+'/redaMe.txt');
var myWriteStream = fs.createWriteStream(__dirname + '/stream.txt');
//myReadStream.pipe(myWriteStream)  //管道
myReadStream.on('data',function (chunk) {
    console.log(chunk)
    myWriteStream.write(chunk)   //流写入
})*/
/*
var server = require('./moduleHttp')
server.starServer()*/
var querystring = require('querystring');
var url = 'name=smr&sex=男&sum=123'
var str = querystring.parse(url);
console.log(str)

