# TypeScript：

​	前言：基于javaScript基础上，添加了一些类型限制，一些强大的功能，可以说成javaScript超集	

​	浏览器不认识TypeScript，需要将ts代码转换成js代码进行浏览器的解析

### 安装环境：

​	基于node.js 的环境，安装node.js 

​	全局安装TypeScript：npm install -g typescript

​	查看；tsc -V

​	编译ts代码：tsc  xxx.ts 即可生成 xxx.js



### 第一章基础：

​	类型限制:

​		概念：TypeScript与javaScript最大的区别是给变量函数，添加了类型的限制，解决了一些难以发现的错误

```ts
//对于变量类型的限制
let a : string
a = "hello"
a = '100'
//如果直接赋值，ts 会给我们默认添加一个类型
let b = true
// b = 111 //报错
b = false

//对于函数参数的限制
function sum(a:number,b:number) {
    return a + b
}
console.log(sum(100,200))

//对于函数返回值的限制
function connect(start:string,end:string):string {
    return start + end
}
let result = connect("你好", "世界");
console.log(result)
```

#### 基本类型：

##### 	类型声明：

​		类型声明式TS非常重要的一个特点，通过类型声明可以指定TS变量（参数，形参）的类型

​		指定类型后，当变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错

​		类型声明给变量设置了类型，使变量只能存储某种类型的值	

​		语法：

```
let 变量:类型
let 变量:类型 = 值
function(参数:类型):类型{}		第三个类型为：返回值类型
```

##### 	自动类型判断：

​		TS自身拥有类型判断机制，当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型

​		所以如果你的变量的声明和赋值是同时进行的，那么变量的类型那么就已经注定了

##### 	类型：

​		number类型：任意数字

​		string类型：任意字符串

​		boolean：true和false

​		字面量：限制变量的值就是该字面量的值

​		any：任意类型

​		unknow：类型安全的any

​		void：没有值（或undefined）

​		never：不能说任何值

​		object：任意的JS对象

​		array：任意js数组

​		tuple：元素，TS新增类型，固定长度数组

​		enum：枚举，TS中新增类型

```ts
//自动类型判断：
let a = 10      //a为number类型
console.log(typeof a)
let b = "hello" //b为stringl类型
console.log(typeof b)

//字面量创建 可以用 | 符号进行值的扩展
let c : "hello" | 100;
// c = 420 //报错，没有这个值
c = 100
console.log(c)

//any：任意类型  并且 可以为任何值赋值（慎用）
let d : any;
d = 100
d = "hello"
d = true
c = d

//unknow类型，安全的any类型，可以是任意类型的值，但是不能赋值给其他类型的变量
let e : unknown
e = "hello"
e = 100
e = true
// c = e //报错，c 不是unknow类型

//void类型，空值或者undefined
function fn1():void {
    // return
    return undefined
}

//never不能是任何值，一般处理报错信息，用得比较少
function fn2():never {
    // return; 报错因为是undefined
    throw new Error("报错了") 
}
// Object 类型
//声明方式 一
let o : Object
o = {
    name:"孙悟空",
    sex:'男'
}
//声明方式二：不能多一个也不能少一个，并且类型要一一对应起来
let o1 : {
    name:string,
    age:number
}
o1 = {
    name:"猪八戒",
    age:18
}

//array数组类型得声明：
let arr1 : string[]
let arr2 : Array<number>

//tuple元组数据类型：数组长度和类型都已经固定了
let tu1 : [string,number]
tu1 = ["你好",2021]

//enum：枚举数据类型，适用于固定得值
enum Gender{
    meal,
    falemeal
}
let sunwukong :{
    name : string,
    gender:Gender
}
sunwukong = {
    name:"孙悟空",
    gender:Gender.meal
}
```

​		

#### TS编译选项：

​	出现得问题：ts文件不同于js文件，js文件不用编译，浏览器也认识，但是ts 文件就不行，需要编译器编译通过了生成 js 文件再放入网页中才能显示，这就导致了一个问题那么就是，每次需改ts文件都要编译会非常得麻烦，ts考虑到了这一点就推出了 -w 得命令，可以子自动编译：

