const router = require('koa-router')();

router.get('/',async (ctx)=>{
    await ctx.body = 'Hello api'
});

router.get('/user',async (ctx)=>{
    await ctx.body = 'Hello api user'
});

router.get('/lists',async (ctx)=>{
    await ctx.body = 'Hello api lists'
});

router.get('/swiper',async (ctx)=>{
    await ctx.body = 'Hello api swiper'
});
//暴露路由 并且自动执行
module.exports = router.routes()