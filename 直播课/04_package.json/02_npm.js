/**
 * package.json => scripts
 *  scripts:
 *    可以自定一些指令
 *    定义以后可以直接通过 npm 来执行这些命令
 *    start 与 test 可以直接通过 npm start / test 进行执行
 *    其他命令需要加 npm run xxx 执行
 *  
 * npm 镜像：
 *    npm 的仓库位于国外，我们在访问得时候会受区域限制，下载可能会失败，和下载速度慢
 *    为了解决这个问题：可以在 npm 中配置一个镜像服务器
 *    镜像服务器的配置
 *      在系统中安装cnpm 
 *        npm install -g cnpm --registry=https://registry.npmmirror.com
 *      彻底修改 npm 仓库地址
 *        npm set registry https://registry.npmmirror.com
 *        还原到原版仓库
 *          npm config delete registry
 */