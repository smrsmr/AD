// TypeScript中的数据类型有：
// Undefined :
// Number:数值类型;
// string : 字符串类型;
// Boolean: 布尔类型；
// enum：枚举类型；
// any : 任意类型，一个牛X的类型；
// void：空类型；
// Array : 数组类型;
// Tuple : 元祖类型；
// Null ：空类型。


/* var num: number = 221333;

//枚举类型
enum Ren{ nan, yao, nv }    
console.log(Ren.yao);

enum str{ a = 'ss', b = 'bb', c = 'ee' }
console.log(str.b);

//any 任意类型
var t: any = [1, 2, 3]
t = 'string';
t = 2128;
console.log(t);

//剩余函数
function fn1(...ang: string[]): string{
    let str:string = '';
    for (let i = 0; i < ang.length; i++){
        str += ang[i]
        if (i < ang.length - 1) {
            str += ','
        }
    }
    return str;
}
let res: string = fn1('a', 'b', 'c','smr');
console.log(res); 
//数组类型
let arr1: number[] = [];     //定义空类型数组
let arr2: number[] = [1, 2, 3, 4, 5];   //定义数组的同时并赋值
let arr3: Array<string> = ['smr', 'xxx'];  // 定义一个字符串类型的数组
let arr4: Array<boolean> = [true, false];  // 定义一个布尔类型的数组
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
//
let list: any[] = [1, true, "free"];
list[1] = 100;
console.log(list[1]);
// void类型的只能是定义为undefined 其实没什么作用
let unusable: void = undefined;
//泛型
// function loggingIdentity<T>(arg: T): T {
//     console.log(arg.length);  // Error: T doesn't have .length
//     return arg;
// }
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
let resf = loggingIdentity([2, 3, 4, 5, 6])
console.log(resf); */