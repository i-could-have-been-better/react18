// 模板配置
const express = require("express");
const path = require("path");
const app = express();
const cookieParsert = require("cookie-parser");

// 模板引擎 ejs
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

// 暴露公共资源
app.use(express.static(path.resolve(__dirname, "./public")))
// 处理body请求体
app.use(express.urlencoded({ extended: true }));
// 处理cookie
/** 
 * cookie 每次请求的时候都会携带上，作为一个服务器的判断条件一样，cookie的有效期，默认是 一次会话(session)
 * cookie 是不能被手动删除的，但是可以替换
 * cookie 的第三个参数 
 *  domain	String	Domain name for the cookie. Defaults to the domain name of the app.
    encode	Function	A synchronous function used for cookie value encoding. Defaults to encodeURIComponent.
    expires	Date	Expiry date of the cookie in GMT. If not specified or set to 0, creates a session cookie.
    httpOnly	Boolean	Flags the cookie to be accessible only by the web server.
    maxAge	Number	Convenient option for setting the expiry time relative to the current time in milliseconds.
    path	String	Path for the cookie. Defaults to “/”.
    secure	Boolean	Marks the cookie to be used with HTTPS only.
    signed	Boolean	Indicates if the cookie should be signed.
    sameSite	Boolean or String	Value of the “SameSite” Set-Cookie attribute. More information at https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00#section-4.1.1.
 */
app.use(cookieParsert());

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '123') {
    res.cookie("username", username, {
      maxAge: 1000 * 60 * 60 * 24 * 30 // 一个月 
    });
    res.redirect("/user/list")
  } else {
    res.send("登录失败")
  }
})

// 路由中间件
app.use("/user", require("./router/user"));
app.use("/cookie", require("./router/cookie"));

app.use((req, res) => {
  res.send("<h1>资源被外星人劫持了！</h1>")
})

app.listen(4000, () => {
  console.log("服务器启动了");
})
