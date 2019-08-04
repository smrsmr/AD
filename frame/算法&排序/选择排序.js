const arr = [5, 11, 3, 13, 4, 8, 19, 1];

function fun(arr) {
	let Index = 0, temp = null;
	for (let i = 0; i < arr.length - 1; i++){
		Index = i;
		for (let j = i + 1; j < arr.length; j++){
			if (arr[j] < arr[Index]) Index = j;
		}
		
		temp = arr[Index];
		arr[Index] = arr[i];
		arr[i] = temp;
	}
	return arr;
}
console.log(fun(arr));