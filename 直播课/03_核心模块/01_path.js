/**
 * path 核心模块，获取文件的相对路径绝对路径，路径拼接等功能
 * 获取文件的绝对路径，path.resolve()
 * 拼接路径：path.join()
 * 
 */

const path = require("node:path");

console.log(path.resolve(path.join(__dirname, "01_path.js")));