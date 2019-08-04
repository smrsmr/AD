const Koa = require('koa');
//获取request请求数据
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
//给路由加前缀
/*const router = new Router({
    prefix:'/smr'
})*/
const router = new Router();
const app = new Koa();
app.use(bodyParser());
app.use(async (ctx,next)=>{
    console.log(ctx.method,ctx.url);
    let cok = ctx.cookies.get('koa1');
    if (ctx.url=='/login') {
        await next()
    }else {
        if (ctx.url!='/login'&&cok=='123456') {
            await next()
        }else {
            ctx.body = '<h1><a href="/login">请先登录</a></h1>'
        }
    }
});
router.get('/login',async (ctx,next)=>{
    let q = ctx.url;
    ctx.body = `<h1>${q}</h1>
                <form action="/login" method="post"> 
                    <label>姓名:</label>
                    <input type="text" name="name">
                    <label>密码:</label>
                    <input type="password" name="password">
                    <input type="submit">
                </form>`
});
router.post('/login',async (ctx,next)=>{

    let name = ctx.request.body.name || '',
        pass = ctx.request.body.password || '';
    if (name == 'koa1' && pass == '123456'){
        ctx.cookies.set(
            name,pass,{
                domain:'127.0.0.1', // 写cookie所在的域名
                path:'/',       // 写cookie所在的路径
                maxAge:1000*60,   // cookie有效时长
                expires:new Date('2018-10-21'), // cookie失效时间
                httpOnly:false,  // 是否只用于http请求中获取
                overwrite:true  // 是否允许重写
            }
        );
        ctx.body = '<a href="/user">login success</a>'
    } else {
        ctx.body = '<a href="/login">login failed</a>'
    }
});
router.get('/user',async (ctx,next)=>{
    let cok = ctx.cookies.get('koa1');
    ctx.body=`password:${cok}`;
    //console.log('user');
});
//router.allowedMethods() 当所有路由中间件最后调用时,此时根据ctx.status 设置response响应头
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000,()=>{
    console.log('运行成功')
});