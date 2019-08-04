const bodyParser = require('body-parser');
// 只支持 application/x-www-form-urlencoded 文件结构
// app.use(bodyParser.urlencoded({ extended: false }))
let urlencoded = bodyParser.urlencoded({ extended: false });
const mongoose = require('mongoose');
mongoose.connect('mongodb://smrsmr:124605smr@ds223343.mlab.com:23343/todos',{useNewUrlParser: true});
const Todo = mongoose.model('Todo', { item: String });
/*const kitty = new Todo({ item: 'buy flowers' });
kitty.save().then(() => console.log('save success'));
let data = [ {item: 'get milk'}, {item: "walk dog"}, {item: 'kick some coding ass'} ];*/
module.exports=function (app) {
    app.get('/todo',(req,res)=>{
        Todo.find({}, function(err, data) {
            if (err) throw err;
            res.render('index', { todos: data })
        });
        // res.render('index',{todos:data})
    });

    app.post('/todo',urlencoded,(req,res)=>{
        Todo(req.body).save().then((data)=>{
            // console.dir(req.body)
            //res.json(data)
            Todo.find({}, function(err, data) {
                if (err) throw err;
                res.json(data)
            });
        }).catch((err)=>{console.log(err)})
    });

    app.delete('/todo/:id',(req,res)=>{
        Todo.find({_id:req.params.id}).deleteMany().then((data)=>{
            //res.json(data)
            Todo.find({}, function(err, data) {
                if (err) throw err;
                res.json(data)
            });
        }).catch((err)=>{console.log(err)})
    });
};