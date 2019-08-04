const Koa = require('koa');
const Router = require('koa-router');
const session = require('koa-session');
const router = new Router();
const app = new Koa();
app.keys = ['some secret hurr'];  /** cookie的签名 */

const CONFIG = {
    key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 10000,  /**cookie过期时间*/
    autoCommit: true, /** (boolean) automatically commit headers (default true) */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) 只有服务器端可以获取cookie*/
    signed: true, /** (boolean) signed or not (default true) 签名默认 */
    rolling: false, /** 在每次请求时强行设置cookie，这将重置cookie的过期时间 默认false*/
    renew: false, /** 在每次请求时强行设置cookie，这将重置cookie的过期时间 默认false*/
};

app.use(session(CONFIG, app));
app.use(ctx => {
    // ignore favicon
    if (ctx.path === '/favicon.ico') return;

    let n = ctx.session.views || 0;
    ctx.session.views = ++n;
    ctx.body = n + ' views';
});
// or if you prefer all d
router.get('/write',async (ctx)=>{
    ctx.session.userInfo = 'smr';
    ctx.body = 'Koa'
});
router.get('/news',async (ctx)=>{
    ctx.body = 'news';
    console.log(ctx.session.userInfo)
});
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000,()=>{
    console.log('运行成功')
});