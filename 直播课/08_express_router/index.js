// 模板配置
const express = require("express");
const path = require("path");
const app = express();

// 模板引擎 ejs
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

// 暴露公共资源
app.use(express.static(path.resolve(__dirname, "./public")))
// 处理body请求体
app.use(express.urlencoded({ extended: true }));

// 路由中间件
app.use("/user", require("./router/user"));

app.use((req, res) => {
  res.send("<h1>资源被外星人劫持了！</h1>")
})

app.listen(4000, () => {
  console.log("服务器启动了");
})
