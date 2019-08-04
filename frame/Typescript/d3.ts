//静态属性
/**
 * 静态属性 只能由 父类调用 不能通过实例化调用 或者 this调用
 */
/* class Person {
	static n: string = '男';
	constructor(public  age: number) {
		
	}
	run() {
		console.log(`我是${Person.n}的,今年${this.age}岁`);
	}
}

let p = new Person(20);
p.run() */

//抽象类  
/**
 * 抽象类中的抽象方法不包含具体实现 并且必须在派生类中实现
 * 抽象方法必须使用abstract关键字并且可以包含访问符
 * 定义抽象方法之后 必须要在子类实现 否则提示错误
 */
/* abstract class Animal {
	constructor(public name:string) {
		
	}
	abstract eat(): void;
	abstract run(): void;
}

class Dog extends Animal {
	constructor(public name: string) {
		super(name)
	}

	eat() {
		console.log(`${this.name}是吃素的`);
	}
	run() {
		console.log(`${this.name}在奔跑`);
	}
}
let d = new Dog('小黑');
d.eat()
d.run() */