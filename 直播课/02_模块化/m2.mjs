console.log("ES 模块化");
// es模块化

// console.log(exports);   // 报错，当前是ES的模块化

// es 分别暴露
export const a = 10;
export const b = 10;
export const c = 10;

// 默认暴露  一个模块只能有一个
let name = "孙悟空"
export default name;