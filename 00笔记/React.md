	React的好处：通过虚拟Dom 与真实Dom 进行映射

# **React**

### **React概述：**

#### **介绍描述：**

​	用于构建用户界面的javaScript 库（只关注于视图）

​	有 Facebook 开源

#### **React的特点：**

声明式编程

组件化编程

React Native 编写原生应用

高效（优秀的 Diffing 算法）

#### **React 高效的原因**

使用虚拟Dom，不总是直接操作页面真实Dom

Dom Diffing 算法，最小化页面重绘

#### **React基本使用：**

##### **HelloReact**

第一步引入react库：总共有三个文件

react.develpment.js：核心库

react-dom.development.js：扩展库

babel.min.js：jsx转化为js

引入是由顺序的

react.develpment.js 必须放在 react-dom.development.js 之前

第二步引入容器：

```jsx
<div id='test'></div>
```

第三步写javaScript语法：

```jsx
<script type="text/babel"></script>
```


创建虚拟Dom：

```jsx
const VDom = <h1>Hello React </h1>
```

渲染虚拟Dom到页面

ReactDOM.render(VDom, document.getElementById("test"))

容易出错的地方：

- 引入文件时的顺序
- 需要一个容器test
- JavaScript中type需要写成：type="text/babel"
- 在Script 标签中使用虚拟Dom不要使用引号

##### **虚拟DOM的创建方式：**

​	JSX的方式：

​		const VDom = <h1> Hello, React</h1>

​	JS的方式：

​		const VDom = React. createElement("h1", {id : 'title'}, "Hello, React" )

​	JSX的方式的原理：转化为JS的方式

##### 关于虚拟Dom：

​	本质上是一个Object 类型

​	虚拟Dom比较"轻"，真实DOM“重”，因为虚拟DOM在React内部使用，无需真实DOM上那么多的属性

​	虚拟DOM最终会被React转化为真实DOM，呈现在页面上

#### JSX的语法规则：

​	全程：JavaScript XML

​	react定义的一种类似于XML的JS扩展语法：**JS + XML**

​		XML：早期用于存储一些数据资源的传输方式：

```XML
<student>
	<name>Tom</name>
    <age>19</age>
</student>
```

​		JSON：现在主要的传输方式

```JSON
"{name:tom,age:12}"
```

```
/*JSX的语法规则
*   1、虚拟Dom不能用引号
*   2、如果虚拟DOM中的元素需要有JS表达式的话需要用{}来进行包裹
*   3、样式类名指定用class在JSX中需要进行区别用className进行指定
*   4、如果要指定行类样式那么style属性需要用{{}}对象的形式进行指定
*   5、只能有一个根标签
*   6、标签必须闭合
*   7、标签首字母
*       （1）、若首字母为小写的时候，那么react与普通的HTML标签进行匹配，如果发现有重样的话那么直接套用，否则报错
*       （2）、若首字母为大写的时候，那么react会默认的认为是一个component组件，进行代码查找
* */
```

​		区分【js 语句（代码）】 与 【 js 表达式 】

​			表达式：一个表达式会产生一个值，可以放在任何一个需要值得地方

​				下面得都是表达式：、

​					(1)、a

​					(2)、a+b

​					(3)、demo(1)

​					(4)、arr.map()

​					(5)、function test(){}

​			语句（代码）	

​				下面得都是语句、代码

​						(1)、if(){}

​						(2)、for(){}

​						(3)、switch(){case : xxx}

```JSX
注意:
            1、数组会默认自动遍历，但是对象就不行
            2、{}内部不能用代码，语句等，只能使用表达式
            3、遍历得时候需要添加key属性，直接给<li key="index">进行添加
```

#### React面向组件编程		

##### 	安装开发工具：

​			React Developer Tools

​				去简易插件中安装	

### 	面向组件编程

#### 		函数式组件：

```
function MyConponent (){
    return <h1>我是用函数定义得组件(适用于【简单组件】得定义)</h1>
}
ReactDOM.render(<MyConponent></MyConponent>,document.getElementById("test"))

执行ReactDOM.render进行执行得内容：
	React解析组件标签，找到MyComponent 组件
	发现组件时用函数定义得，随后执行该函数，然后返回虚拟DOM，React转化为真实得DOM，随后呈现在页面中
```

​			注意点：

​				1、函数式定义的组件首字母需要大写		

​				2、函数式定义得组件需要有return



#### 		类式组件：

##### 			回忆类相关知识：

​				类中得构造器时不必须写的，要对实例进行一些添加初始化操作得时候添加

​				如果A类继承了B类，且A类中写了构造器，那么A类构造器中得super是必须要调用得

​				类中所定义得方法，都是放在实例对象得原型对象上得。

```javascript
        /*类的创建：*/
        class Person {
            /*构造器*/
            constructor(name,age) {
                this.name = name
                this.age = age
            }
            /*类得行为*/
            sayHi(){
                console.log(`大家好我是${this.name},今年我${this.age}`)
            }
        }

        /*字类继承父类，拥有父类得方法行为*/
        class Student extends Person {
            /*子类得构造器*/
            constructor(name,age,grade) {
                //继承父类得所有方法行为
                super(name,age);
                this.grade = grade
            }
            /*重写父类得方法*/
            sayHi() {
                super.sayHi();
                console.log(`我读${this.grade}年级`)
            }
        }

```

##### 				类式组件：

​					类式组件得创建继承与 **React.Component** 

​					里面必须包裹一个**render 函数**

​					里面返回一个虚拟DOM

​					问题：

​						render是放在哪里得呢？ - Mycomponent的原型对象上，供实例使用

​						render中的this是谁？ -- Mycomponent的实例对象 == Mycomponent组件实例对象

​					执行ReactDOM.render(<Mycomponent />)

​						1、React解析组件标签，找到Mycomponent 组件

​						2、发现组件时用类创建出来的，随后new出来一个类的实例，并通过实例调用原型上的render方法

​						3、将render返回值的虚拟DOM转为真实DOM呈现在页面上

```
    <script type="text/babel">
        /*创建类的实例对象*/
        class MyComponent extends React.Component{
            render(){
                return <h1>我是用函数定义得组件(适用于【复杂组件】得定义)</h1>
            }
        }

        ReactDOM.render(<MyComponent />,document.getElementById("test") )

    </script>
```

#### 			组件的三大核心属性：

##### 					state

​					 概念：记录、保存状态	

​					注意的细节：	

​						绑定事件：不需要带小括号

​						在构造器函数中需要给实例对象一个方法并且将当前this给他

​						修改state中的状态属性需要用 this.setState({})的方式进行改变

​					解决this指向问题：

​						this.changeWeather.bind(this)

​					强烈注意：

​						组件中render 方法中得 this 为组件实例对象

​						组件自定义得组件中this 为 underfined ，如果解决

​							1、强制用bind()函数改变this得执行

​							2、箭头函数

​						状态数据，不能直接进行修改或者更新需要利用 setState()

```
        /*创建类组件*/
        class Weather extends React.Component{
            /*创建构造对象*/
            constructor(props) {
                //调用父类 props
                super(props);

                this.state = {isHot:false}
                this.changeWeather = this.changeWeather.bind(this)
            }
            render(){
                //返回虚拟DOM
                //绑定
                return <h1 onClick={this.changeWeather}>今天天气好{this.state.isHot ? "炎热" : "凉爽"}</h1>
            }
            changeWeather(){
                console.log(this)
                const isHot = this.state.isHot
                this.setState({isHot: !isHot})
            }
        }
        ReactDOM.render(<Weather /> , document.getElementById("test"))
```

​				state得简写方式：

​					注意点

​						在类中如果出现 赋值语句的时候 a = b 那么 a 会添加到实例对象上

​						 自定义组件需要利用变量赋值语法 赋值体为 箭头函数

```JSX
  /*创建类组件*/
        class Weather extends React.Component{
            //初始化state
            state = {isHot : false}
            render(){
                //返回虚拟DOM
                //绑定
                return <h1 onClick={this.changeWeather}>今天天气好{this.state.isHot ? "炎热" : "凉爽"}</h1>
            }
			//自定义方法 -- 需要赋值语句的形式 + 箭头函数
            changeWeather = () => {
                const isHot = this.state.isHot
                this.setState({isHot: !isHot})
            }
        }
        //渲染到页面
        ReactDOM.render(<Weather /> , document.getElementById("test"))	
```

