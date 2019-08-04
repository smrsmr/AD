const obj = {
	a: 1,
	b: 2,
	c: 3,
	d: 4
};
obj.r = 123;
console.log(Object.keys(obj));

const newObj = Object.keys(obj).reduce((acc, key) => (
	acc[key] = obj[key], acc),
{}
);

console.log(newObj);
