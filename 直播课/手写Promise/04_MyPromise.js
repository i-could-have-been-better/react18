// 手写 Promise
// 完成链式调用

const PROMISESTATE = {
  PENDING: 1,
  FULFILLED: 2,
  REJECTD: 3
}


class MyPromise {

  #result;
  #state = PROMISESTATE.PENDING //pending fulfilled rejected 
  // 异步任务回调函数队列
  #callback = [];

  constructor(executor) {
    executor(this.#resolve.bind(this), this.#reject.bind(this));
  }

  #resolve(value) {
    if (this.#state != PROMISESTATE.PENDING) return;
    this.#result = value;
    this.#state = PROMISESTATE.FULFILLED

    // 遍历回调函数
    this.#callback.forEach(item => {
      // 开启微任务执行
      queueMicrotask(() => {
        item();
      })
    })
  }

  #reject() {

  }

  then(onFulfilled, onRejectd) {

    return new MyPromise((resolve, reject) => {
      // then第一进入的时候state还处于pending那么是异步函数，得在resolve方法中执行
      if (this.#state === PROMISESTATE.PENDING) {
        this.#callback.push(() => {
          // 保存上次调用then的返回值
          resolve(onFulfilled(this.#result));
        });
      } else if (this.#state === PROMISESTATE.FULFILLED) {
        // 开启微任务执行
        queueMicrotask(() => {
          resolve(onFulfilled(this.#result));
        })
      }
    })

  }

}

const mp = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("孙悟空");
  }, 100)
})

mp.then(result => {
  console.log("保存的值1", result);
  return "猪八戒"
}).then(result => {
  console.log("保存的值2", result);
})
