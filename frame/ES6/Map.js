const Colors = new Map()
	.set('red', ['a','b'])
	.set('yellow', ['c', 'd']);
	
function test(color) {
	return Colors.get(color) || [];
}
console.log(test('yellow'));
const map = new Map();
map.set(['a'], 555);
// 上面代码的set和get方法，表面是针对同一个键，但实际上这是两个值，内存地址是不一样的，因此get方法无法读取该键，返回undefined。
console.log(map.get(['a']));
console.log(['a'] === ['a']);
//对象转Map

function objAmap(obj) {
	let map = new Map();
	for (let k of Object.keys(obj)) {
		map.set(k,obj[k]);
	}
	return map;
}

console.log(objAmap({ a: 123, b: 456 }));

//map 转 对象
function mapAobj(map) {
	let obj = Object.create(null);
	for (let [k, v] of map) {
		console.log(`'k':${k}-'v':${v}`);
		obj[k] = v;
	}
	return obj;
}

let map3 = new Map()
	.set('a', '78989')
	.set('b', '123456');
console.log(mapAobj(map3));

let map4 = new Map([
	[ 'a', [1, 2, 3] ],
	[ 'b', [4, 5, 6] ],
	[ 'c', [7, 8, 9] ]
]);
map4.set('d', [11, 12, 13]);
console.log(map4.get('d'));