##### 	使用方式：

​		单个文件：tsc 文件 -w

​		全部得文件：tsc  -w

​		配置选项：新建一个 tsconfig.json文件进行配置

#### tsconfig.json相关配置项：

##### 		include：

​			包含，写的是路径，如果文件再路径中得话就会被编译：

​				** 代表任意文件夹

​				* 代表任意文件

##### 		exclude：

​			不包含，与include相对得一个选项

​			默认值：["node_modules","bower_components", "jspm_packages"]

##### 		extends：

​			继承其他得配置文件			

##### 		files：

​			配置单个文件

```json
{
  //配置选项
  "include": [
    "./src/**/*"    //代表得意思是src目录下得任意文件夹和任意文件
  ],
  "exclude": [
    "./src/hello/**/*"  //代表得意思src目录下中得hello文件下得所有ts文件都不编译
  ]
}
```

##### 		compilerOptions：【重要】

```
target：用来指定ts被编译为的ES版本	
	版本:es3 , es5 , es6 , es205 ...
module：指定要使用的模块化的规范：
	规范：es2015，commonjs,amd,umd,es6,es2020,esnext
lib：用来指定项目中使用的库	默认不用动他
outDir：指定编译后的代码文件在哪
outFile：将代码合并成一个文件，设置后所有的文件合并到一个文件中
allowJs：是否对js文件进行编译：默认 false
checkJS：是否检查js代码是否符合语法规范，默认false
removeComments：编译后的文件是否需要注释 默认false
noEmit：不生成编译后的文件	默认false
noEmitOnError：当有错误的时候不生成编译文件，默认false
alwaysStrict：编译后的文件是否开启严格模式，默认false 		手动开启："use strict"
noImplicitAny：是否可以出现隐式的any，默认false
noImplicitThis:不允许不明确的this
strictNullCheckes:严格检查空值
strict：所有严格检查的总开关，建议true
```

#### webpack打包 TS 代码：简单版本，不包含兼容性

​	第一步：npm init -y ，初始化package.json文件

​	第二步：安装依赖：npm install --save-dev webpack webpack-cli typescript ts-loader

​					安装依赖：html-webpack-plugin   clean-webpack-plugin  webpack-dev-server



​	第三步：新建webpack.config.js文件

​	第四步：配置：

```js
const path = require("path")
//引入 clean-webpack-plugin
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
//引入html-webpack-plugin
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    //指定入口文件
    entry:'./src/index.ts',
    //指定打包文件的目录
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:'bundle.js'
    },
    //需要配置的loader
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:'ts-loader',
                exclude:/node_modules/
            }
        ]
    },
    //plugin插件
    plugins:[
        //每一次打包都把原来的文件删除之后重新加载进去
        new CleanWebpackPlugin(),
        //并且指定模板
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    //用来设置引用的模块
    resolve:{
        extensions:[".ts",".js"]
    }
}
```

​	第五步：配置 tsconfig.json文件：

```
{
  "compilerOptions": {
    "module": "ES6",
    "target": "ES6",
    "strict": true
  }
}
```

#### TS与babel进行连用（完整版）：

先前依赖

npm install --save-dev webpack webpack-cli typescript ts-loader

html-webpack-plugin   clean-webpack-plugin  webpack-dev-server

​		下载依赖：@babel/core   @babel/preset-env babel-loader core-js

​		使用：

