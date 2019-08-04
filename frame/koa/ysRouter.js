/*
* koa 原生路由实现
* */
const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

function a(page){
    return new Promise((resolve,reject)=>{
        let pageUrl = `./page/${page}`;
        fs.readFile(pageUrl,'utf-8',(err,data)=>{
            if (err){
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}
async function router(url){
    let page='404.html';
    switch (url) {
        case '/':
            page = 'index.html';
            break;
        case '/user':
            page = 'user.html';
            break;
    }
    let html = await a(page);
    return html;
}

app.use(async (ctx,next)=>{
    let url = ctx.url;
    let html = await router(url);
    ctx.body = html
});

app.listen(3005);