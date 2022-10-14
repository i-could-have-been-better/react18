# ES6-ES11

### Es6：

#### 	let ：

​		特性

​			1.不能重复声明

​			2.块级作用域

​			3.不存在变量提升

​			4.不影响作用域链

#### const:

​	特性：	

​		1.一定要赋值

​		2.一般常量大写（潜规则）

​		3.常量的值不能修改

​		4.块级作用域

​		5.对数组和对象的元素修改，不算做对常量的修改，不会报错

#### 解构赋值：

​	概念：允许按照一定模式从数组和对象种提取值，对变量进行赋值，这被称为解构赋值

```
	数组解构：
	const F4 = ["赵本山","刘能"，"宋小宝","小沈阳"]
	let [zhao,liu,song,xiao] = F4
	对象解构
	const zhao = {
		name:"赵本山",
		age:"？？"
		show:function(){
			console.log("我会演小品")
		}
	}	
	let {name,age,show} = zhao
```

#### 模板字符串：

​	声明：``	

​	特点:

​		内容中可以直接出现换行

​		变量拼接：${}

#### 对象简便写法：

​	概念：在ES6的语法中，对象的key和value如果发生了重名的话可以直接写变量名字，在对象中方法不需要写function

```js
const name = "小名"
function change (){
	console.log("我们可以改变你！")
}
const obj = {
	name,
	change,
	improve(){
		console.log("一定要加油哦！")
	}
}
```

#### 箭头函数：

​	概念：方便我们写函数

​	格式：() => {}

```
特点:
	1.this是静态的，this始终指向函数声明所在的作用域下的this指向（最重要）
	2.不能作为构造实例化对象
	3.不能使用arguments 变量
	4.箭头函数的简写：
		参数只有一个可以省略小括号
		代码体中只有一个条语句可以省略花括号，return也必须省略，并且当前的执行语句结果作为返回值return出去
```

​	适用场景：箭头函数适合于 this 无关的回调，定时器，数组的方法回调

​	不适用的场景：this有关的回调，事件回调，对象的方法

#### ES6允许给函数赋初始值；

​	1.形参初始值，具有默认值的参数，一般位置要靠后(潜规则)	

```js
function person (name,age,sex="男"){
	return `我的姓名：${name},我的年龄：${age}，我的性别：${sex}`
}
person("小明",18)
```

​	2.与解构赋值连用

```js
const person = ({name,age=12,sex}) => {
	console.log(`我的名字${name}，我的年龄${age}，我的性别${sex}`)
}
person({
	name:"张三",
	sex:"男"
})
```

#### ES6 rest 参数

​	格式：函数形参中使用：...变量名

``` 
注意：
	引入 rest 参数，用于获取函数的实参，用来代替 arguments
	rest参数必须要放在参数的最后使用
funtion person( a, b, ...args ){
	console.log(a)
	console.log(b)
	console.log(args)
}
person(1,2,3,4,5,6)
```

#### 扩展运算符：

​	格式：...数组

​	作用：数据解析出来

```
let movies = ["盗梦空间"，"女排","温暖的抱抱","误杀","大雄的新恐龙"]
console.log(...movies) 盗梦空间，女排，温暖的抱抱，误杀，大雄的新恐龙
```

​	应用：

​		数组的拼接:  之前用concat  现在用[...arr1, ...arr2]

​		数组的克隆：可以将伪数组转化为真正的数组

​			const divs = document.getquerySelectorAll("div")

​			cosnt divArr = [...divs]

#### Symbol：

​	概念：他是唯一的标识，拥有独一无二的值，

##### 	创建Symbol：

​		第一种：const s1 = Symbol()

​		第二种：const s2 = Symbol.for( )

​	特点：不能参与其他运算符的运算

​	数据类型：undefined，string , number , null , boolean, Symbol, Object

##### 	给对象添加属性：

​		第一种方式；

​			功能：需要给一个对象添加一个方法，同时不知道这个对象是否有这个方法

