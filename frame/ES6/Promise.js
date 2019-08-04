/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-01-02 16:21:51
 * @version $Id$
 */

function runAsync() {
	var p = new Promise(function (resolve,reject) {
		setTimeout(function () {
			var num = Math.floor(Math.random()*10);
			if ( num < 5 ) {
				resolve(num);
			} else {
				reject('数字太大了吧');
			}
		},200);
	});
	return p;
}
runAsync().then(function (data) {
	//console.log('resolved');
	//console.log(data)
},function (data) {
	//console.log('rejected');
	//console.log(data)
});

function LoradImgAsync(url) {
	return new Promise((resolve, reject) => {
		const image = new Image();
		image.onload = function () {
			resolve(image);
		};
		image.onerror = function () {
			reject(`error ${url}`);
		};
		image.src = url;
	});
}
/*LoradImgAsync('http://mat1.gtimg.com/autoguangzhou/gif/cz181030/pg2.gif').then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    });*/
let promise = new Promise((resolve, reject) => {
	console.log('1');
	resolve('2');
});
promise.then((data)=>{
	console.log(data);
});