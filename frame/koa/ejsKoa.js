/*
* koa ejs模板引擎
* */
const Koa = require('koa');
const views = require('koa-views');
const static = require('koa-static');
const path = require('path');
const app = new Koa();

//加载模板引擎
app.use(views(path.join(__dirname,'./view'),{
    extension: 'ejs'
}));
//配置模板全局变量
app.use(async (ctx,next)=>{
    ctx.state.userinfo='张三';
    await next();
});
app.use(static(__dirname+'/static'))
app.use(async (ctx)=>{
    if (ctx.url == '/'){
        let title = 'hello title';
        await ctx.render('index',{
            title:title
        })
    } else if (ctx.url == '/user') {
        let title = 'hello user';
        await ctx.render('user',{
            title:title
        })
    }
});
app.listen(3000);
console.log('run 3000');

