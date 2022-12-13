const express = require("express");

/*
    nodemon 的出现，每次修改服务器代码都需要重新运行，nodemon可以监听文件的变化
        nodemon 的下载
            全局下载
                node install -g nodemon
                yarn global add nodemon

                运行 ： nodemon 路径

            局部安装
                node install nodemon
                yarn add nodemon

                运行： npx nodemon 路径
            
            配置别名
                在package.json 中的scripts 中配置
                {
                    "start" : "npx nodemon 路径"
                }
            
                使用： yarn start



*/




const app = express();

app.get("/hello", (req, res) => {
    res.send("访问了hello路由!!!")
})

app.listen(3000, () => {
    console.log("服务器已启动");
})