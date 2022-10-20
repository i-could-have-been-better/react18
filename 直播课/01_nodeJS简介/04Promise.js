/*  静态方法
        Promise.resolve     立即返回Promise执行正确结果
        Promise.catch       立即返回Promise错误的结果
        Promise.finally     无论成功或者失败都会执行，无返回值    
        Promise.all         
            Promise.all([...])
                            接收 Promise 数组，所有Promise中的内容都完成了才返回所有的值，不然报错
        Promise.allSettled
            Promise.allSettled([...])
                            接收 Promise 数组，所有Promise中的内容都会返回无论成功或者失败
        Promise.race
            Promise.race([...])
                            接收 Promise 数组，所有Promise中的内容哪个返回快返回哪一个，如果哪个快的错误了，就会报错
        Promise.any
            Promise.any([...])
                            接收 Promise 数组，所有Promise中的内容有一个成功就返回哪一个，如果都不成功的话那么就返回错误的信息
*/

// Promise.resolve("哈哈哈").then(res => console.log(res));

// Promise.reject("出错了！").catch(reason => console.log(reason));


// Promise.all(
//     [
//         Promise.resolve("111"),
//         Promise.resolve("222"),
//         Promise.reject("出错啦"),
//         Promise.resolve("333")
//     ]
// ).then(res => {
//     console.log(res);
// }).catch(reason => console.log(reason))


// Promise.allSettled(
//     [
//         Promise.resolve("111"),
//         Promise.resolve("222"),
//         Promise.reject("出错啦"),
//         Promise.resolve("333")
//     ]
// ).then(res => {
//     console.log(res);
// }).catch(reason => console.log(reason))

// Promise.race(
//     [
//         Promise.reject("出错啦"),
//         Promise.resolve("111"),
//         Promise.resolve("222"),
//         Promise.resolve("333")
//     ]
// ).then(res => {
//     console.log(res);
// }).catch(reason => console.log(reason))

Promise.any(
    [
        Promise.reject("出错啦"),
        Promise.reject("出错啦"),
        Promise.reject("222"),
        Promise.reject("333")
    ]
).then(res => {
    console.log(res);
}).catch(reason => console.log(reason))