```
const path = require("path")

//引入 clean-webpack-plugin
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

//引入html-webpack-plugin
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    //指定入口文件
    entry:'./src/index.ts',
    //指定打包文件的目录
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:'bundle.js',
        //告诉webpack不使用箭头函数
        environment:{
            arrowFunction:false
        }
    },
    //需要配置的loader
    module:{
        rules:[
            {
                test:/\.ts$/,
                //要使用的loader
                use:[
                    //配置babel-loader
                    {
                      loader:'babel-loader',
                        options:{
                          //设置预定义的环境：
                            presets:[
                                [
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //要兼容的目标浏览器
                                        targets:{
                                            "chrome":'88'
                                        },
                                        //指定corejs的版本
                                        "corejs":'3',
                                        //使用corejs的方式 'usage' 为按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                exclude:/node_modules/
            }
        ]
    },
    //plugin插件
    plugins:[
        //每一次打包都把原来的文件删除之后重新加载进去
        new CleanWebpackPlugin(),
        //并且指定模板
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    //用来设置引用的模块
    resolve:{
        extensions:[".ts",".js"]
    }
}
```

​	package.json文件代码：

```json
{
  "name": "part3",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "start": "webpack serve --open chrome.exe"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.12.10",
    "@babel/preset-env": "^7.12.11",
    "babel-loader": "^8.2.2",
    "clean-webpack-plugin": "^3.0.0",
    "core-js": "^3.8.3",
    "html-webpack-plugin": "^4.5.1",
    "ts-loader": "^8.0.14",
    "typescript": "^4.1.3",
    "webpack": "^5.19.0",
    "webpack-cli": "^4.4.0",
    "webpack-dev-server": "^3.11.2"
  }
}
```



### 第二章面向对象：

#### 		构造函数与this

​			构造函数：当类被实例化的时候构造函数就会执行

​			this：在类中this指向当前实例对象

​			static：静态属性，定义类方法，类属性的

​			

```
console.log("构造器")
class Person{
    name:string;
    age:number
    constructor(name:string,age:number) {
        this.name = name;
        this.age = age
    }
    show(){
        console.log("大家好我是"+this.name)
    }
}

let xiaowang = new Person("xiaowang",12 )
console.log(xiaowang);
xiaowang.show()

let xaioming = new Person("xaioming",16 )
console.log(xaioming);
xaioming.show()
```

#### 	面对对象之继承：

​		关键子：extends

​		作用：被继承的类叫做给类的父类，该类有父类的所有属性和方法

​		如果子类添加了新的方法的话，那么他就在父类的基础上进行了扩展，

​		如果子类的方法和父类的方法一样子的话，那么子类的方法会替代父类的方法，这种方式我们称之为重写

​		关键字：super:

​			这里代表父类，在子类的construct函数中需要调用一下父类的构造函数不然会语法出错

```ts

    class Person{
        age:number
        name:string
        constructor(name:string,age:number) {
            this.name = name
            this.age = age
        }
        sayHi(){
            console.log(`${this.name}他在在大喊~`)
        }
    }

    class Male extends Person{
        sex : boolean
        constructor(name:string,age:number,sex:boolean) {
            super(name,age);
            this.sex = sex
        }

        run(){
            console.log("他会打篮球")
        }
    }
```

#### 抽象类:

​	概念：不能创建实例，可以被其他类继承，

​	使用：以 abstract 开头的类叫做抽象类

​	抽象方法：要使用 abstract 开头，没有方法体，抽象方法只能定义在抽象类中，子类必须对抽象方法重写

```
(function () {
    //定义一个抽象类
    abstract class Peson {
        uname:string
        constructor(uname:string) {
            this.uname = uname
        }
        //抽象方法
        abstract saHi():void;
    }

    class Male extends Peson{
        age : number
        constructor(uname:string,age:number) {
            super(uname);
            this.age = age
        }
        saHi(){
            console.log(`${this.uname}在叫`);
        }
    }

    let Xiaoming = new Male("小明",18)
    console.log(Xiaoming)
    Xiaoming.saHi()

})()
```

#### 接口：

​	关键子：interface

​	概念：接口用来定义类的结构，用来定义一个类中应该包含哪些属性和方法，同时接口也可以当成类型声明来使用

​	作用：接口可以定义类的时候去限制类的结构，接口中的所有属性都不能有实际的值，接口只定义对象的结构，而不考虑实际值，在接口中所有的方法都是抽象方法

​	实现接口：implements