我错了，我不是大猪蹄子，这叫做 “术业有专攻”

##### 				props:

​					基本使用：

​						应用场景：如果在一个组件中需要接收外部传递过来的变量的话这是后就用到了props

​						注意事项：

​							props 只读不能修改

​						具体实现：

```jsx
        /*创建类式组件*/
        class Person extends React.Component{

            render(){
                return (
                    <ul>
                        <li>姓名：{this.props.name}</li>
                        <li>性别：{this.props.sex}</li>
                        <li>年龄：{this.props.age}</li>
                    </ul>
                )
            }
        }

        /*渲染到页面   传递简单参数*/
        ReactDOM.render(<Person name="tom" age="18" sex="男"/> , document.getElementById("test"))
        ReactDOM.render(<Person name="jerry" age="18" sex="女"/> , document.getElementById("test2"))
        ReactDOM.render(<Person name="张三" age="18" sex="男"/> , document.getElementById("test3"))
```

​					批量传参：

```jsx
        /*批量传递参数*/
        let person = {
            name:"tom",
            age:"18",
            sex:'男',
        }
        ReactDOM.render(<Person {...person}/> , document.getElementById("test"))
```

​					注意：批量传参的使用用扩展运算符：... 这里为啥可以直接使用呢，如果直接使用的话在JavaScript直接报错，这里的原因是react在后面进行了处理，所以能够直接使用

###### 				扩展运算符的使用：...

```javascript
    let arr1 = [1,2,3,4,5]
    let arr2 = [6,7,8,9,10]
    console.log(...arr1)//展开运算符
    let arr3 = [...arr1 , ...arr2 ]
    console.log(arr3)//连接

    //在函数中使用
    function sum(...numbers) {
        //求和
        return numbers.reduce((preValue,currenValue) => {
            return preValue + currenValue
        })
    }
    console.log(sum(1,2,3,4))

    //构造字面量对象时展开对象
    let obj = {name : "tom", age : 12}
    //console.log(...obj)//报错不能直接展开对象
    console.log({...obj})  //需要外部包裹一个大括号
```

###### 				props的限制：

​					由于react 15 以上已经将 PropTypes 移出放在了一个包内，我们需要引入

		<script src="https://cdn.bootcss.com/prop-types/15.6.1/prop-types.js"></script>

​					具体的方法：在想要限制的组件身上设置 propTypes 

​					在具体的属性上设置：PropTypes

​					具体代码如下：

```jsx
  /*创建类式组件*/
        class Person extends React.Component{
            render(){
                return (
                    <ul>
                        <li>姓名：{this.props.name}</li>
                        <li>性别：{this.props.sex}</li>
                        <li>年龄：{this.props.age +1}</li>
                    </ul>
                )
            }
        }
        /*实现性别默认为男，年龄都+1岁number类型，名字不能为空，*/
        Person.propTypes = {
            //不能为空并且为字符串类型
            name:PropTypes.string.isRequired,
            age:PropTypes.number
        }
        //设置默认值
        Person.defaultProps = {
            sex:"男",
            age:18
        }

        ReactDOM.render(<Person name="tom" age={18} sex="男"/>,document.getElementById("test"))
        ReactDOM.render(<Person name="jerry" age={18} sex="女"/>,document.getElementById("test2"))

        let obj = {name:"蜘蛛侠",age:18,sex:'男'}
        ReactDOM.render(<Person {...obj}/>,document.getElementById("test3"))
```

###### 						简写方式：

​							出现的原因：因为限制条件和类在两个不同的位置，按道理限制和组件应该放在一起

​							新知识：如果要给类绑定属性的话需要在前面添加 static

```jsx
    /*实现性别默认为男，年龄都+1岁number类型，名字不能为空，*/
    static propTypes = {
        //不能为空并且为字符串类型
        name:PropTypes.string.isRequired,
        age:PropTypes.number
    }
    //设置默认值  需要给属性添加 static
    static defaultProps = {
        sex:"男",
        age:18
    }
```

###### 				类中的构造器：

​					构造器是否接收 props ， 是否传递 props ，取决于，是否希望在构造器中通过 this 访问 props

​					注意：在类式组件中能省略 构造器就省略构造器

###### 				函数式组件使用props

​					在函数中不能使用 state 和 refs 但是可以使用props 因为函数可以接收参数

```jsx
 	 function Person (props){
            console.log(props)
            return (
                <ul>
                    <li>姓名：{props.name}</li>
                    <li>性别：{props.sex}</li>
                    <li>年龄：{props.age}</li>
                </ul>
            )
        }
        let obj = {
            name:"张三",
            age:'18',
            sex:"男"
        }
        ReactDOM.render(<Person {...obj}/> , document.getElementById("test"))
```

##### 			refs：

​				概念：在组件中如果我们要获取其标签得话可以利用原生JS但是这样子是显然不合适得，于是react就为我们封装了一个refs属性如果你给标签添加 ref 属性得话就会将标签添加到refs属性中

###### 				字符串形式得ref：

```jsx
        class Person extends React.Component{
            //箭头函数得形式给实例添加方法
            showValue = () => {
                //通过refs获取标签
                let input1 = this.refs.input1
                alert(input1.value)
            }
            blurInput = () => {
                let input2 = this.refs.input2
                alert(input2.value)
            }
            render(){
                return (
                    <div>
                        <input type="text" placeholder="请输入内容" ref="input1" />&nbsp;
                        <button onClick={this.showValue}>点击展示左侧内容</button>&nbsp;
                        <input type="text" placeholder="请输入内容" onBlur={this.blurInput} ref="input2" />
                    </div>
                )
            }

        }
        //渲染到页面
        ReactDOM.render(<Person/> , document.getElementById("test"))
```

###### 					回调函数获取ref

​						概念：由于官网说明字符串形式得ref 会被淘汰，原因是字符串得效率太慢不符合要求，现在学习回调函数得形式获取节点

​						形式：

​							ref = { ( node ) => { this.input1 = node }}

​							this.input1 获取

​						注意：node 为当前得节点

###### 					解决回调函数执行多次的原因

​						概念：如果组件发生了状态的更新那么组件间的ref会发生清空重新赋值，所以会执行两次分别是 null 和 标签

###### 					新的API createRef 进行保存ref

​						概念：这是react 最推荐的一种方式

​						格式：

​							创建ref：Ref1 = React. createRef()

​							绑定在标签中：<input ref={this.Ref1} />

​							使用：this.Ref1.current.value

###### 					总结：

​						使用字符串的 ref 能避免就避免，因为官网说明了

​						回调形式的 ref，回调只是扩展，通常情况下都是使用内联的形式 

​						createRef 是官网最推荐的

##### 			react事件处理：

​				概念：

​					1、通过onXxx 属性指定事件处理函数(注意大小写)

​						作用：重新封装为了更好的兼容性

​						a、React 使用的是自定义(合成)事件，而不是使用的原生DOM事件 —— 为了更好的兼容性

​						b、React 中的事件是通过事件委托方式处理的(委托给组件最外层的元素) —— 为了高效

​					2、通过 event.target 得到发生事件的DOM元素对象 —— 不要过度的使用ref

##### 收集表单中的数据

​	包含表单中的组件

​		受控组件就像Vue中的双向数据绑定，推荐使用受控组件

​		1.受控组件：随着你的数据维护状态，这就是受控组件

```jsx
//类组件
class Login extends  React.Component{
    //受控组件:输入类的值绑定在state中
    state = {
        username : '',
        password : ''
    }
    //用户名输入值
    changeUsername = (event) => {
        this.setState({
            username:event.target.value
        })
    }
    //密码输入值
    changePassword = (event) => {
        this.setState({
            password:event.target.value
        })
    }
    //弹窗
    upLogin = (event) => {
        event.preventDefault();
        alert(`你输入的用户名:${this.state.username} , 你输入的密码${this.state.password}`)
    }
    render(){
        return(
            <form action="#" onSubmit={this.upLogin} >
                用户名:<input type="text" name="username" onChange={this.changeUsername} />
                密码:<input type="password" name="password" onChange={this.changePassword} />
                &nbsp;<button>提交</button>
            </form>
        )
    }
}
ReactDOM.render(<Login/>, document.getElementById("test"))
```

