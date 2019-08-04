const Koa = require('koa');
const Router = require('koa-router');
const admin = require('./router/admin');
const api = require('./router/api');
const router = new Router();
const app = new Koa();

router.get('/',async (ctx)=>{
    ctx.body = '<h1>Hello Koa</h1>'
})
router.use('/admin',admin);
router.use('/api',api);

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
console.log('run 3000');