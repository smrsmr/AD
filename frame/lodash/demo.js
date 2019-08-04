const _ = require('lodash');

var users = [
		{ 'user': 'barney',  'age': 36, 'active': true },
		{ 'user': 'fred',    'age': 40, 'active': false },
		{ 'user': 'pebbles', 'age': 1,  'active': true }
];
var f = _.find(users, function(o) { return o.age < 40; });
console.log(f);


const phone = '15918446062';

let editPhine = _.replace(phone, /(\d{3})(\d{4})(\d{4})/, '$1****$3');
console.log(editPhine);

//从指定下标开始输出数组
const dropArray = [1, 2, 3, 4, 5, 6];
console.log(_.drop(dropArray, 0));

//数组转对象
console.log(_.fromPairs([['a', 1], ['b', 2], ['c', 3]]));

//删除指定字符串
console.log(_.pull(['c', 'e', 'w', 'q'], 'c', 'q'));

//
console.log(_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]));