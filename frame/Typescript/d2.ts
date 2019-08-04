//ts 1\定义类
/* class Person{
	name: string;
	age: number;
	constructor(n:string,a:number) {
		this.name = n;
		this.age = a;
	}

	getInfo(): any {
		return `我叫${this.name},今年${this.age}岁`
	}
	setInfo(n: string, a: number):void {
		this.name = n;
		this.age = a;
	}
}
let p = new Person('smr', 25);
console.log(p.getInfo());
p.setInfo('sss', 26);
console.log(p.getInfo()); */
//ts 2\继承
/* class Person {
	name: string;
	constructor(n: string) {
		this.name = n;
	}
	run():string {
		return `${this.name}在运动`
	}
}
let p = new Person('smr');
console.log(p.run());

class Web extends Person {
	constructor(name: string) {
		//super 调用父类的属性
		super(name)
	}
	work(): string {
		return `${this.name} 在工作`
	}
}

let w = new Web('sss');
console.log(w.run());
console.log(w.name);  */

//ts 3\修饰符 protected   public  默认为public
//1\protected  与 private 的区别就是可以在派生类中访问
/* class Person {
	protected name: string;
	constructor(name: string) {
		this.name = name;
	}
}
let p = new Person('smr');
//不能在声明它的类的外部访问 但可以在派生类中仍然可以访问
console.log(p.name); */

/* class Person {
	protected name: string;
	constructor(name: string) {
		this.name = name;
	}
}
class Web extends Person {
	constructor(name: string) {
		super(name)
	}
	run(): string {
		return `${this.name}在工作`
	}
} 

let w = new Web('smr');
console.log(w.run());
console.log(w.name); //也是外部访问 所以出错 */

//构造函数constructor也可以被标记成protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。

/* class Person {
	protected name: string;
	protected constructor(name: string) {
		this.name = name;
	}
}
let p = new Person('sss') //类“Person”的构造函数是受保护的，仅可在类声明中访问 */

/* class Person {
	protected name: string;
	protected constructor(name: string) {
		this.name = name;
	}
}

class Web extends Person {
	constructor(name: string) {
		super(name)
	}
	run(): void {
		console.log(`${this.name}在飞翔`);
	}
}

let w = new Web('xxxx');
w.run(); */

//2\ private

/* class Person {
	private name: string;
	constructor(name:string) {
		this.name = name;
	}
	run(): string {
		return `${this.name}在奔跑`
	}
}

let p = new Person('smr');
//不能在声明它的类的外部访问 只能内部访问
// console.log(p.name);
console.log(p.run()); */
//不能在声明它的类的外部访问 也不可以在派生类中访问
/* class Person {
	private name: string;
	constructor(name: string) {
		this.name = name;
	}
}

class Web extends Person {
	constructor(name: string) {
		super(name)
	}
	run(): void {
		console.log(`${this.name}`);  //error 
	}
} */