```js
        let obj2 = {
            up: Symbol(),
            down: Symbol()
        }

        obj1[obj2.up] = function() {
            console.log("我是Symbol up方法");
        }
        obj1[obj2.down] = function() {
            console.log("我是Symbol down方法");
        }
```

​		第二种方式:

​			功能：给对象添加一个独一无二的方法

```js
        let obj3 = {
            [Symbol("up")]: function() {
                console.log("up");
            },
            [Symbol("down")]: function() {
                console.log("down");
            }
        }
```

##### 	Symbol内置属性：

​		功能：为了扩展对象的操作，当发生instance 啊， replace match 等都会对应一个内置对象

​		使用：

```
      //检测是否通过
        class Person {
            static[Symbol.hasInstance]() {
                console.log("我是用来检测类型的");
                // return true
                return false
            }
        }
        let obj = {}
        console.log(obj instanceof Person);
      //是否展开
        let arr1 = [1, 2, 3]
        let arr2 = [4, 5, 6]
        //不能展开
        arr2[Symbol.isConcatSpreadable] = false
        console.log(arr1.concat(arr2)); //(4) [1, 2, 3, Array(3)]

```

​		文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator

#### 迭代器：

​	概念：迭代器是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构都只要部署到 intertor 接口，就可以完成操作

​	ES6创建了一个新的遍历命令 for...of 循环，Intertor 接口主要供 for..of 消费

​	具有Intertor 接口的数据(可以用 for...of 遍历)

​		Array 、Arugments 、Set 、Map、String、TypeArray、NodeList	

​	工作原理：

​		1.创建一个指针对象，指向当前数据结构的起始位置

​		2.第一次调用接口的next 方法，指针自动指向数据结构的第一个成员

​		3.接下来不断调用next方法，指针一直往后移动，直到指向最后一个成员

​		4.每调用 next 方法返回一个包含value 和 done 属性的对象

​	**注：需要自定义遍历数据时候，要想到迭代器**

​	使用方式:  for...in返回下标   ， for...of 返回值

```js
        const xiyou = ["唐僧", "孙悟空", "猪八戒", '沙僧']
        //使用for..of方法遍历
        for (key of xiyou) {
            console.log(key);
        }

        console.log(xiyou);
        //获取迭代器方法
        const iterator = xiyou[Symbol.iterator]()
        //手动遍历，如果发现done为true的时候停止遍历
        console.log(iterator.next()); //{value: "唐僧", done: false}
        console.log(iterator.next()); //{value: "孙悟空", done: false}
        console.log(iterator.next()); //{value: "猪八戒", done: false}
        console.log(iterator.next()); //{value: "沙僧", done: false}
        console.log(iterator.next()); //{value: undefined, done: true}
```

​	自定义迭代器的使用：

```js
        let xiyou = {
            name: ["唐僧", "孙悟空", "猪八戒", '沙僧'],
            // 自定义迭代器
            [Symbol.iterator]: function() {
                let index = -1
                let _this = this
                return {
                    next: function() {
                        index++
                        if (index < _this.name.length) {
                            let result = {
                                value: _this.name[index],
                                done: false
                            }
                            return result
                        } else {
                            return {
                                value: undefined,
                                done: true
                            }
                        }
                    }
                }
            }

        }
        //按需遍历
        for (key of xiyou) {
            console.log(key);
        }
```

#### 	生成器：

​		概念：是一种特殊的函数

​		创建方式：function * gen() {   }

​		遍历方式：gen.next()

​		由遍历方式可以看出他是一个迭代器对象

```js
        // 创建生成器对象
        //yield 用来分隔代码块
        function* gen() {
            // console.log("我是一直老虎");
            // console.log(111);
            yield "大家好"
            // console.log(222);
            yield "我是"
            // console.log(333);
            yield "一直老虎"
            // console.log(444);
        }

        let interator = gen()
            // console.log(interator); //错误的遍历
            // interator.next() //我是一直老虎
        console.log(interator.next())
        console.log(interator.next())
        console.log(interator.next())
        console.log(interator.next())
```

