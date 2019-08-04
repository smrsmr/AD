
// const fs = require('fs');
// const readFile = function (filename) {
//     return new Promise(function (resolve,reject) {
//         fs.readFile(filename,function (error,data) {
//             if (error) return reject(error);
//             resolve (data)
//         })
//     })
// }
// const getFile = async function () {
//     const f1 = await readFile('./a.txt').then((data)=>{
//         console.log(data)
//         fs.writeFile('./b.txt',data,(err)=>{if (err) throw err});
//     }).catch((err)=>{
//         console.log(err)
//     });
//     // console.log(f1);
//     // console.log(f2);
// };
// getFile();

async function timesOut(ms) {
	await new Promise((res) => {
		setTimeout(res,ms)
	})
};
async function asyncProit(value, ms) {
	await timesOut(ms);
	console.log(value);
};
asyncProit('hello async123', 3000)