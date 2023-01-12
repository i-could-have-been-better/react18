// 用户路由
const express = require("express");
const router = express.Router();

router.get("/get", (req, res) => {
  console.log(req.cookies.username);
  res.send("获取cookie")
})

router.get("/set", (req, res) => {
  res.cookie("username", "zhubajie");
  res.send("设置cookie成功")
})

module.exports = router
