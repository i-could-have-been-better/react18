// 模板配置
const express = require("express");
const path = require("path");
const expressSession = require("express-session")
const app = express();
const FileStore = require('session-file-store')(expressSession);

// 模板引擎 ejs
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

// 暴露公共资源
app.use(express.static(path.resolve(__dirname, "./public")))
// 处理body请求体
app.use(express.urlencoded({ extended: true }));
// 处理session
app.use(expressSession({
  secret: "hahh",
  store: new FileStore({
    path: path.resolve(__dirname, "static", "sessions"),
    ttl: 3600,
    reapInterval: 3600,
  }),
  cookie: { maxAge: 3600 }
}))

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '123') {
    req.session.username = 'admin'
    req.session.save(() => {
      res.redirect("/user/list")
    })
  } else {
    res.send("登录失败")
  }
})

// 路由中间件
app.use("/user", require("./router/user"));

app.use((req, res) => {
  res.send("<h1>资源被外星人劫持了！</h1>")
})

app.listen(4000, () => {
  console.log("服务器启动了");
})
