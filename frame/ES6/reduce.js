//复合函数
const square = v => v * v;
const double = v => v * 2;
const addOne = v => v + 1;

const pipe = (...fns) => x => {
	return fns.reduce((v, fn) => {
		return fn(v);
	},x);
};
const res = pipe(square, double, addOne);

// console.log(res(3));

const nest = (items, id = null, link = "parent_id") =>
	items
		.filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }))

const comments = [
  { id: 1, parent_id: null, text: "First reply to post." },
  { id: 2, parent_id: 1, text: "First reply to comment #1." },
  { id: 3, parent_id: 1, text: "Second reply to comment #1." },
  { id: 4, parent_id: 3, text: "First reply to comment #3." },
  { id: 5, parent_id: 4, text: "First reply to comment #4." },
  { id: 6, parent_id: null, text: "Second reply to post." }
]

console.log(nest(comments));
/**
 * 在上面的示例中，打断自身的基本条件为 filter() 返回一个空数组。链上 map() 并不会调用包含递归调用的回调函数，因此可以打破循环。
 */
