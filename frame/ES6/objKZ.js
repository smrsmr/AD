/**
 * 利用函数式编程 返回4个 非数字字符串
 */
let str = ['str', '2', '55', 'smr', 'y', '100', '555', 'smr', 'ty', '120'];
let words = [];
words = str.filter(x => {
	return (!x.match(/[0-9]/));
}).slice(0,4);
console.log(words);

/**
 * reduce
 */

let array = [100, 20, 4];
const ops = {
	'plus': (x,y)=>x+y,
	'mul' : (x,y)=>x*y,
	'and' : (x,y)=>x / y
};
function js(op, array) {
	return array.slice(1).reduce(ops[op],array[0]);
}
console.log(js('plus',array));
console.log(js('mul',array));
console.log(js('and', array));

let result = [
	{
		name: 'xx',
		num: 88
	},
	{
		name: 'ss',
		num: 83
	},
	{
		name: 'se',
		num: 90
	}
];
let sum = result.reduce((total, curr) => {
	//console.log(`${total}:${curr.num}`);
	return total + curr.num;
}, 0);
console.log(sum);