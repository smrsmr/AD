function shellSort(arr) {
	var len = arr.length;
	var temp, gap = 1;
	while (gap < len /3 ) {
		gap = gap * 3 + 1
	}
	while (gap >= 1) {
		for (var i = gap; i < len; i++) {
			temp = arr[i]
			for (var j = i - gap; j >= 0 && arr[j] > temp; j-=gap) {
				arr[j+gap] = arr[j]
			}
			arr[j+gap] = temp
		}
		gap = (gap - 1) / 3
	}
	return arr
}
var arr=[300,3,44,38,5,47,15,36,26,27,100,108,102,105,2,46,4,19,50,48];
console.log(shellSort(arr));