```js
       //接口当类型声明来使用
        //普通方式
        type Mytype = {
            name:string,
            age:number
        }
        let o : Mytype
        o = {
            name:"孙悟空",
            age:18
        }

        //接口的方式
        interface Myinterface{
            name:string,
            age:number
        }
        interface Myinterface{
            gender:string
        }
        let o2 : Myinterface
        o2 = {
            name:'猪八戒',
            age:18,
            gender:'男'
        }

        //在类中使用
        interface Myinter{
            name:string
            sayHi():void
        }
        //实现接口用implements
        class Dog implements Myinter{
            name:string
            constructor(name:string) {
                this.name = name
            }
            sayHi(){
                console.log("汪汪汪~")
            }
        }
```

#### 属性的封装：

​	TS可以在类的属性前可以加修饰符：

##### 		public：

​			公共的可以在任意位置进行修改

##### 		private：

​			私有的只能在类中访问，

​			使用：在类的内部定义方法，用来获取属性

​			getter方法：获取数据

​			setter方法：设置数据

##### 		protected

​			保护的属性

​			只能在当前类和继承类中使用

```js
(
    //属性的封装：public private protected，
    //public：公共的,默认
    //private：私有的：只能在类的内部进行访问，外部需要通过getter 和 setter 方法进行访问
    //protected：保护的，只能在类的内部或者继承类中进行使用
    function () {

        class Person{
            name:string;
            age : number;
            private _gender:string       //私有属性
            protected _money : number   //保护属性，在类的外部不能访问，但是可以在子类中访问

            constructor(name:string,age:number,gender:string,money:number) {
                this.name = name
                this.age = age
                this._gender = gender
                this._money = money
            }
            /* //获取gender属性
            getGender():string{
                return this.gender
            }
            //设置属性
            setGender(value:string){
                this.gender = value
            }*/
            //ts提供的一种方式
            //注意:get后面的名字不要与上面定义的名字重名
            get gender(){
                return this._gender
            }
            set gender(value:string){
                this._gender = value
            }
        }

        class A extends Person{

            show() {
                console.log("我有"+this._money)
            }

        }
```

```
//简便写法：可以直接写 保护属性 变量：类型的形式，construct会自动赋值
class B{
    constructor(public name:string,public age :number) {
    }
}

let b1 = new B("李xx",18)
console.log(b1)
```

#### 泛型:

​	概念：在遇到类型不明确的时候可以使用泛型

​	使用方式：	

​		函数 function fn<T>()

​		类：class my<T>{}

​		接口一起使用  function fn2<T extends MyInterface> {}

```ts
//泛型的使用
//作用：泛型指定一些不不明确类型的变量，因为要避免用any所以采取了用泛型
function () {
    //泛型在函数中使用 为函数指定T泛型
    function fn<T>(a:T):T {
        return a
    }
    console.log(fn("Hello"))
    
    //泛型在接口中的使用
    interface MyInterface{
        length:number
    }

    function fn2<T extends MyInterface> (a : T){
        return a
    }
    //因为字符串中有length的方法
    let my = fn2("hello")
    console.log(my.length)

    let my1 = fn2({
        length:123123
    })
    console.log(my1.length)
    
    //泛型在类中使用
    class Dog<T>{
        name : T
        constructor(name:T) {
            this.name = name
        }
    }
    let d1 = new Dog("旺财")
    console.log(d1)
```

#### 面对对象小练习：

​	引入之前配置好的webpack ，然而这些插件还不够用，能够处理 ts 和 但是css 和 图片什么的都不能处理，这里需要继续配置插件

​	依赖：npm install -D less less-loader css-loader style-loader

​	安装css插件：

​		npm install --save-dev   postcss  postcss-loader  postcss-preset-env

​	修改配置文件：

```js
//配置less的配置信息
            {
                test:/\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    //配置postcss
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions:{
                                plugins:[
                                    [
                                        'postcss-preset-env',
                                        {
                                            browsers:'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }//配置less的配置信息
{
    test:/\.less$/,
    use: [
        "style-loader",
        "css-loader",
        "less-loader"
    ]
}
```











