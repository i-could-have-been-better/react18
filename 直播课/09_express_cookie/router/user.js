// 用户路由
const express = require("express");
const fs = require("fs");
const path = require("path");
let data = require("../data/student.json");

const router = express.Router();

// 用户列表
router.get("/list", (req, res) => {
  console.log(req.cookies.username);
  if (req.cookies.username) {
    res.render("student.ejs", { data })
  } else {
    res.redirect("/");
  }
})

// 添加用户
router.post("/add_student", (req, res, next) => {
  const { name, gender, address } = req.body;
  data.push({
    name,
    address,
    gender
  })

  next();
})


// 删除用户
router.get("/delete", (req, res, next) => {
  const { index } = req.query;
  data.splice(index, 1);
  next();
})



// 修改用户界面
router.get("/update/:index", (req, res) => {
  const { index } = req.params;
  const student = data[index];
  res.render("update", { student, index });
})

// 修改用户信息
router.post("/update_confirm", (req, res, next) => {
  const { index } = req.query;
  data[index] = req.body;
  next();
})

router.use((req, res) => {
  fs.writeFile(path.resolve(__dirname, "../data", "student.json"), JSON.stringify(data), (err, b) => {
    if (err) {
      res.send("添加失败")
    }
    res.redirect("/user/list");
  });
})



module.exports = router



