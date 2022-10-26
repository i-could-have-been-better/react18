/**
 * 早期的 npm 存在很多的问题：
 *    所以有很多的厂商尝试着开发了一些代替npm的工具
 *    比如：yarn pnpm
 *    
 *    在之前：这些第三方的工具相较于 npm 具有的很多的优势
 *      但随着时间的推移，npm 也在不断的迭代，所以今天，npm与 其他工具的差距不是很大
 *  
 *    和 npm 相比 yarn 的下载速度会更快一些   
 * 
 * yarn
 *  安装：
 *     corepack enable
 *     yarn init -2
 *  镜像配置：
 *     yarn config set registry https://registry.npmmirror.com
 *  
 *  删除配置：
 *     yarn config delete registry
 *  
 *  指令：
 *    yarn init （初始化，创建package.json）
      yarn add xxx（添加依赖）
      yarn add xxx -D（添加开发依赖）
      yarn remove xxx（移除包）
      yarn（自动安装依赖）
      yarn run（执行自定义脚本）
      yarn <指令>（执行自定义脚本）
      yarn global add（全局安装）
      yarn global remove（全局移除）
      yarn global bin（全局安装目录

 * pnpm
 *  安装：
 *    npm install -g pnpm
 *  命令：
 *    pnpm init（初始化项目，添加package.json）
      pnpm add xxx（添加依赖）
      pnpm add -D xxx（添加开发依赖）
      pnpm add -G xxx（添加全局包）
      pnpm install（安装依赖）
      pnpm remove xxx（移除包）
    配置：
      config set registry https://registry.npmmirror.com
    恢复：
      pnpm config delete registry
 */