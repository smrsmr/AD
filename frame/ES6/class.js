/*
*
* */
/*class Class {
    constructor (){
        console.log('实例化时调用')
        this.name = 'smr'
    }
    setName(name){
        this.name = name
    }
    getName(){
        console.log(this.name)
    }
}
let per = new Class();

per.getName()
per.setName('zs')
per.getName()*/

//单例模式
/*
class Db {
    static getInstance(){
        if (!Db.instance){
            Db.instance = new Db()
        }
        return Db.instance
    }
    constructor(){
        console.log('单例实例化调用')
    }
    concent(){
        console.log('开始连接')
    }
    success(){
        console.log('连接成功')
    }
}
let db = Db.getInstance()
let db1 = Db.getInstance()
let db2 = Db.getInstance()
db2.success()*/
//
/*
let myClass = new class {
    constructor(name){
        this.name = name
    }
    getName(){
        console.log(this.name)
    }
}('smr')
myClass.getName()*/
console.time('start');
class Class {

	//ES6实例属性只能在constructor构造函数中定义
	constructor(name){
		this.a = null;
		this.name = name;
	}
	//公有方法调用私有方法
	toString(t){
		//console.log(456)
		//console.log(this)== Class { name: undefined }
		let a =  baz.call(this,t);
		this.a = a;
		console.log(this.a);
	}
}
//私有方法
function baz(a){
	return this.a = a;
}
let b = new Class();
b.toString('ttyr');
console.log(b.__proto__ === Class.prototype);

let o = Object.getPrototypeOf(b);
o.get = function (name) {
	console.log(name);
};
o.get('ojbk');
let v = new Class();
v.get('1246');
console.timeEnd('start');