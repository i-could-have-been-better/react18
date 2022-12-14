const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "./public")))
app.use(express.urlencoded());  // 开启可以接受body请求体内容

app.get("/", (req, res) => {
  res.send("服务器已收到请求")
})

// get请求
app.get("/login", (req, res) => {
  console.log(req.query, "query");
  const { username, password } = req.query;

  if (username === 'ding' && password === '123123') {
    res.send(`${username}登录成功!`)
  } else {
    res.send("登录失败")
  }

})

// params形式
app.get("/hello/:id", (req, res) => {
  const { id } = req.params;

  res.send(`返回了hello路由,传输的参数: ${id}`)

})

// post 形式
app.post("/login", (req, res) => {
  const { username, password } = req.body
  res.send(`登录成功${username},${password}`)
})


app.listen(4000, () => {
  console.log("服务器启动了");
})