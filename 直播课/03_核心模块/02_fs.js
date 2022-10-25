/**
 * fs核心模块,读取文件，新建文件，删除文件等操作
 * 
 */
const fs = require("node:fs");
const path = require("node:path");

// console.log(fs);
// readFileSync
const file = fs.readFileSync(path.resolve(__dirname, "./hello.txt"));
console.log(file.toString());

// readFile
fs.readFile(path.resolve(__dirname, "./hello.txt"), (ero, data) => {
    if (ero) {
        return;
    }
    console.log(data.toString());
})

console.log("执行栈代码");

// 
fs.appendFileSync(path.resolve(__dirname, "./hello.txt"), " 哈哈哈哈")


