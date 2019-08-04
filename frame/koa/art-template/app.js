const Koa = require('koa');
const render = require('koa-art-template');
const path = require('path');
const app = new Koa();
const router = require('koa-router')();
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});

router.get('/',async (ctx)=>{
    await ctx.render('index',{data:{name:'index',age:18,a:'trt',b:'xxx',h1:'<h1>Hello</h1>'}});
});
router.get('/news',async (ctx)=>{
    await ctx.render('news',{data:{name:'news',lists:['a','b','c','d','e']}});
});
app.use(router.routes());
app.listen(3000,()=>{console.log('run 3000')});