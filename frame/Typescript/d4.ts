//interface 接口
/**
 * 必有属性 缺一不可
 */
/* interface text{
	width: string;
	height: string;
	color: string;
}

function set(result:text): void{
	console.log(`width:${result.width}--height:${result.height}--color:${result.color}'`);
}

set({width:'30px',height:'50px',color:'red'}) */
//换种方式传参 可携带接口里面未定义的属性
/* interface text{
	width: string;
	height: string;
	color: string;
}

function set(result:text): void{
	console.log(`width:${result.width}--height:${result.height}--color:${result.color}'`);
}
let obj = {width:'30px',height:'50px',color:'red',fontSize:'20px'}
set(obj) */


//可选接口 属性
/* interface text{
	width: string;
	height?: string;
	color: string;
}

function set(result:text): void{
	
	console.log(`width:${result.width}--height:${result.height}--color:${result.color}'`);
}

// set({width:'30px',height:'50px',color:'red'})
set({width:'30px',color:'red'})

//只读属性接口

interface Point {
	readonly x: number;
	readonly y: number;
}

let p: Point = { x: 22, y: 33 };
p.x = 44  //Cannot assign to 'x' because it is a read-only property  */

/* interface contrastFunc {
	(n1: number, n2: number): boolean;
}

let contrast:contrastFunc = function(n1:number,n2:number) {
	if (n1 > n2) return true;
	return false;
}

console.log(contrast(22, 33)); */

/* interface MinFunc {
	(...result: number[]): number;
}

let Min: MinFunc = function (...result: number[]) {
	return result.slice(1).reduce((pre, curr) => {
		if (pre > curr) return pre = curr;
		return pre;
	},result[0])
}

console.log(Min(100,200,15,18,19,3,88)); */


