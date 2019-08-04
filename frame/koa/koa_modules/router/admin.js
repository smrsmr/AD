const router = require('koa-router')();

router.get('/',async (ctx)=>{
    await ctx.body = 'Hello admin'
});

router.get('/user',async (ctx)=>{
    await ctx.body = 'Hello admin user'
});

router.get('/lists',async (ctx)=>{
    await ctx.body = 'Hello admin lists'
});

router.get('/swiper',async (ctx)=>{
    await ctx.body = 'Hello admin swiper'
});
//暴露路由 并且自动执行
module.exports = router.routes();