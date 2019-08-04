let arr = [1, 2, 3];

let iterator = arr[Symbol.iterator]();

console.log(iterator.next()); //{ value: 1, done: false }
console.log(iterator.next()); //{ value: 2, done: false }
console.log(iterator.next()); //{ value: 3, done: false }
console.log(iterator.next()); //{ value: undefined, done: true }

const arr1 = [{ a: 1 }, { b: 2 }, { c: 3 }];
let obj = {};
for (const i in arr1) {
	console.log(i); // 0 1 2
}
for (const value of arr1) {
	console.log(value); // { a: 1 } { b: 2 } { c: 3 }
}
for ({ a: obj.a } of arr1) {
	console.log(obj);
}