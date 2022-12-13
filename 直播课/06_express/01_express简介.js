const express = require("express");


const app = express();



/**
 * express 安装
 *  yarn init -y 
 *  yarn add express
 * 
 * 使用：
 *  require("express")  引入express
 *  express() 创建并返回 express 对象
 *  express().listen() 监听端口
 * 
 * express 监听请求  get post ...
 *  express.get() 总共有三个参数
 *      第一个参数 request   第二个参数 response  第三个参数 next
 *          request：请求对象，可以收到客户端请求的一系列数据，比如 url 请求头 参数 等
 *          response: 相应对象，可以返回给对象数据，状态码等
 *              response.sendStatus  response.status  response.send()
 *          next(): 用户中间件继续向下放行，遇到send 函数就终止
 */

// get 请求
// app.get("/", (req, res) => {
//     console.log("请求进来了", req.url);

//     res.sendStatus(200);

//     // res.status(200);
//     // res.send("hello express")
// })

// 中间件   next() 可以对res对象进行组装
app.use("/", (req, res, next) => {
    // res.send("<h1>我是中间件111</h1>")
    res.text = "111";
    next();
})
app.use("/", (req, res, next) => {
    res.text += "222";
    // res.send("<h1>我是中间件222</h1>")
    next()
})
app.use("/", (req, res) => {
    res.text += "333";
    res.send(`<h1>${res.text}</h1>`)
})


app.listen(3000, () => {
    console.log("服务器启动在localhost:3000");
});
