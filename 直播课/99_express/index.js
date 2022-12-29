// 模板配置
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// 模板引擎 ejs
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

// 暴露公共资源
app.use(express.static(path.resolve(__dirname, "./public")))
// 处理body请求体
app.use(express.urlencoded({ extended: true }));

app.get("/student", (req, res) => {
  const data = require("./data/student.json");
  res.render("student.ejs", { data })
})

// 添加用户
app.post("/add_student", (req, res) => {
  const { name, gender, address } = req.body;
  const data = require("./data/student.json");
  data.push({
    name,
    address,
    gender
  })
  fs.writeFile(path.resolve(__dirname, "data", "student.json"), JSON.stringify(data), (err, b) => {
    if (err) {
      res.send("添加失败")
    }
    res.redirect("/student");
  });
})


// 删除用户
app.get("/delete", (req, res) => {
  const { index } = req.query;
  const data = require("./data/student.json");
  data.splice(index, 1);

  fs.writeFile(path.resolve(__dirname, "data", "student.json"), JSON.stringify(data), (err, b) => {
    if (err) {
      res.send("添加失败")
    }
    res.redirect("/student");
  });
})

// 修改用户界面
app.get("/update/:index", (req, res) => {
  const { index } = req.params;
  const data = require("./data/student.json");
  const student = data[index];
  res.render("update", { student, index });
})

// 修改用户信息
app.post("/update_confirm", (req, res) => {
  const { index } = req.query;
  const data = require("./data/student.json");
  data[index] = req.body;

  fs.writeFile(path.resolve(__dirname, "data", "student.json"), JSON.stringify(data), (err, b) => {
    if (err) {
      res.send("操作失败")
    }
    res.redirect("/student");
  });
})


app.use((req, res) => {
  res.send("<h1>资源被外星人劫持了！</h1>")
})


app.listen(4000, () => {
  console.log("服务器启动了");
})