​		2.非受控组件：页面中所有数据类的DOM，是现用现取，你就是非受控组件

```jsx
//类组件
class Login extends  React.Component{
    //非受控组件:所有输入类的DOM,现用现取的形式就是非受控组件
    showLoginInfo = (event) => {
        event.preventDefault()
        alert(`你输入的用户名:${this.username.value},你输入的密码${this.password.value}`)
    }
    render(){
        return(
            <form action="#" onSubmit={this.showLoginInfo}>
                用户名:<input type="text" name="username" ref={(node) => { this.username = node }}/>
                密码:<input type="password" name="password"  ref={(node) => { this.password = node }}/>
                &nbsp;<button>提交</button>
            </form>
        )
    }
}
ReactDOM.render(<Login/>, document.getElementById("test"))
```



##### 高阶函数与函数的柯里化

​	高阶函数：如果一个函数符合下面2条规定中的一条，那么函数就是高阶函数

​		1、若A函数，接收的参数是一个函数，那么A就可以称之为高阶函数

​		2、若A函数，调用的返回值还是一个函数，那么A就可以称之为高阶函数

​		常见的高阶函数：Promise、setTimeout、arr.map() 等等

​	函数的柯里化：通过函数调用继续返回函数的形式，实现多次接收参数最后统一处理的函数编码形式

```jsx
class Person extends React.Component{
    //初始化state
    state = {
        username : '',
        password : ''
    }
    render(){
        return (
            <div>
                <form onSubmit={this.UpLogin}>
                    <input type="text" onChange={this.saveFormDate("username")} /> <br/>
                    <input type="password" onChange={this.saveFormDate("password")} value={this.state.password}/> <br/>
                    <button>提交</button>
                </form>
            </div>
        )
    }
    //登录
    UpLogin = (event) => {
        event.preventDefault()
        console.log(`你输入的用户名：${this.state.username},你输入的密码${this.state.password}`)
    }
    //利用函数的返回值做文章  高阶函数，函数的柯里化
    saveFormDate = (dataType) => {
        return (event) => {
            this.setState({
                [dataType] : event.target.value
            })
        }
    }
}
//渲染组件到页面
ReactDOM.render(<Person/> , document.getElementById("test"))
```

##### 不用柯里化，高阶函数实现：

​	须知：React 中的事件接收一个函数我们直接给他一个箭头函数，然后往里面进行添加东西

```jsx
<input type="text" onChange={(event)=>{ this.saveFormDate("username",event)  }} /> <br/>
<input type="password" onChange={(event)=>{ this.saveFormDate("password",event)}} value={this.state.password}/> <br/>
```

#### React 生命周期函数：

##### 	旧生命周期钩子函数：

​		卸载组件：ReactDOM.unmountComponentAtNode(document.getElementById("test"))

​		挂载组件：ReactDOM.render(<Person/>, document.getElementById("test"))

​		组件初始化，更新state状态：render(){}

​		组件挂载到页面：componentDidMount(){}

​		组件将要被卸载：componentWillUnmount(){}

​		组件挂载前执行：componentWillMount(){}

​		组件更新”阀门“：shouldComponentUpdate(){}

​		组件将要更新：componentWillUpdate(){}

​		组件更新完成：componentDidUpdate(){}

​		父组件向子组件传参：componentWIllReceiveProps  细节：组件一上来不会触发此函数，而是更新数据的时候触发

```
//接收到父组件传递过来的参数   细节：组件一上来时不会触发这个生命周期函数，而是重新向父组件子组件跟新数据的时候才会执行
componentWillReceiveProps(props){
    console.log("componentWIllReceiveProps",props)
}
```

###### 		钩子的执行：

​			初始化阶段：ReactDOM.render()

​				constructor(){}

​				componentWillMount(){}

​				render(){}

​				componentDidMount(){} ---> 常用：用于用户刚进来的初始化，网络请求等

​			更新阶段：setState()

​				shouldComponentUpdate(){}

​				componentWillUpdate(){}

​				render(){} ===》必须要用到

​				componentDidUpdate(){}

​			卸载阶段：执行ReactDOM.unmountComponentAtNode(){}

​				componentWillUnmount(){}  === 常用：组件卸载前的操作

##### 		生命钩子函数（新）

​			区别：由于React为了未来的发展趋势(异步渲染)，旧钩子可能会引发一些事故所以移出了三个钩子，新增了两个钩子

###### 			移出的三个钩子:

​				componentWillMount：组件渲染之前

​				componentWillReceiveProps：父组件向子组件传参

​				componentWillUpdate：状态即将发生更新调用

​			官网说在 18.x 的版本会移出这些钩子，如果想用这些钩子需要在前面加前缀 UNSAFE_

​				UNSAFE_componentWillMount ……

###### 			 新增的两个钩子：

​				getDerivedStateFromProps()：

​					调用的时机：横跨更新与渲染，基本上不用只做了解

​					注意：这个钩子返回状态对象或者null   , 并且在前面 + static

​						状态对象：就是像状态的对象，

​					接收到的参数：props，state

​					使用的时机：若state的状态值任何时候都是由 props 决定，那么可以使用 getDerivedStateFromProps

​				getSnapshotBeforeUpdate()：

​					概念：这个钩子是最新推出来的，调用的时机是渲染的组件即将到页面的时候调用称之为：快照钩子函数

​					作用：用来记录前面一次更新想要记录的东西

​					返回值：快照值或者null

​					返回值交给了 componentDidMount() 的的三个参数

​						componentDidMount()的参数

​							第一个参数为：之前的props 称之为 preProps

​							第二个参数为：之前的state 称之为 preState

​							第三个参数为：快照值命名：snapshotValue

```jsx
class NewsList extends React.Component{
    //定义状态
    state = {
        newsList:[]
    }
    //页面加载完成得调用钩子
    componentDidMount(){
        console.log(this)
        //定义一个定时器
        setInterval(() => {
            let news = "新闻" + (this.state.newsList.length+1)

            this.setState({
                //利用展开运算符进行拆分合并
                newsList: [news,...this.state.newsList]
            })
        },1000)
    }
    //需要呈现得效果，用户拖动滚动条，页面就停留在那里，不发生内容更改而往下走
    //快照钩子
    getSnapshotBeforeUpdate(){
        //获取当前得父容器得内容高度
       return  this.newsContent.scrollHeight

    }

    componentDidUpdate(preProps , preState, height){
        //得到即将要渲染得高度：height
        //得到已经渲染得高度：this.newsContent.scrollHeight
        console.log(this.newsContent.scrollHeight,height)
        this.newsContent.scrollTop += this.newsContent.scrollHeight - height
    }
    
    render(){

        return (
            <div className="list" ref={(node)=>{ this.newsContent = node }}>
                {
                    this.state.newsList.map((item,index)=> {
                        return <div className="item" key={index}>{item}</div>
                    })
                }
            </div>

        )
    }
}

ReactDOM.render(<NewsList/>,document.getElementById("test"))
```

##### 			重要得钩子

​				render：初始化渲染或者更新时调用

​				componentDidMount：开启监听，发送ajax请求

​				componentWillUnmount：做一些收尾得操作，如：清除定时器

##### 			即将废弃的钩子：

​				componentWillMount

​				componentWillReceiveProps

​				componentWillUpdate

​				现在使用出现警告，在18版本得时候需要加上 UNSAFE_前缀，以后可能彻底废除不用使用

#### DOM得Diff算法：

##### 		面试题：

​			1、react/vue中的key的作用？(key 的内容原理是什么？)

​			2、为什么遍历列表的时候，key最好不要用 index

##### 		1、虚拟DOM的作用：

​			简单的说：key时虚拟DOM的标识，在更新显示时key起着及其重要的作用