##### 	生成器的函数参数

​		如果我们给生成器传参，他和普通的函数一样，都可以接收到参数

​		其实next方法也是可以传参的，他传参给next-1 个 yield 的返回结果

```js
		function* gen(uname) {
            console.log(uname);
            const one = yield 111
            console.log(one);
            const two = yield 222
            console.log(two);
            const three = yield 333
            console.log(three);
        }

        let interator = gen("大兵兵")
        console.log(interator.next());
        console.log(interator.next("小恋恋"));
        console.log(interator.next("一直一直"));
        console.log(interator.next("在一起"));
```

##### 生成器函数实例（一）:

​	需求：需要在 1 秒钟输入111，再过 2 秒中输出222 ，再过 3 秒中输入 333

```js
        //生成器形式
        function one() {
            setTimeout(() => {
                console.log(111);
                //下一个yield
                interator.next()
            }, 1000)
        }
        function two() {
            setTimeout(() => {
                console.log(222);
                interator.next()
            }, 2000)
        }
        function three() {
            setTimeout(() => {
                console.log(333);
                interator.next()
            }, 3000)
        }
        //创建生成器对象
        function* gen() {
            yield one()
            yield two()
            yield three()
        }
        // 创建迭代器：
        let interator = gen()
        interator.next()
```

##### 生成器函数实例（二）

​	需求：模拟数据：获取用户信息，获取订单信息，获取商品列表

```js
        function getUsers() {
            setTimeout(() => {
                let data = '用户数据'
                interator.next(data)
            }, 1000)
        }
        function getOrders() {
            setTimeout(() => {
                let data = '订单数据'
                interator.next(data)
            }, 1000)
        }
        function getGoods() {
            setTimeout(() => {
                let data = '商品数据'
                interator.next(data)
            }, 1000)
        }
        //创建一个生成器
        function* gen() {
            let users = yield getUsers()
            console.log(users);
            let orders = yield getOrders()
            console.log(orders);
            let goods = yield getGoods()
            console.log(goods);
        }
        let interator = gen()
        interator.next()
```

#### Promise：

​	概念：Promise 是 ES6 引入的异步编程的新解决方案，语法上 Promise 是一个构造函数，用来封装异步操作兵可以获取成功或者失败的结果

##### 	基本使用：

```js
        let p = new Promise((resolve, reject) => {
            setTimeout(() => {
                // let data = "获取数据成功"
                // resolve(data)
                let ero = "获取数据失败"
                reject(ero)
            }, 1000);
        })

        p.then((res) => {
            console.log(res);
        }, (ero) => {
            console.log(ero);
        })
```

##### 读取文件案例：

```js
let fs = require("fs")

//普通的形式
fs.readFile("./为学.md", (err, data) => {
    if (err) throw err
    console.log(data.toString());
})

//Promise封装模式
let p = new Promise((resolve, reject) => {
    fs.readFile("./为学.md", (ero, data) => {
        if (ero) reject(ero)
        resolve(data)
    })
})

p.then((res) => {
    console.log(res.toString());
}, (ero) => {
    console.log(ero);
})
```

##### 封装ajax操作

```js
    <button id="send">发送请求</button>

    <script>
        var send = document.getElementById('send')
        send.onclick = function() {
            //封装ajax请求
            $Ajax().then((res) => {
                console.log(res);
            }, (ero) => {
                console.log(ero);
            })
        }

        function $Ajax() {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest()
                xhr.open("get", "http://localhost:3000/index")
                xhr.send()
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            var data = xhr.responseText;
                            resolve(data);
                        } else {
                            reject("请求失败")
                        }
                    }
                }
            })
        }
```

服务器代码：

