/**
 * commonJS 是一个闭包函数，引入模块的时候相当于执行模块，module  exports  require 都是实参
 * 证明commonJS 是一个函数，函数中特有的argment  (function(exports , module, require , filename, dirname){})
*/

console.log(arguments);


console.log(__filename);  // 当前文件绝对路径
console.log(__dirname);   // 当前目录文件夹路径