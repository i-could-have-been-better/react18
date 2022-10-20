/**
 * 引入模块m1 获取暴露的属性赋值给m1
 * 用require引入模块的同时会执行文件
 * 模块化暴露的写法   module.exports 或者 exports
 *    exports 与 module.exports 的区别
 *    exports 是 moudle.exports 的一个映射
 *    exports = module.exports = {}
 *    如果暴露方式为 exports = {} 就改变了exports 的指向问题，
 *    require 获取的暴露对象始终是 module.exports 所以 epxorts = {} 是错误的
 * 引入的时候可以省略文件扩展名，补充的规则 .js .json .node(特殊)
 * 前端规范：ES模块化与commonJS模块化, 默认node会采用commonJS模块化，已cjs扩展名的也是commonJS模块化
 * 引入系统模块：直接写系统模块名称比如：path 或者 node:path
 * 引入一个大模块：需要拥有一个入口文件，入口文件中单独引入多个子文件  引入一个文件默认node的补充引入index  /hello === /hello/index.js
 * 
*/



const m1 = require("./m1");
const cjs = require("./m1.cjs");
// const path = require("path");
const path = require("node:path");
const index = require("./hello");


console.log(index);