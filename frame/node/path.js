const path = require('path');

// path.basename() 方法返回一个 path 的最后一部分
console.log(path.basename('foot/acc/d.html'));    //   d.html
console.log(path.basename('foot/acc/d.html','.html')); //   d
// path.extname() 方法返回 path 的扩展名，即从 path 的最后一部分中的最后一个 .（句号）字符到字符串结束。 如果 path 的最后一部分没有 . 或 path 的文件名（见 path.basename()）的第一个字符是 .，则返回一个空字符串。
console.log(path.extname('foo/fff/dfv.md'));
console.log(path.extname('foo/fff/dfv.'));
//
let pathFormat = path.format({
    root:'/foo',
    dir:'/hgh/fff',
    base:'file.txt'
});
console.log(pathFormat);  //   /hgh/fff\file.txt
// path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。
let pathJoin = path.join('/foo','ter/to','file.txt');
console.log(pathJoin);   //   \foo\ter\to\file.txt
//  path.normalize() 方法会规范化给定的 path，并解析 '..' 和 '.' 片段
console.log(path.normalize('C:\\\\\\temp\\\\foo\\bar\\..\\'));   //   C:\temp\foo\
//  path.parse() 方法返回一个对象，对象的属性表示 path 的元素
let pathParse = path.parse('/foot/user/index.html');
console.log(pathParse);
/*{ root: '/',
    dir: '/foot/user',
    base: 'index.html',
    ext: '.html',
    name: 'index' }*/
//
console.log('foo\\bar\\baz'.split(path.sep));
// path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径
// 如果没有传入 path 片段，则 path.resolve() 会返回当前工作目录的绝对路径
console.log(path.resolve('./user')); // E:\项目\AD\frame\node\user
console.log(path.resolve('/user')); // E:\user
console.log(path.resolve('.')); // E:\项目\AD\frame\node