​			详细地说：当状态中的数据发生更新的时候，react会根据状态中数据的变化生成 【新的虚拟DOM】，随后react进行【新虚拟DOM】和【旧虚拟DOM】进行比较，比较规则：

​				1、旧虚拟DOM中找到于新虚拟DOM相同的key

​					(1)、如果DOM中的内容没有发生变化，直接使用之前的真实DOM

​					(2)、如果虚拟DOM中的内容发生了变化，则生成新的真实DOM，随后替换掉页面之前的真实DOM

##### 		2、diff的算法

​			比对方式，最低要求时标签：如果虚拟DOM之间DOM节点发生了增加，那么对比旧的虚拟DOM如果有相同的话那么直接复用，如果发生了改变的话那么比较内容的标签，如果没有发生变化继续复用

##### 		3、用index作为key 可能引发的问题：

​			1、若对数据进行：逆序添加、逆序删除等破坏顺序的操作：

​				会产生没有必要的真实DOM更新 ==> 界面正常显示，但效率低下

​			2、如果结构中还包含输入类的DOM：

​				会产生错误的DOM更新 ==>  界面有问题

​			3、注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key 是没有任何问题的

##### 		4、开发中如何选择key？

​			1、最好使用每条数据的唯一标识，比如id、手机号、身份证号、学号、等唯一标识

​			2、如果确定只是简单的展示数据，用index也是可以的

### 使用create-react-app 创建 React 应用：

#### 	创建项目并且启动：

​		第一步：全局安装：npm i -g create-react-app

​		第二步：切换到喜欢的目录，使用命令：create-react-app hello-react

​		第三步：进入该项目的文件夹：cd hello-react

​		第四步：启动项目：npm start

#### 	脚手架文件public文件：

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
<!--    %PUBLIC_URL%代表public文件夹得路径-->
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
<!--    移动端得适配器-->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
<!--    用于配置浏览器页签+地址栏得颜色（仅支持安卓手机浏览器）-->
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
<!--    用于指定网页添加到手机主屏幕后的图标-->
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
<!--    应用加壳时的配置文件-->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
<!--    浏览器不支持javaScript标签时显示-->
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
<!-- manifest.json 应用加壳文件配置    robots.txt：爬虫文件哪些文件能爬哪些不能爬-->
  </body>
</html>
```

#### react脚手架 介绍 src目录

​	App.css ：App组件得样式

​	**App.js ：App组件**

​	App.test.js：用于做App得测试

​	index.css：样式

​	**index.js：入口文件**

​	<React.StrictMode>：自动感知语法错误

​	reportWebVitals.js：页面性能分析文件（需要 web-vitals 库得支持）

​	setupTest.js：组件单元测试的文件（需要jest-dom 库的支持）

#### 编写Hello，React 案例:

​	将脚手架的默认生成的所有的东西进行移到其他的位置：

​	其实要让react脚手架执行起来主要需要三个文件：

​		index.html：主界面文件 pulick文件夹中的

​		index.js：入口文件：src文件夹下的

​		App.js：所有组件的外壳

##### 	注意：

​		1、所有的组件用jsx为后缀

​		2、组件与组件用文件夹进行分隔

##### 	入口文件 index.js

```js
//入口文件：index.js
//引入react核心库
import React from "react"
//引入reactDom
import ReactDOM from "react-dom"
//引入App.js组件
import App from "./App"

//渲染组件
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
,document.getElementById("root"))
```

##### 	App组件：

```jsx
//所有组件的外壳：
//引入react
import React from "react"
//引入Hello组件
import  Hello from "./component/Hello/Hello"
//引入Welcome组件
import Welcome from "./component/Welcome/Welcome";
//创建组件并且向外暴露组件
export  default  class App extends React.Component{
    render() {
        return(
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}
```

##### 	index.html文件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>hellReact</title>
</head>
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
<body>

    <div id="root"></div>
</body>
</html>
```

#### 样式的模块化:

​	概念：如果我们没有模块化的话如果样式发生了冲突，后引入的会把前面引入的顶掉，除非你用嵌套的less语法

​	第一步：需要将css文件改为模块文件：修改css文件名：Hello.css 改为 Hello.module.css

​	第二步：引入方式：improt hello from "Hello.module.css"

​	第三步：使用：<div className={hello.title}></div>

#### 功能界面的组件化的编码流程

​	1、拆分组件：拆分界面，抽取组件

​	2、实现静态组件：使用组件实现静态页面效果

​	3、实现动态组件

​		3.1、动态显示初始化数据

​			3.1.1、数据名称

​			3.1.2、数据类型

​			3.1.3、保存在哪个组件？

​		3.2、交互（从绑定事件监听开始）

####  Todo案例:

​	注意的事项：按功能划分每一个组件

​	子组件像父组件进行通信：需要借助父组件的一个函数，然后子组件进行调用传值

​	删除一个数组对象
​		let obj ={a:1,b:2}
​		delete obj.a
​	小坑：如果要使用comfirm 需要 window.confirm
​		defaultChecked与checked的区别：
​			defaultChecked只在第一次有效果

##### 	Todo总结：

​		一、拆分组件、实现静态组件、注意：className、style的写法

​		二、动态初始化列表，如果确定讲数据放在哪个组件的state中

​			某个组件使用：放在自身的state中

​			某些组件使用：放在他们共同的父组件的state中，（官方称此做法：状态提升）

​		三、关于父子之间通信

​			父组件给子组件传递数据：通过props传递

​			子组件给父组件传递数据：通过props传递，要求父提前给子传递一个函数

​		四、注意defaultChecked 和 checked 的区别，类似的还有：defaultValue 和 value

​		五、状态放在那里，操作状态的方法也在哪里

### React Ajax

#### 	react脚手架配置代理总结

##### 方法一

> 在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）

##### 方法二

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js
   ```

2. 编写setupProxy.js配置具体代理规则：

   ```js
   const proxy = require('http-proxy-middleware')

   module.exports = function(app) {
     app.use(
       proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值
         /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
       }),
       proxy('/api2', { 
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: {'^/api2': ''}
       })
     )
   }
   ```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。

#### GitHub搜索案例:

##### 	静态组件

​		知识点：

​			连续解构赋值：

```js
const obj ={a:{b:{c:1}}}
正常写法：obj.a.b.c
连续结构赋值 const {a:{b:{c}}} = obj  console.log(c)
连续结构赋值重命名：const {a:{b:{c:data}}} console.log(data)
```

​		在组件中如果碰到要用 if 才能解决组件渲染问题的话可以采用 三元表达式

```js
isFirst ? <h2>欢迎来到，github用户界面，请输入内容单击按钮搜索用户</h2>:
    isLodding ? <h2>isLodding.....</h2> :
        ero ? <h2 style={{color:'red'}}>{ero}</h2>:
