/**
 * fs的其他方法
 *  fs.mkdir  新建目录
 *  fs.rmdir  删除目录
 *  fs.rm     删除文件
 *  fs.rename 重命名(剪切)
 *  fs.copyFile 复制文件
 */

const fs = require("node:fs/promises");
const path = require("node:path");

// fs.mkdir(path.resolve(__dirname, "./hello")).then(res => {
//     console.log("创建成功~");
// })

// fs.mkdir(path.resolve(__dirname, "./hello/dbbxll"), { recursive: true }).then(res => {
//     console.log("创建成功~");
// })

// fs.rmdir(path.resolve(__dirname, "./hello")).then(res => {
//     console.log("删除成功");
// })

// fs.rmdir(path.resolve(__dirname, "./hello"), { recursive: true }).then(res => {
//     console.log("删除成功");
// })

// fs.rename(path.resolve(__dirname, "./hello.txt"), path.resolve(__dirname, "./hello/hello.txt")).then(res => {
//     console.log("重命名");
// })

fs.copyFile(path.resolve(__dirname, "./hello/hello.txt"), path.resolve(__dirname, "./hello.txt")).then(res => {
    console.log("复制文件");
})