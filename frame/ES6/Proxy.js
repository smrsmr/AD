let obj = {};
let handler = {
	get(target, property) {
		console.log(`${property} 被读取`);
		return property in target ? target[property] : 10;
	},
	set(target, property, value) {
		console.log(`${property} 被设置为 ${value}`);
		target[property] = value;
	},
	deleteProperty(target, property) {
		console.log(`${target[property]}`);
	}
};
/**
 * Proxy(target, handler)
 * target: 代理的对象
 * handler: 操作的方法 set get deleteProperty ...
 */
let p = new Proxy(obj, handler);
/**
 * 设置属性时 调用set
 * 读取属性时 调用get
 */
p.name = 'smr';
p.six = '男';
p['foo'] = 'xxx';
delete p.name;
console.log(p.age);
