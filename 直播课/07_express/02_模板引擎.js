// 模板配置
const express = require("express");
const path = require("path");

const app = express();

const data = [{
  name: "孙悟空",
  gender: "男",
  address: "花果山"
}, {
  name: "猪八戒",
  gender: "男",
  address: "高老庄"
}, {
  name: "嫦娥",
  gender: "女",
  address: "广寒宫"
}]


// 模板引擎 ejs
app.set("view engine", "ejs");
app.set("views", "./views");

// 暴露公共资源
app.use(express.static(path.resolve(__dirname, "./public")))


app.get("/student", (req, res) => {
  res.render("student", { data })
})


app.use((req, res) => {
  res.send("<h1>资源被外星人劫持了！</h1>")
})


app.listen(4000, () => {
  console.log("服务器启动了");
})
