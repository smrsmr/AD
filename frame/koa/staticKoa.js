/*
* koa static 静态资源中间件
* */
const Koa = require('koa');
const staticPath = require('koa-static');

const app = new Koa();

//加载中间件
app.use(staticPath(__dirname+'/static'));

app.use(async (ctx)=>{
    ctx.body = '<h1>hello Koa</h1>'
});
app.listen(3000,()=>{
    console.log('启动成功')
});