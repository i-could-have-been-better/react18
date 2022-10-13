// 异步代码
function sum(a, b, cb) {
    setTimeout(() => {
        cb(a + b)
    }, 1000);
}

// 传统的异步处理方式
sum(1, 2, (res) => {
    console.log("返回的结果:", res);
})


// 出现的问题 回调地狱(死亡金字塔)

sum(123, 456, (res) => {
    sum(res, 789, (res) => {
        sum(res, 10, (res) => {
            sum(res, 20, (res) => {
                sum(res, 30, (res) => {
                    console.log("最终的数据", res);
                })
            })
        })
    })
})