/**
 * 生成一个包含 n 项的斐波那契数列
 */

const fibonacci1 = n =>
	[...Array(n)].reduce((acc, val, i) => (
		acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i)
	), []);
	
console.log(fibonacci1(17));


const fibonacci2 = n => {
	let n1 = 1,n2 = 1, sum = 1;
	for (let i = 3; i <= n; i += 1){
		sum = n1 + n2;
		n1 = n2;
		n2 = sum;
	}
	return n<2 ? n : sum;
};
console.log(fibonacci2(17));

const fibonacci3 = n => {
	if (n === 0 || n === 1) {
		return n;
	}
	return fibonacci3(n-1)+fibonacci3(n-2);
};
console.log(fibonacci3(17));



const mask = (str, maskString = '*') => {
	return str.slice(-4).padStart(str.length, maskString);
};

console.log(mask('13226119526'));
console.log(mask('15918446062'));
console.log(mask('16620446062'));