users.map(userObj =>{
```

​	发送请求

​		axios.get()

#### 消息订阅与发布者模式

##### 	兄弟节点之间的通信：

​		我们之前一直通信的方式是利用App父组件，通过子组件改变App组件的状态进行兄弟组件的更新，从而达到数据的互通

​		解决方式：

​			利用消息订阅与发布者的模式利用一个第三方的一个库：pubSubJs

​		安装方式：npm i pubsub-js

​		引入方式：import PubSub from "pubsub-js"

​		使用方式：

​			需要得到数据的更新：订阅者

​			更新状态：发布者

​			发布消息：PubSub.publish("MyTopIc", "message")

​			订阅消息：const token = PubSub.subscribe("MyToplc",(mes , data)=>{ console.log(mes,data)  })

​			取消订阅：PubSub.unsubscribe(token)

​	订阅消息：

```js
//页面加载完成之后触发的回调
componentDidMount() {
    //订阅消息
    this.token = PubSub.subscribe("dabingbing",(mes,data)=>{
        this.setState(data)
    })
}
```

​	发布消息：

```
//发布消息
PubSub.publish("dabingbing",{isLodding: true,isFirst:false})
```

​	取消订阅：

```
//页面即将卸载的回调
componentWillUnmount() {
   //取消订阅
    PubSub.unsubscribe(this.token)
}
```

#### 扩展：Fetch

##### 	特点：

​		1.fetch ： 原生函数，不再使用 XmlHttpRequest 对象提交 ajax 请求

​		2. 老版本浏览器可能不支持

​	未优化的版本：

```js
// 发送网络请求 通过使用fetch Api进行发送
//特点:fetch请求是浏览器内置的Api 不需要下载，引入，返回值为一个promise对象
//返回值：第一次的返回值是代表服务器是否连接成功，response.json() 才能获取真正的数据，同时他又是一个promise的数据格式
//发送网络请求 (未优化的版本)
fetch(`/api1/search/users2?q=${keyWord}`).then(res=>{
    console.log("服务器连接成功")
    return res.json()
},ero =>{
    console.log("服务器连接失败",ero)
}).then(res=>{
    console.log("获取数据失败",res)
},ero=>{
    console.log("获取数据失败",ero)
})
```

​	优化版本：

```js
//发送网络请求（优化）
try{
    const response = await fetch(`/api1/search/users2?q=${keyWord}`)
    const data = await response.json()
	console.log(data)
}catch(ero){
   	console.log("请求失败")
}
```

#### gitHub案例的相关知识点

​	1.设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办

​	2.ES6 小知识点：解构赋值+重命名

​		const {res} = this.state  //传统解构赋值

​		const {res:{data}}  = this.state  //多重解构赋值

​		const {res:{data:res}} = this.state //多重解构赋值+重命名

​	3.消息订阅与发布模式

​		1.先订阅，再发布

​		2.适用于任意组件间的通信

​		3.要再组件的 componentWillUnmount 中取消订阅

​			订阅：const token = PubSub.subscribe( "标识"，( mes , data )=>{} )

​			发布：PubSub.publish("标识"，”参数“)

​			取消订阅：PubSub.unsbuscribe(token)

​	4.fetch网络请求 （关注分离的设计思想）

```js
try{
	const response = await fetch("地址")
    const data = await response.json()
    console.log(data)
}catch(ero){
    console.log(ero)
}
```

​	

### React路由：

#### 	SPA理解：

​		1.单页面Web应用 (single page web application, SPA)

​		2.整个应用只有**一个完整的页面**

​		3.点击页面中的链接**不会刷新**页面，只会做页面的**局部刷新**

​		4.数据都需要通过ajax 请求获取，并在前端异步展示

#### 路由得理解：

##### 	什么是路由：

1. 一个路由就是一个映射关系(key : value)
2. key位路径，value可能是 component 或者 fun
3. ​

####     路由分类

​	1.后端路由：

​		理解：value为 function ， 用于处理客户端得提交得请求

​		注册路由：router.get(path, function(req,res) {   })

​		工作流程：当node 接收到得是一个请求时，根据请求路径找到匹配得路由，调用路由中得函数体处理请求，返回响应数据

​	2.前端路由：	

​		浏览器端路由：value 是component ， 用于展示页面内容

​		注册路由：<Route path="/test" component={Test}></Route>

 	   工作流程：当浏览器得地址栏 path 改为了"/test"时，当前路由组件就会变成 Test组件		

#### 	前端路由得原理：

​		利用BOM 身上得 history 对象，通过内部得API进行跳转

#### 	react-router-dom的理解；

​		1.react 的一个插件库

​		2.专门用啦实现一个SPA应用

​		3.基于react的项目基本都会使用到该库

​		概念：react-router分为三个库：web(web人员专用) , native , any

##### 	路由基础案例：

​		第一步：安装 npm i react-router-dom

​		第二部：引入组件 

​			import {Route,Link} from "react-router-dom"

​		第三步：使用组件

​			Link：

​				属性：to ：跳转到那一条链接

​				使用：<Link to="/home">Home</Link>

​			Route:

​				属性：

​					path：监听的路由关键子

​					component：展示的组件

​				使用：<Route path="/home" component={Home}><Route>

​		第四步：需要给整个项目交给一个路由来管理

​			在index 入口文件中引入组件 BrowserRouter import {BrowserRouter} from "react-router-dom"

​			在App组件的外侧包裹一层 BrowserRouter

Link组件的使用

```jsx
{/*使用react-router-dom 实现路由的跳转*/}
    <Link className="list-group-item"  to={"/home"}>Home</Link>
    <Link className="list-group-item"  to={"/about"}>About</Link>
```

Route组件的使用：

```jsx
<Route path="/home" component={Home}/>
<Route path="/about" component={About}/>
```

BrowserRouter组件的使用：

```jsx
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, document.getElementById("root"))
```

#### 路由组件与一般组件的差别：

​	1.写法不同：

​		一般组件：<Demo/>

​		路由组件：<Route path="/demo" component={Demo}/>

​	2.存放的位置不同：

​		一般组件：components

​		路由组件：pages

​	3.接收到的props参数

​		一般组件：写组件标签时传递了什么，就能接收什么

​		路由组件：接收到三个固定值：

​						history:

​							go：

​							goBack:

​							goForward:

​							push:

​							replace

​						location:

​							pathname:

​							search

​							state

​						match:

​							params:

​							path:

​							url:

#### 			NavLink组件的使用：

​				需要给Link添加高亮的效果：Link 实现比较复杂，插件帮我们封装好了一个新的组件 NavLink

​				使用方式：<NavLink></NavLink>

​				参数：

​					to：到哪个路由去

​					activeClassName = "active" ：高亮显示

#### 		封装NavLink：

```jsx
import React,{Component} from "react"
import {NavLink} from "react-router-dom";

export default class MyNavLink extends Component{
    render() {
        console.log(this.props)
        return (
            <NavLink activeClassName="dbbxll" className="list-group-item" {...this.props} />
        )
    }
}
//调用形式
   <MyNavLink to="/about" a="a" b="b" c={"c"} >About</MyNavLink>
   <MyNavLink to="/home">Home</MyNavLink>
```

​	传递过来的props属性：NavLink 默认属性children如果传递的话直接更改NavLink的显示内容

​							a: "a"
​							b: "b"
​							c: "c"
​							children: "About"
​							to: "/about"

#### Switch组件的使用:

​	通常情况下：path和component 是一一对应的关系

​	默认情况下组件会一个一个匹配一直查找下去，如果在一个大型的项目中由很多的路由那么就影响了效率了，那么使用<Switch>组件

​	<Swich> <Route></Route>.... </Swich>	

#### bootStarp样式丢失问题:

​	样式的来源是通过脚手架默认的根目录为pulick

​	解决方法：

​		public / index.html 中 引入样式中不写 ./ 写 / (常用)

​		public / index.html 中 引入样式中不写 ./ 写 %PUBLIC_URL%

​		使用 HashRouter

#### 严格匹配与模糊匹配:

​	1.默认使用的是模糊匹配，（简单记：输入的路径 必须包含要 匹配的路径，且顺序一致）

​	2.开启严格匹配：<Route exact={true} path="/home" component={Home} />

​	3.严格模式不要随意开启，需要再开，有的时候开启会导致无法继续匹配二级路由

#### Redirect的使用：

​	进入项目默认展示的路由,

​	使用方式：<Redirect to="/home" />

​	放在所有路由的最下方，如果都没有匹配上的话那么执行

#### 嵌套路由：

​	多级路由，在父路由中又有子路由，子路由又有子子路由，这就叫做路由的嵌套

​	使用的规则

​		在 to 属性中要把父路由也全部都写上  /home/news

​		路由的匹配时按照注册路由的顺序进行的

```jsx
    <ul className="nav nav-tabs">
        <li>
            <MyNavLink to="/home/news">News</MyNavLink>
        </li>
        <li>
            <MyNavLink to="/home/message">Message</MyNavLink>
        </li>
    </ul>
</div>
<Route path="/home/news" component={News}/>
<Route path="/home/message" component={Message}/>
```

#### 路由传递参数：	

##### 	第一种方式：params传递方式：

```jsx
路由链接（携带参数）：
<Link to="/home/message/tom/18">详情</Link>
注册路由(声明参数)：
<Route path="/home/message/:name/:age" component={Detail}/>
接收参数
const {name,age} = this.props.match.params
```

##### 	第二种方式：Search 传递参数

​		知识点：key=value&key=value 的形式叫做 urlencouded形式

```jsx
路由链接（携带参数）： <Link to='/home/message/detail?id=tom&age=12'>详情</Link>
注册路由（无需声明，正常注册即可）：<Route path="/home/message/detail" component={Detail}/>
接收参数：this.props.location.search
备注：获取到的search 是urlencoded编码字符串，需要借助queryString 解析
```

##### 	第三种方式：state传递参数

```jsx
路由链接（携带参数）： <Link to={{pathname:"/home/message/detail",state:{id:"001",title:'消息1'}}>详情</Link>
注册路由（无需声明，正常注册即可）：<Route path="/home/message/detail" component={Detail}/>
接收参数：this.props.location.state
备注：刷新也是可以保留参数的
```

#### 路由跳转:

​	push模式：默认，留下痕迹，可以倒退

​	replact模式：不留下痕迹，不可以倒退，需要设置

```jsx
<link replact to="/home/message/detail">详情</link>
```

#### 编程式路由导航：

​	概念：我们之前用于路由跳转得方式是使用 Link 和 NavLink 组件进行跳转，我们如果要采取自己定义一个按钮进行跳转该怎么跳转呢，这时候我们就要用到 history 身上得API了

​	使用：

```jsx
this.props.history.replace(path , state)   //不能后退得跳转方式
this.props.history.push(path,state)  //可以后退得跳转方式
this.props.history.goBack() //后退
this.props.history.goForWard()  //前进
this.props.history.go() //前进后退由参数决定
注意：push 和 replace 可以接收两个参数第一个参数为 路由跳转地址path 第二个参数为 state 利用state传参得话需要再这个参数中声明
```

#### withRouter得使用：

​	概念：如果我们要在一般组件得身上使用路由怎么办呢，要知道一般组件是没有history对象得那么，我们要使用 withRouter这个函数了，他需要加工一般组件

​	使用方法

```jsx
export default withRouter(Header)
注意:
	Header为函数式组件
	withRouter加工后就拥有了路由得那么参数
```

#### HashRouter 和 BrowSerRouter得区别：

​	1.底层得原理不同：

​		BrowSerRouter使用的是H5的history API ， 不兼容 IE9及IE9以下的版本

​		HashRouter 使用的URL是哈希值

​	2.path表现样式不一样

​		BrowSerRoouter的路径中没有#，例如：localhost:3000/home/message

​		HashRouter的路径中有# , 例如：localhost:3000/#/home/message

​	3.刷新后对路由state参数的影响

​		BrowserRouter 没有任何影响，因为state会保存到history对象中

​		HashRouter 刷新后会导致路径中state参数的丢失！！！！

​	4.备注：HashRouter 可以用于解决一些路径错误的相关的问题

### ReactUI组件库:

#### 	流行得开源得 React UI 组件库：

​		material-ui		https://material-ui.com/zh/		国外得

​		ant-design(国内蚂蚁金服)	https://ant.design/index-cn 国内人士用的比较多

​			也称：antd 

​		下载：npm i antd 

​		引入 antd ：import {Botton} from "antd"

​		引入 antd样式：import "antd/dist/antd.css"

##### 		按需引入样式，和更换主题的话：

​			如果想按需导入样式得话需要进行高级项得配置

​			安装依赖：npm install react-app-rewired  customize-cra  babel-plugin-import  less less-loader

​			第二步修改package.json ：

```json
"start": "react-app-rewired start",
"build": "react-app-rewired build",
"test": "react-app-rewired test",
```

​			第三步新建config-overrides.js 文件

​			第四步添加内容：

```js
const { override, fixBabelImports,addLessLoader  } = require('customize-cra');

 module.exports = override(
       fixBabelImports('import', {
           libraryName: 'antd',
           libraryDirectory: 'es',
           style: true,
       }),
      addLessLoader({
          lessOptions:{
              javascriptEnabled: true,
              modifyVars: { '@primary-color': 'red' }
          }
    }),
 );
```

​		 第五步：将 import "antd/dist/antd.css" 删除

​		第六步：运行 npm start

​	具体可查看文档：https://3x.ant.design/docs/react/use-with-create-react-app-cn

​		细节： 文档中的addlessLoader更新了，需要用lessOptions 将其包裹起来



### 第七章：radux

#### 		radux是什么：

​			1.radux 是一个专门做状态管理的一个JS库，不用react插件库，它可以用在Vue，React，angular 身上，但是基本用在react身上

​			2.作用：集中状态管理react 应用中多个组件共享状态

#### 		使用场景：

​			某个组件的状态，需要让其他组件可以随时拿到 (共享)

​			一个组件需要改变另一个组件的状态(通信)

​			总体原则：能不用就不用，如果不用会很麻烦的话可以使用

#### 		三个核心

##### 			action:

​					1.动作对象，

​					2.包含两个属性：

​						type：标识属性，值为字符串，唯一，必要属性

​						data：数据属性，值类型任意，可选属性

​					3.例子：{type : "ADD_STUDENT" , data :{name : "tom" , age : 12}} 

##### 			reducer

​					1.用于初始化，加工状态

​					2.加公时，根据旧的 state 和 action ，产生新的state的纯函数

##### 			store:

​					1.将state，action，reducer 联系在在一起的对象

​					2.如何得到此对象？

​						import (craeteStore) from "redux"

​						import reducer from "./reducers"

​						const store = createStore(reducer)

​					3对象的功能：

​						getState()：得到State

​						dispatch(action)：分发 action ， 触发reducer，产生新的state

​						subscribe(litener) ：注册监听，当产生了新的state时，自动调用

####  			store简单版：

​				store.js中的内容：

```js
// 用于创建store
//引入redux,createStore用于创建store
import {createStore} from "redux"
//引入reducer用于加工初始化状态
import ReducerCount from "./count_reducer"
//暴露store
export default createStore(ReducerCount)
```

​		count_reducer.js中的内容：

```js
//加工和初始化状态
export default function countReducer(preState,action) {
    //获取type于data
    let {type , data} = action
    switch (type) {
        case "increment":
            return preState + data
        case "decrement":
            return preState - data
        default :
            return 0
    }
}
```

​		三种API的使用：

```js
监听状态发生的变化      
//监听状态发生的变化
store.subscribe(()=>{
    ReactDOM.render(<App/>,document.getElementById("root"))
})
加工状态
store.dispatch({
	type:'increment',
    data:value*1
})
获取状态的值
store.getState()
```

#### 完整版：

​	增加了两个文件：

​		第一个文件用于管理redux中的变量的：increment , decrement  作用：便于管理的同时，防止程序员单词写错

​		第二个文件count_action ：用于存储action对象

​	count_action文件：

```js
//这里定义actions相关的内容
import {INCREMENT,DECREMENT} from "./constant"
//加法
// function createIncrementAction(data) {
//     return {
//         type:"increment",
//         data
//     }
// }
// 加法
export const createIncrementAction = (data) => ({type:INCREMENT, data})
//减法
export const createDecrementAction = (data) => ({type:DECREMENT, data})
```

​	constant文件：

```js
//用于存储radux中的变量
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
```

#### 求和案例，异步的action版本

​	(1)明确：延迟的动作不想交给组件自身，想交给actions

​	(2)何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回，

​	(3)具体编码：

​			npm install redux-thunk ，配置在store中

​			创建action 的函数不在返回action对象，而是返回一个函数，该函数中写异步任务

​			异步任务有结果后，分发给同步的action去真正的实现操作

​	(4)备注：异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action。

#### 自己写的时候的思想：

​	记住API 

​		store.getState()、store.subscribe() 、store.dispatch()

​	记住文件：count_action  count_reducter store constant

​	记住各自的功能：

​		count_action  ：这个文件主要是定义一些一般action，和异步action

​		count_reducter：这个文件主要是对内容进行操作，暴露一个函数接收prestate和action

​		store：这个核心，react内部已经给我写好了，只需要调用其方法，

​			第一步：创建sotre ，借助createStore

​			第二部：引入count_reducter

​			第三步：暴露：export default createState(count_render)

​			第四步：如果想使用异步的action 这里需要一个中简介：

​				applyMiddleware 使用方式：export default createState(count_render , applyMiddleware(thunk))

​				注意：thunk 是插件 redux-thunk

​		constant

​				定义一些用得到的变量

#### react-redux 的理解：

​	这个是React 官方出的一个 插件库：目的是为了更好的用redux

​	概念：

​		所有的UI组件都应该包裹一个容器组件，他们是父子关系

​		容器组件时真正的与react-redux打交道的，里面可以随意的使用redux中的方法

​		UI组件中不能使用react-redux的API	

​		容器组件中传给UI组件：(1).redux中所有保存的状态，(2)用于操作状态的方法

​		备注：容器给UI组件传递：状态，操作状态的方法，均通过props传递

App代码 注意: store的传递方式

```js
import React,{Component} from "react"
//引入store
import store from "./redux/store"
import Count from "./container/Count"


export default class App extends Component{
    render() {
        return (
            <div>
                <Count store={store}/>
            </div>
        );
    }
}
```

container下的Count代码：

```js
/*
* 这个文件用于对countUi组件和count容器组件进行关联，并且操作redux
* */
//引入CountUI组件
import CountUi from "../../component/Count"

//引入react-redux插件，作用用来连接 UI和store
import {connect} from "react-redux"

//引入actions
import {createDecrementAction,createIncrementAsyncAction,createIncrementAction} from "../../redux/count_action";

//进行对store操作
/*使用方式
* 这个函数有connect去执行，
* 这个函数返回一个对象
* 返回值作为子组件的props
* 默认传递给我们redux的状态
* */
function mapStateToProps(state){
    return {
        count:state
    }
}
/* mapDispatchToProps的作用：对状态进行操作，因此key中的value为函数
* 这个函数有connect去执行，
* 这个函数返回一个对象
* 返回值作为子组件的props
* 默认传递给我们redux的dispatch
* */
function mapDispatchToProps(dispatch){
    return {
        addCount:(data)=>{
            dispatch(createIncrementAction(data))
        },
        subCount:(data)=>{
            dispatch(createDecrementAction(data))
        },
        asyncAddCount:(data,time)=>{
            dispatch(createIncrementAsyncAction(data,time))
        },
    }
}
//连接并暴露(核心)
export default connect(mapStateToProps,mapDispatchToProps)(CountUi)
```

#### react-redux的简写方式:

```js
/*
* 这个文件用于对countUi组件和count容器组件进行关联，并且操作redux
* */
//引入CountUI组件
import CountUi from "../../component/Count"
//引入react-redux插件，作用用来连接 UI和store
import {connect} from "react-redux"
//引入actions
import {createDecrementAction,createIncrementAsyncAction,createIncrementAction} from "../../redux/count_action";

//连接并暴露(核心) 
//两个参数为函数，第一个参数为保存的状态，第二个函数操作状态的方法  
//第二参数也可以传入一个对象，但是这个action必须是一个函数，然后react-redux内部会进行调用，并且利用dispatch进行操作状态
export default connect(
    (state)=>( { count:state } ),
   /* (dispatch)=>({
        addCount:(data)=>{
            dispatch(createIncrementAction(data))
        },
        subCount:(data)=>{
            dispatch(createDecrementAction(data))
        },
        asyncAddCount:(data,time)=>{
            dispatch(createIncrementAsyncAction(data,time))
        },
    })*/
    {
        addCount:createIncrementAction,
        subCount:createDecrementAction,
        asyncAddCount:createIncrementAsyncAction
    }
)(CountUi)
```

#### react-redux插件的优化:

​	1.容器组件和UI组件整合成一个组件

​	2.无需自己给容器组件传递store，给<App/>包裹一个<Provider store={store}>即可

​	3.使用了react-redux后不用再自己检测readux中状态的改变了，容器组件可以自动完成这个工作

​	4.mapDispatchToprops 也可以写成一个对象

​	5.一个组件要和redux 打交道 需要经过那几步：

​		1.定义好UI组件 ————不暴露

​		2.引入connect 生成一个容器组件，并暴露，写法如下：

​			connect(

​				state => ( key : state),

​				{key : xxxxxAction}						

​			)(UI组件)

​		3.再UI组件中通过this.props.xxxx 读取和操作状态

整合成一个组件的写法：	

```jsx
/*
* 这个文件用于对countUi组件和count容器组件进行关联，并且操作redux
* */
import React,{Component} from "react"
//引入react-redux插件，作用用来连接 UI和store
import {connect} from "react-redux"
//引入actions
import {createDecrementAction,createIncrementAsyncAction,createIncrementAction} from "../../redux/count_action";
//整合：
class Count extends Component{

    incrementCount = ()=>{
        let {value} = this.selectCount
        this.props.addCount(value * 1)
    }

    decrementCount = ()=>{
        let {value} = this.selectCount
        this.props.subCount(value * 1)
    }

    oddCount = ()=>{
        let {value} = this.selectCount
        if(this.props.count %2 !== 0 ) this.props.addCount(value * 1)
    }
    //发送异步action
    asyncCount = ()=>{
        let {value} = this.selectCount
        this.props.asyncAddCount(value*1 , 500)
    }

    render() {
        return (
            <div>
                <h2>当前计数：{this.props.count}</h2>
                <select ref={(node)=>{ this.selectCount = node}}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select> &nbsp;
                <button onClick={this.incrementCount}>+</button> &nbsp;
                <button onClick={this.decrementCount}>-</button> &nbsp;
                <button onClick={this.oddCount}>奇数加</button> &nbsp;
                <button onClick={this.asyncCount}>异步加</button> &nbsp;
            </div>
        );
    }
}

//连接并暴露(核心)
//两个参数为函数，第一个参数为保存的状态，第二个函数操作状态的方法
//第二参数也可以传入一个对象，但是这个action必须是一个函数，然后react-redux内部会进行调用，并且利用dispatch进行操作状态
export default connect(
    (state)=>( { count:state } ),
   //一般写法
   /* (dispatch)=>({
        addCount:(data)=>{
            dispatch(createIncrementAction(data))
        },
        subCount:(data)=>{
            dispatch(createDecrementAction(data))
        },
        asyncAddCount:(data,time)=>{
            dispatch(createIncrementAsyncAction(data,time))
        },
    })*/
    {
        addCount:createIncrementAction,
        subCount:createDecrementAction,
        asyncAddCount:createIncrementAsyncAction
    }

)(Count)
```

index.js的写法：

```jsx
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import store from "./redux/store"
import {Provider} from "react-redux"

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)
```

#### 组件之间的共享：重点

​	1. 定义一个person 组件，和Count组件通过redux共享数据

​	2. 为Person组件编写，reducer , action，配置constant 常量

​	3. 重点：person的Reducer和 count 的Reducer 要使用combineReducers 进行合并

​		合并后的总状态是一个对象！！！

​	4. 交给store的是总reducer，最后注意再组件中取出状态的时候要"取到位"

​	5. 自己写命令的我问题：

​		combinReducers传入的是一个对象，对象的value位自己创建的reducer，并且有返回值，需要将**返回值添加**到createStore中

​	store文件的内容

```js
/*
* createStore：创建store
* applyMiddleware：处理异步的actions
* combineReducers：合并多个reducers
* */
    import {createStore,applyMiddleware,combineReducers} from "redux"
//引入处理Count的reducer
import countRender from "./reducers/count"
//引入处理Person的reducer
import personReducer from "./reducers/person";

import thunk from "redux-thunk"

const allReducers = combineReducers({
    he:countRender,
    renshu:personReducer
})

export default createStore(allReducers,applyMiddleware(thunk))
```

​	

#### 纯函数：

​	概念：一类特别的函数：只要是同样的输入(实参)，必定会得到同样的输出(返回)

​	必须遵守以下一些约束

​		1.不得改写参数数据

​		2.不会产生任何副作用，例如网络请求，输入输出设别

​		3.不能识别 Date.now() 和 Math.random() 等不纯的方法

​	redux的reducer 函数必须是一个纯函数

#### react-redux开发者工具的使用：

​	第一步：安装插件：npm install redux-devtools-extension

​	第二步：store中进行配置

​		import {composeWithDevTools} from "redux-devtools-extension"

​		const store = createStore( allRduncer, composeWithDevTools(applyMiddleware(thunk)) )

#### 对项目进行优化：

​	所有的变量名字要规范，尽量出发对象的简写方式

​	.reducers 文件夹中，编写index.js专门用于汇总并暴露所有的reducer

### 第八章扩展：

#### 	配置服务器：

​		当项目上线了的话我们要用npm run build 进行打包文件：

​		全局安装一个插件 npm install serve -g

​		之后选择一个文件的为根路劲：server build

#### 	setState扩展:

​	概念：setState用于对状态进行发生改变从而驱使着页面的更新

​	用法：	

```js
/*对象式写法*/
let {count} = this.state
this.setState({count: count+1},()=>{
    console.log("更新完成",this.state.count)
})

/*函数式写法
* react传入两个参数state和props
* */
this.setState((state,props)=>{
    console.log(state,props)
    return {count : state.count +1}
})
```

#### 懒加载：

​	路由懒加载 lazy s

​	需要借助react提供的lazy属性和Suspense组件  并且需要指定 fallback={}

```jsx
/*lazy：动态路由*/
import React , {Component,lazy,Suspense} from "react"
import {Route,NavLink} from "react-router-dom"
import "./lazy.css"
import Lodding from "./Lodding";

// import Home from "./Home";
// import About from "./About";
//动态路由
const Home = lazy(() =>  import("./Home"))
const About = lazy(() => import("./About"))


export default class Demo extends Component{
    render() {
        return (
            <div>
                <h2>lazy组件</h2>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>

                <hr/>
                <Suspense fallback={<Lodding/>}>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                </Suspense>
            </div>
        );
    }
}
```

#### 	Hook：

​		函数式组件中拥有：state，生命周期钩子，ref

##### 	什么是Hook

```
(1). Hook是React 16.8.0版本增加的新特性/新语法
(2). 可以让你在函数组件中使用 state 以及其他的 React 特性
```

##### 	三个常用的钩子

```
(1). State Hook: React.useState()
(2). Effect Hook: React.useEffect()
(3). Ref Hook: React.useRef()
```

##### 	State Hook

```
(1). "State Hook"让函数组件也可以有state状态, 并进行状态数据的读写操作
(2). 语法: const [xxx, setXxx] = React.useState(initValue)  
(3). useState()说明:
        参数: 第一次初始化指定的值在内部作缓存
        返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
(4). setXxx()2种写法:
        setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
        setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值
```

##### 	Effect Hook

```
(1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
(2). React中的副作用操作:
        发ajax请求数据获取
        设置订阅 / 启动定时器
        手动更改真实DOM
(3). 语法和说明: 
        useEffect(() => { 
          // 在此可以执行任何带副作用操作
          return () => { // 在组件卸载前执行
            // 在此做一些收尾工作, 比如清除定时器/取消订阅等
          }
        }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
    
(4). 可以把 useEffect Hook 看做如下三个函数的组合
        componentDidMount()
        componentDidUpdate()
    	componentWillUnmount() 
```

##### useRef()	

```
类式组件使用Ref
	myRef = React.createRef()
	ref={this.myRef}
	this.myRef.current.value()
函数式组件中使用Ref
	let Ref = React.useRef()
	ref={Ref}
	Ref.current.value()
```

#### Fragment:

​	引入 import {Fragment} from "react"

​	使用<Fragment></Fragment>

​	其他写法：<></>

​	作用：忽略标签，可以设置key值

#### Context：

​	概念：子组件与父组件之间的通信方式是 props  祖组件与孙组件用到的技术为context

##### 	使用方式：

​		创建context

​			const = MyContext = React.createContext()

​		渲染子组件时需要包裹一层 Provider   获取方式：const {Provider}  =  MyContext

```html
	<Provider value={{username:"tom"}}>  <B/>    </Provider>
```

​		后代组件进行接收数据：

​			方式一：仅仅用于类式组件

```
第一步：声明接收：
	static contextType = MyContext   //这里不能更改 contextType
	this.context.username 获取里面的值
```

​			方式二：用于类式组件和函数式组件：

```
引入一个组件：const {Consumer} = MyContext
	<Consumer>
		{
			(value) => {
				//value中存放放入的值
				return `${value.username}`
			}
		}
	</Consumer>

```



#### PureComponent

​	概念：组件过度的渲染，会导致效率上的问题

```
需求，
    如果用户没有对状态进行更新的话那么render函数不执行，对状态发生了改变的话才执行
    如果父组件传递过去的props还是一样的值得话那么父组件不进行更新
```

​	第一种方式：利用shouldComponentUpdate  默认传递三个参数：nextProps，nextState，nextContext

```js
shouldComponentUpdate(nextProps, nextState) {
    //判断nextState是否相同
    if(nextState.carName === this.state.carName){
        return false
    }
    return true
}
```

​	利用 PureComponent

```jsx
import React , {PureComponent} from "react"
export default Parent extends PureComponent {}
```

​	注意点：我们在进行状态进行更新的时候不要在原状态上进行改变，而需要创建一个新的对象，因为 PureComponent 只是浅比较，只是探讨地址上是否发生改变

​		所以我们尽量使用 [...this.state.users]，少使用push pop unshift shift

#### renderProps：

​	在组件内部预留一个插槽，等到程序员需要将什么组件放进去的时候再放进去

​	Vue中有 ：slot技术

​	React中有：renderProps技术

##### 	React插槽技术:

###### 		children props

```jsx
{/*第一种方式 使用childrenProps */}
<A>
    <B/>
</A>
{/*第一种方式 从children属性种获取*/}
  {this.props.children}
```

###### 		renderprops

```jsx
{/*第二种方式使用renderProps*/}
<A render={(name) => {return <B username={name}/>} } />
{/*第二种方式，传过来一个函数，然后调用，函数返回值放在这里*/}
{this.props.render(this.state.username)}
```

#### 错误边界：

​	理解：错误边界(Error boundary)：用来捕获组件错误，渲染出备用页面

##### 	特点：

​		只能捕获后代组件声明周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件，定时器中产生的错误

##### 	使用方式：

​		getDerivedStateFromError配合 componentDidCatch

getDerivedStateFromError的使用：需要返回一个状态对象，并且直接更改状态值

```jsx
state = {
   shouldError : ""
}

//当子组件发生错误的时候调用这个钩子
static getDerivedStateFromError(ero){
    console.log(ero)
    return {
        shouldError : ero
    }
}
```

```jsx
//当render函数出现问题的时候调用
componentDidCatch(error, errorInfo) {
    console.log(error,errorInfo)
    console.log("当前出错")
}
```

#### 组件通信方式总结：

##### 	组件的关系

​		父子关系：

​		兄弟关系

​		祖孙关系

##### 	通信的方式：

​		props：

​			(1) children props

​			(2) render props

​		消息订阅与发布：

​			pubs-sub

​		集中式管理

​			redux

​		Context：

​			生产者-消费者模式

##### 	比较好的搭配

​		父子组件：props

​		兄弟组件：消息订阅-发布，集中式管理

​		祖孙组件（跨级组件）：消息订阅-发布，集中式状态管理，conText(开发用的少，封装插件用的多)

##### reactRouter6:

```
BrowserRouter
Routers
Router
Link
NavLink:
Navigate:重定向
outLet：对应匹配路由
Hooks：
	useRouters:创建路由表
	useNavigate：编程式路由导航
	useParams：切换路由传递params参数
	useSearchParams：切换传递search参数 他有点像 useState  并且需要用get进行获取属性
	useLocation：能够拿到 state 参数
	useMatch：还原 5 的 Match参数
	useInRouterContext：是否是路由撒谎上下文
	useNavigationType：路由进入的方式 push pop replace pop 为刷新
	useOutlet：可以获取子集路由的属性
	useResolvePath：给定一个URL可以帮助你解析
```



​	 