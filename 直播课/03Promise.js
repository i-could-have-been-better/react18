// Promise 存储数据的一个容器，特殊的存取方式使得它能够处理异步数据

function sum(a, b) {
    return new Promise((resolve, reject) => {
        resolve(a + b);
    })
}

// 回调地狱模式
// sum(111, 222).then(res => {
//     sum(res, 333).then(res => {
//         sum(res, 444).then(res => {
//             console.log(res);
//         })
//     })
// })

// Promise 链式调用
// sum(111, 222)
//     .then(res => sum(res, 333))
//     .then(res => sum(res, 444))
//     .then(res => console.log(res))


// Promise错误捕获
    // 利用catch 方法进行捕获，但是catch方法不会捕获自己的错误

sum(111, 222)
    .then(res => Promise.reject("出错啦"))
    .then(res => sum(res, 444))
    .catch(reason => {
        console.log(reason);
        throw new Error("有出错啦")
    })
    .then(res => console.log(res))
    .catch(reason => console.log(reason))





