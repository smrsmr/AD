/**
 * 优点是比较次数少，查找速度快，平均性能好；
 * 其缺点是要求待查表为有序表，且插入删除困难。
 * 因此，折半查找方法适用于不经常变动而查找频繁的有序列表。
 * @param {*目标数组} arr 
 * @param {*目标数值} data 
 */
function binSearch(arr, data) {
	var low = 0;
	var high = arr.length - 1
	while (low <= high) {
		var middle = Math.floor((low + high) / 2)
		if (arr[middle] < data) {
			low = middle + 1
		} else if (arr[middle] > data) {
			high = middle - 1
		} else {
			return middle
		}
	}
	return -1
}
var arr = [22, 33, 34, 39, 45, 48];
// console.log(binSearch(arr, 22))


var sortArray = [55, 22, 3, 5, 2, 14, 16];
var s = sortArray.sort((a, b) => a - b);
console.log(s);
console.log(binSearch(s, 3))


var isType = Object.prototype.toString.call(s);
console.log(isType);


var t = new Date().getTime();
console.log(t);
var h = new Date(t);
/**
 * 时间戳 转换为 yyyy-MM-dd HH:mm:ss
 * @param {number} timestamp 
 * @param {string} format 
 */
function timestampToDateTime(timestamp = Date.now(), format = 'yyyy-MM-dd HH:mm:ss') {
	if (isNaN(timestamp)) {
		return '';
	}

	if (format.length < 4 || 'yyyy-MM-dd HH:mm:ss'.indexOf(format) !== 0) {
		return '';
	}

	const date = new Date(Number(timestamp));

	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();

	return format.replace('yyyy', year)
		.replace('MM', month > 9 ? month : `0${month}`)
		.replace('dd', day > 9 ? day : `0${day}`)
		.replace('HH', hour > 9 ? hour : `0${hour}`)
		.replace('mm', minute > 9 ? minute : `0${minute}`)
		.replace('ss', second > 9 ? second : `0${second}`)
}
console.log(timestampToDateTime(h));