// let foor: boolean = true;
// foor = false;
//定义数组类型写法
// let arr: number[] = [1, 2, 3, 4]
// console.log(arr);
// let arr: Array<number> = [1, 2, 5, 6]
// console.log(arr);
/**元组类型写法 */
/**
 * let arr: [number, string,number] = [321, 'this is ts',123]
	 console.log(arr);
 */
//枚举类型
/**
 * //当枚举类型里面的属性指定值的时候 输出的就是他的值
		enum statu { success = 1, error = 2 };
		let d: statu = statu.error;
		console.log(d);
		//如果没有指定值 那么他的值就是他的下标
		enum Color { red, yellow=3, blue };
		let c: Color = Color.red;
		console.log(c);
 */
// null 和 undefined 类型
/**
 * 	let n: null | undefined;
		n = null

		let u: undefined;
		u = undefined;
 */
//void类型 :typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。
/**
 * function sun():number {
		return 321
	}
	console.log(sun());
	function sunR():void {
		console.log(789);
	}
	sunR()
 */
//函数可选参数 加？表示该参数可选可不选
//可选参数必须配置到最后面
/**
 * function run(name: string, age?: number): string{
		if (age) {
			return `${name} --- ${age}`
		} else {
			return `${name} --- 年龄保密`
		}
	}
	console.log(run('smr'));
 */
//剩余参数
/**
 * function run(...result: number[]): number{
		let sum = 0;
		result.map((v, i) => {
			sum += v;
		})
		return sum;
	}
	console.log(run(1,2,3,4,5,6,7,8,9,10));
 */
//函数的重载 重姓名函数 会整合 调用的时候调用最后一个函数
/**
 * function getInfo(name: string): string;
	function getInfo(age: number): number;
	function getInfo(str: any): any{
		if (typeof str === 'string') {
			return `我是${str}`
		} else {
			return `今年${str}岁了`
		}
	}
	// console.log(getInfo('smr'));
	console.log(getInfo('smr'));
 */