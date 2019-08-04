"use strict";
//约束数组接口
/* interface UseInfo {
    [index:number]:string
}

let arr = ['a', 'b']

console.log(arr[1]); */
//类类型接口 和 抽象类相似 一旦在接口里面定义了 就要在类里面实现
/* interface Person {
    name: string;
    eat(): void;
}

class Dog implements Person {
    constructor(public name: string) {
        
    }
    eat() {
        console.log(`${this.name}吃狗粮`);
    }
}

let d = new Dog('哈士奇');
d.eat()


interface Animal {
    name: string;
    run(str: string): void;
}

class Cat implements Animal {
    constructor(public name: string) {
        
    }
    run(str: string) {
        console.log(`${this.name}和${str}在奔跑`);
    }
}

let c = new Cat('小花');
c.run('小黑'); */
//扩展接口 接口的继承
/* interface Animal {
    name: string;
    eye(): void;
}

interface Dog extends Animal {
    name: string;
    eat(): void;
}

class Dog implements Dog {
    constructor(public name: string) {
        
    }
    eye() {
        console.log(`${this.name}的眼睛`);
    }
    eat() {
        console.log(`${this.name}在吃狗粮`);
    }
}

let d = new Dog('哈士奇')

d.eye();
d.eat(); */
//泛型
// 我们想通过输入什么样的数据类型 最终就返回相应的数据类型
// 当我们 同一个函数 需要输出 string 和number 的时候 可能就需要写两个相同函数 就会造成冗余了
/* function num(value: number): number {
    return value;
}
console.log(num(33)); */
/* function num(value: string): string {
    return value;
}
console.log(num('smr')); */
//泛型一般使用T代替 其他大写字母也可以
function num(value) {
    return value;
}
console.log(num(12345));
console.log(num('smr'));
//利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定 T 的类型
console.log(num(true));
//类的泛型
/* class MinNum<T> {
    public list: T[] = [];
    add(...reuslt:T[]):void {
        reuslt.map((v, i) => {
            this.list.push(v)
        })
    }

    min():T {
        this.list.map((v, i) => {
            if (this.list[0] > v) this.list[0] = v;
        })
        return this.list[0];
    }
}

let m = new MinNum<number>();
m.add(11, 2, 3, 4, 5, 6, 4, 1.5, 0.5);
console.log(m.min()); */
//接口的泛型\1
/* interface Config {
    <T>(value:T):T
}

let getConfig: Config = function <T>(value: T): T{
    return value;
}

console.log(getConfig<string>('smr')); */
//接口的泛型\2
/* interface Config<T> {
    (value:T):T
}

function getConfig<T>(value: T): T{
    return value
}

let myGetConfig: Config<string> = getConfig;

console.log(myGetConfig('ssss'));
 */ 
