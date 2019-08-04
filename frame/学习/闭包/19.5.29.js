
function add() {
	let num = 0;
	return function () {
		console.log(++num);
	}
}
const myAdd = add();
myAdd();
myAdd();
myAdd();

function test() {
	let n = 'foor';
	const obj = {
		get: function () {
			console.log(n);
		},
		set: function (v) {
			n = v;
		}
	}
	return obj;
}
const t = test();
t.get();
t.set('smr');
t.get();

/* function test() {
	this.n = 'smr';
	this.get = function () {
			console.log(this.n);
	};
	this.set = function (v) {
		this.n = v;
	};
}
const t = new test();
t.get(); */