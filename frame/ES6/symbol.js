const s = Symbol('foor');
console.log(s);  //Symbol(foor)
//如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值。
let obj = {
	toString() {
		return 'abc';
	}
};
const s1 = Symbol(obj);
console.log(s1);  //Symbol(abc)
//Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的
let s3 = Symbol();
let s4 = Symbol();
console.log(s3===s4);    //false
let s5 = Symbol('foo');
let s6 = Symbol('foo');
console.log(s3 === s4);    //false
//由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性
const mySymbol = Symbol();
// (1)
// let a = {}
// a[mySymbol] = 'Hello'
// (2)
// let a = {
//     mySymbol: 'Hello'    //Symbol 值作为对象属性名时，不能用点运算符 在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。undefined
// }
// (3)
// let a = {
//     [mySymbol]: 'HelloTwo'
// }
// (4)
let a = {};
a.mySymbol = 'HelloSymbol';   //因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，导致a的属性名实际上是一个字符串，而不是一个 Symbol 值
console.log(a['mySymbol']);  
//
let s7 = Symbol;
let obj1 = {
	[s](arg) {
		console.log(arg);
	}
};
obj1[s](789);

//
const COLOR_RED = Symbol();
const COLOR_YELLOW = Symbol();

function setCOlor(color) { 
	switch (color) {
	case COLOR_RED:
		return COLOR_YELLOW;
		break;
	case COLOR_YELLOW:
		return COLOR_RED;
		break;
	default:
		return new Error('throw error');
		break;
	}
}
console.log(setCOlor(COLOR_YELLOW));
//魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。风格良好的代码，应该尽量消除魔术字符串，改由含义清晰的变量代替。
const obj2 = {
	triangle: Symbol()
};
function getArea(str, option) {
	let area = 0;
	switch (obj2['triangle']) {
	case obj2['triangle']:
		area = .5 * option.width * option.height;
		break;  
	default:
		area = 1;
		break;
	}
	return area;
}
let n = getArea(obj2['triangle'], { width: 20, height: 300 });
console.log(n);