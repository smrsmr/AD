/*
* 操作 写入 读取 cookie
* */

const Koa = require('koa');
const app = new Koa();

app.use(async (ctx)=>{
    if (ctx.url=='/index'){
        ctx.cookies.set(
            'smr','123456',{
                domain:'127.0.0.1', // 写cookie所在的域名
                path:'/index',       // 写cookie所在的路径
                maxAge:1000,   // cookie有效时长
                expires:new Date('2018-10-15'), // cookie失效时间
                httpOnly:false,  // 是否只用于http请求中获取
                overwrite:false  // 是否允许重写
            }
        )
        ctx.body = 'cookie ok'
    } else {
        if (ctx.cookies.get('smr')){
            ctx.body = ctx.cookies.get('smr')
        } else {
            ctx.body = 'no Cookie'
        }
    }
})
app.listen(3000)