```js
//添加依赖
const express = require('express');
const fs = require("fs")
    //创建服务器
const app = express();

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

app.get('/', (req, res) => {
    res.send('我爱小恋恋');
})

app.get('/index', (req, res) => {
    fs.readFile("./为学.md", (ero, data) => {
        if (ero) throw ero
        res.send(data.toString())
    })
})

//监听端口
app.listen(3000);
console.log("服务器启动成功");
```

##### promise.prototype.then

​	使用：new Promise((resolve,reject)=>{ resove() }).then()

```js
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("用户数据")
            }, 1000);
        }).then((res) => {

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([res, "订单数据"])
                }, 1000);
            })
        }).then(res => {
            console.log(...res);
        })
```

##### Promise实践

​	需求：利用Promise封装将 为学，插秧诗，观书有感一步一步读出来

```js
//Promise封装
new Promise((resolve, reject) => {
    fs.readFile('./file/为学.md', (ero, data) => {
        resolve(data)
    })
}).then((res) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./file/插秧诗.md', (ero, data) => {
            resolve([res, data])
        })
    })
}).then((res) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./file/观书有感.md', (ero, data) => {
            res.push(data)
            resolve(res)
        })
    })
}).then((res) => {
    console.log(res.join('\n'));
})
```

##### Promise catch方法：

​	作用：指定失败的回调，和then方法使用一样

#### set集合：

​	概念：本质上是一个数组，是Object类型，

​	注意：默认会去掉set 中重复的内容

```js
        //创建
        let s = new Set(['大事儿', '小事儿', '好事儿', "坏事儿", "小事儿"])
            // 元素个数
            // console.log(s.size);
            //添加一个新元素
            // s.add("喜事儿")
            //删除元素怒
            // s.delete("坏事儿")
            // 检测
            // console.log(s.has("好事儿"))
            //清空
            // s.clear()
        console.log(s);
```

##### 集合实践：

​	需求：对数组进行去重，交集，并集，差集的操作

```js
       let arr1 = [1, 2, 3, 4, 5, 4, 3, 2, 1]
        let arr2 = [4, 5, 6, 5, 4]
        //去重
        let result = [...new Set(arr1)]
        console.log(result);
        //交集
        let result1 = [...new Set(arr1)]
        let result2 = new Set(arr2)
        console.log(result1, result2);
        let result = result1.filter(item => {
            if (result2.has(item)) {
                return true
            } else {
                return false
            }
        })
        console.log(result);

        //并集：
        let result1 = [...new Set(arr1)]
        let result2 = [...new Set(arr2)]
        let result = [...new Set([...result1, ...result2])]
        console.log(result);

        //差集
        let result1 = [...new Set(arr1)]
        let result2 = new Set(arr2)
        let result = result1.filter(item => {
            if (result2.has(item)) {
                return false
            } else {
                return true
            }
        })
        console.log(result);
```

#### Map

​	概念：升级版的对象，普通对象key只能为字符串，现在map的key可以是对象

```js
        // 创建Map
        var m = new Map()
            //添加值：
        m.set("name", "丁兵")
        m.set("age", 18)
        m.set("show", function() {
            console.log("大家好");
        })
        let school = {
            name: '大兵兵'
        }
        m.set(school, ["小恋恋", "小半半", "小可爱"])
            //获取值：
            // let uname = m.get("name")
            // let age = m.get("age")
            //删除值：
            // m.delete("show")
            //清空值
            // m.clear()

        //遍历
        for (key of m) {
            console.log(key);
        }
        //长度
        console.log(m.size);
```

#### Class：

​	概念：ES6 提供了更接近传统语言的写法，引入了 Class （类）的概念，作为对象的模板，通过 class 关键子，可以定义类，ES6 的 class可以看作只是一个语法糖，他的绝大多数功能，ES5都能做到，新的class 写法只是让对象原型得写法更加清晰，更像面向对象编程语法而已。

##### 	初体验：

