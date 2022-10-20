console.log("commonJS 模块化");

// 分别暴露
// exports.swk = "孙悟空";
// exports.shs = '沙和尚';
// exports.zbj = "猪八戒"


// 集中暴露
// module.exports = {
//   swk: "孙悟空",
//   shs: "沙和尚",
//   zbj: "猪八戒",
// }

// exports 与 module.exports 的区别
// exports 是 moudle.exports 的一个映射
// exports = module.exports = {}
// 如果暴露方式为 exports = {} 就改变了exports 的指向问题，
// require 获取的暴露对象始终是 module.exports 所以 epxorts = {} 是错误的

/** 错误的写法 */
// exports = {
//   swk: "孙悟空",
//   shs: "沙和尚",
//   zbj: "猪八戒",
// }

