const bodyParser = require('body-parser');
// 只支持 application/x-www-form-urlencoded 文件结构
// app.use(bodyParser.urlencoded({ extended: false }))
let urlencoded = bodyParser.urlencoded({ extended: false });
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongodb',{useNewUrlParser: true});
const Todo = mongoose.model('todos', { name: String,age: String });
module.exports=function (app) {
    app.get('/',(req,res)=>{
        Todo.find({}, function(err, data) {
            if (err) throw err;
            //console.log(data);
            res.render('index', { todos: data })
        });
        // res.render('index',{todos:data})
    });
    //增加数据
    app.post('/add',urlencoded,(req,res)=>{
        Todo(req.body).save().then((data)=>{
            //console.dir(req.body)
            //res.json(data)
            Todo.find({}, function(err, data) {
                if (err) throw err;
                res.json(data)
            });
        }).catch((err)=>{console.log(err)})
    });
    //搜索数据
    app.post('/search',urlencoded,(req,res)=>{
        let val = {name:req.body.name};
        if (val.name==''){
            val={}
        }
        Todo.find(val, function(err, data) {
            if (err) throw err;
            res.json(data)
        });
    });
    //修改数据
    app.post('/edit',urlencoded,(req,res)=>{
        //console.log(req.body.id)
        Todo.updateMany({ _id:req.body.id }, { name: req.body.editName }).then(()=>{
            Todo.find({}, function(err, data) {
                if (err) throw err;
                res.json(data)
            });
        }).catch((err)=>{console.log(err)})
    });
    //删除数据
    app.delete('/delete/:id',(req,res)=>{
        Todo.find({_id:req.params.id}).deleteMany().then(()=>{
            //res.json(data)
            Todo.find({}, function(err, data) {
                if (err) throw err;
                res.json(data)
            });
        }).catch((err)=>{console.log(err)})
    });
};