```js
// H5得写法
        function Person(brand, price) {
            this.brand = brand
            this.price = price
        }
        Person.prototype.show = function() {
            console.log("我可以打电话!!");
        }

        let HuaWei = new Person("华为", 3999)
        HuaWei.show()
        console.log(HuaWei);

        //class写法
        class Person {
            constructor(brand, price) {
                this.brand = brand
                this.price = price
            }
            show() {
                console.log("我可以打电话");
            }
        }

        let XiaoMi = new Person("小米", 1999)
        XiaoMi.show()
        console.log(XiaoMi);
```

##### 		静态成员：

​			概念：他属于对象，不属于实例本身 class中需要用static 声明

```js
 //H5使用静态成员
        function Phone() {

        }
        Phone.uname = "手机"
        Phone.change = function() {
            console.log("我可以改变世界");
        }

        let XiaoMi = new Phone()
             console.log(XiaoMi.uname);
             XiaoMi.change()
        console.log(Phone.uname);  正确
        //class关键子
        class Phone {
            static uname = "小苹果"
            static change() {
                console.log("你是我的小苹果");
            }
        }
        let xiaopingguo = new Phone()
        console.log(xiaopingguo.uname);
        console.log(Phone.uname)
```

#### 	继承：

##### 		ES5形式

​		注意点：

​			子类象用父类得属性得时候需要用 call 改变this指向

​			子类想拥有父类得方法得时候需要用 子类.prototype = new 父类

```js
        // ES5实现继承
        //父类
        function Phone(brand, price) {
            this.brand = brand
            this.price = price
        }
        Phone.prototype.show = function() {
                console.log("我可以打电话");
            }
            // 子类
        function Smartphone(brand, price, color, size) {
            //调用父类执行
            Phone.call(this, brand, price)
            this.color = color
            this.size = size
        }
        Smartphone.prototype = new Phone
        Smartphone.prototype.constructor = Smartphone

        Smartphone.prototype.music = function() {
            console.log("我可以听音乐");
        }
        Smartphone.prototype.playGams = function() {
            console.log("我可以玩游戏");
        }

        let Lianxiang = new Smartphone("联想", 2999, "白色", "5.5incu")
        console.log(Lianxiang);
        Lianxiang.show()
```

##### 	ES6形式

```js
        // ES6继承
        class Phone {
            constructor(brand, price) {
                this.brand = brand
                this.price = price
            }
            show() {
                console.log("我可以打电话");
            }
        }

        class Smartphone extends Phone {
            constructor(brand, price, color, size) {
                super(brand, price)
                this.color = color
                this.size = size
            }
            proto() {
                console.log("拍照");
            }
            playGame() {
                console.log("玩游戏");
            }
        }

        let xiaomi = new Smartphone("小米", 799, "黑色", "4.7icch")
        console.log(xiaomi);
        xiaomi.show()
        xiaomi.playGame()
        xiaomi.proto()
```

##### 		重写：

​		概念：只能全部重写，就是在子类得地方定义一个一摸一样得方法，然后进行操作

#### 	数值得扩展：

```js
        //1. Number.EPSILON 是 JavaScript 表示最小精度
        console.log(0.1 + 0.2 === 0.3);   //false
        function equal(a, b) {
            // 如果小于这个最小精度得话那么返回true
            if (Math.abs(a - b) < Number.EPSILON) {
                return true
            } else {
                return false
            }
        }
        console.log(equal(0.1 + 0.2, 0.3)); //true
        //2. 二进制,八进制,十进制,十六进制
        let b = 0b1010 //二进制
        let o = 0o777 //八进制
        let d = 100 //十进制
        let x = 0xff
        //3.Nuber.isFinie 检测一个数值是否为有限数
        console.log(Number.isFinite(100)); //true
        console.log(Number.isFinite(100 / 0)); //false
        //4. Number.parseInt , Number.parseFloat
        console.log(Number.parseInt(100.0123123)); //100
        console.log(Number.parseFloat('100.0123123你好')); //100.0123123
        //5.Number.isInteger 判断一个数是否为整数
        console.log(Number.isInteger(100.15415)); //fasle
        //6. Math.trunc 将小数部分去除
        console.log(Math.trunc(1000.415454)); //1000
        //7. Math.sign 判断一个数到底为整整 负数 还是0
        console.log(Math.sign(100)); //1
        console.log(Math.sign(0)); //0
        console.log(Math.sign(-100)); //-1
```

