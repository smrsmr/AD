// 函数的调用
function add(x, y) {
	return x + y;
}
const number1 = [33, 20];
console.log(add(...number1));  //53
//
console.log(...number1);  // 33 20
//
const number2 = [20, 26, 1, 28, 56, 99, 200];
const max = Math.max(...number2);
console.log(max);   //200
//
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
arr1.push(...arr2);
console.log(arr1);
//
let a1 = [22.3, 5, 6];
let a2 = [];
a2 = [...a1];
console.log(a2);
let a3 = [];
a2[0] = 23561;
a3 = [...a1, ...a2];
console.log(a3);
//
const [first, ...last] = [1, 2, 3, 4, 5, 6];
console.log(first);
console.log(last);
// 
console.log([...'hello']);
let s = ['hello'];
console.log(s.split(','));