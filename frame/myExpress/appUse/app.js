/*
* express 中间件app.use()的使用
* */
let express = require('express');
let indexRouter = require('./router/index');
let userRouter = require('./router/user');
let app = express();
app.use(express.static('static'));
app.use('/',indexRouter);
app.use('/user',userRouter);
/*app.use((req,res,next)=>{
    console.log('no.1')
    next()
})
app.use((req,res)=>{
    console.log('no.2')
    res.send('ok')
})*/
// app.get('/',(req,res)=>{
//     res.send('ok')
// })
app.listen(3000,()=>{
    console.log('port 3000')
})