#### 对象得扩展：

​	Object.is 判断两个值是否完全相等，像 === 

​		区别：object.is( NaN , NaN)  为true

##### 	Object.assign ：

​	合并对象参数为第一参数为准，若没有得话从第二个对象中查找  **重要**

​	Object.setPrototypeof 设置原型上得值

​	Object.getPrototypeof 获取原型上得值

#### 模块化：

​	模块化主要由两个命令构成：export 和 import 

​	export 命令用于规定模块对外接口

​	import 命令用于输入其他得模块提供得功能

```js
 const school = "湖铁"
 function show() {
     console.log("我们是国家示范性高校");
 }
 export {
     school,
     show
 }
 

 <script type="module">
      import {school,show} from "./js/m1.js"
      console.log(school); show()
 </script>
```

##### 暴露方式：

​	分别暴露：

​		export const a = 1

​	统一暴露

​		export {

​		}

​	默认暴露：

​		export default 1

##### 引入形式：

​	通用形式

​		import * as m1 from "./js/m1.js"

​	解构赋值形式：

​		import {school, change} from "./js/m2.js"

​	简便形式，只针对默认暴露

​		import m3 from "./js/m3.js"

引入形式二

```js
   	app.js
   	import { school,show } from "./m1.js"
    import * as ModuleA from "./m2.js"
    import n1 from "./m3.js"
    console.log(school,show);
    console.log(ModuleA);
    console.log(n1);
    
    index.html
   <script src="./js/app.js" type="module"></script>
```

##### babel 对ES6模块化代码转换：

​	安装工具：babel-cli babel-preset-env  browserify(webpack)

​	将需要代码转化得代码，转换到dist/js文件夹下：npx babel js -d dist/js --presets=babel-preset-env

​	打包将入口文件打包到dist/bundle.js文件下： npx browserify dist/js/app.js -o dist/bundle.js

##### 模块化与npm 包得使用

```js
//引入jquery
import $ from "jquery"
$('body').css("background","pink")
```

### ES7：

#### 	新特性：

##### 		Array.prototype.includes

​			includes ：方法用来判断数组种是否包含某个元素，返回布尔类型

​			** ：实现幂得运算

```
       	//includes
        let arr = ["西游记","红楼梦","三国演义","水浒传"]
        console.log(arr.includes("红楼梦"));
        //**
        console.log(2 ** 10);
```

#### ES8:

##### 	async 和 await ：

​		async 和 await 两种语法结合可以让异步代码像同步代码一样

​		async 函数：

​			async 函数得返回值为 promise 对象

​			promise 对象得结果由 async 函数执行和返回值决定

​		awai 表达式：

​			await 必须写在 async 函数种

​			await 右侧得表达式一般为 promise 对象

​			await 返回得是 promise 对象成功得值

​			await 得promise 失败了，就会抛出异常，用try...catch 来捕获

```js
        //创建一个Promise对象
        let p = new Promise((resolve,reject)=>{
            // resolve("成功后的值")
            reject("失败后得值")
        })
        async function main (){
            try{
                let result = await p
                console.log(result);
            }catch(e){
                console.error(e)
            }
        }
        main()
```

##### 	async 和 await 表达式结合：

处理 Ajax请求

