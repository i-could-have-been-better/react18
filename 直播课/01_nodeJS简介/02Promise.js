
/*
    Promise (期约) 
        概念：promise 本身是一个存储数据的对象，但是他存储的数据可以处理异步代码，从而优雅的获取到异步代码执行的结果
        三种状态：pending(数据正在存储，等待中) fulfilled(调用resolve时的状态，成功) rejected(我是手动调用reject或者程序直接出错的结果，出错了)
        接收：
            then方法，接收两个函数，成功时的回调函数与失败时的回调函数
            catch方法，接收一个函数，失败时的回调函数
            finally，接收一个函数，无论成功还是失败都会执行，但是不会接收到参数

        
    */

const promise = new Promise((resolve, reject) => {

    // resolve("我是resolve直接返回的结果")

    // reject("我是reject直接返回的结果");

    // 程序报错
    // throw new ("报错了");

    // setTimeout(() => {
    //     resolve("我是定时器后执行的结果")
    // })

})



const promise2 = new Promise((resolve, reject) => {

    resolve("我是resolve直接返回的结果");

    // setTimeout(() => {
    //     // resolve("我是resolve直接返回的结果")

    //     // reject("我是reject直接返回的结果");

    //     // 程序报错
    //     // throw new ("报错了");
    // }, 1000)

})

const thenRes = promise2.then(res => {
    console.log("成功时返回的结果", res);
}, ero => {
    console.log("失败的返回的结果", ero);
})

const catchRes = promise2.catch(ero => {
    console.log("失败的返回的结果", ero);
})

const finallyRes = promise2.finally(() => {
    console.log("无论啥时候都会执行");
})


setTimeout(() => {
    console.log(thenRes, catchRes, finallyRes);
}, 1000)