```js
        function sendAjax(url){
          return  new Promise((resolve,reject)=>{
                let xhr =new XMLHttpRequest()
                xhr.open("get",url)
                xhr.send()
                xhr.onreadystatechange = function(){
                    if(xhr.readyState === 4){
                        if(xhr.status >= 200 && xhr.status < 300){
                            let result = xhr.responseText;
                            console.log(result);
                            resolve("1231123")
                        }else{
                            reject(xhr.status)
                        }
                    }
                }
            })
        }
        async function main(){
          let reuslt = await sendAjax("http://localhost:3000/index")
          console.log(reuslt);
        }
        main()
```

#### ES9:

​	Rest 参数与 spread 扩展运算符在ES6中已经引入，不过在ES6 中只针对于数组，在ES9中对象提供了想数组一样的 rest 参数于扩展运算符

```js
        //rest参数
        function connect({host,port,...user}){
            console.log(host);
            console.log(port);
            console.log(user.username);
            console.log(user.password);
        }
        connect({
            host:"localhost",
            port:3306,
            username:"root",
            password:"root"
        })

        //扩展运算符
        const o1 = {
            q:1
        }
        const o2 = {
            w:2
        }
        const o3 = {
            e:3
        }
        const o4 = {
            r:4
        }
        console.log({...o1,...o2,...o3,...o4});
```

#### 		ES10

##### 		字符串方法扩展：

​			trimStart 与 trimEnd 作用：清除左侧，右侧的空白

##### 		数组扩展：

​			falt  与  faltMap：

​		falt：将多维数组转化为低位数组

​		使用方式:	

```
        // let arr =[1,2,3,[4,5,6]]
        // console.log(arr.flat());
        // let arr =[1,2,3,[4,5,6,[7,8,9]]]
        //里面传输数字代表深度
        // console.log(arr.flat(2));

        //flatMap
        let arr = [1,2,3,4]
        let result = arr.flatMap(item => [item*10])
        console.log(result);
```

##### 		Symbol.prototype.description：

​			获取Symbol的描述信息：

```
        let s = Symbol("加油哦")
        console.log(s.description); //加油哦
```

#### ES11

##### 	私有属性：

​		概念：私有属性指的是对象中的一些属性只能在类的内部进行使用，出了类就不能再使用了

```js
        class Person{
            name;
            #age;
            #weight;
            constructor(name,age,weight){
                this.name = name
                this.#age = age
                this.#weight = weight
            }
            show(){
                console.log(`大家好我叫${this.name},今年${this.#age}岁,体重${this.#weight}`);
            }
        }
        let gril = new Person("小恋恋","18","45kg")
        console.log(gril);
        gril.show();
        // console.log(gril.name);
        // console.log(gril.#age); //报错
```

##### 	Promise.allSettled：

​		功能：批量处理多个promise对象，总是能返回值，和其相对的是 all 方法，作用为：只要有一个不通过的话，那么值就是不通过

```js

        let p1 = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("订单数据")
            },1000)
        })

        let p2 = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                // resolve("商品数据")
                reject("出错了")
            },1000)
        })
        let result1 = Promise.all([p1,p2])
        // result.then((res)=>{
        //     res.map(item => console.log(item))
        // })
        console.log(result1);   //出错了
        let result2 = Promise.allSettled([p1,p2])
        console.log(result2);   //成功失败都返回
```

##### 可选链操作符：

​	?. ：判断昨天的属性是否有，如果有的话就执行有边的内容

##### 动态import加载:

​	作用：需要用到的时候再加载：

​	import("路径") 返回值是一个promise对象

```js
index.html
    <button id="btn">点击</button>
    <script src="./app.js" ></script>
    
app.js
    let btn = document.getElementById("btn")
    btn.onclick = function(){
        // console.log(hello());
        import("./m1.js").then((res)=>{
            res.hello()
        })
    }
m1：
	export function hello(){
    	alert("hello")
	}
```

##### BigInt：	

​	作用：更大数值得运算：

​	使用方式：let n = 123n		

​	方法：将int 转化为 BigInt

​		BigInt(123)

##### globalThis：

​	作用：始终指向最外层得this  浏览器环境下指向 window

