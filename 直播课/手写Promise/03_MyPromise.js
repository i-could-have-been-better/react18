// 手写 Promise
// 解决异步任务多次获取值得问题，完善Promise微任务机制，问题：不支持Promise链式调用 then 没有返回值

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
    // then第一进入的时候state还处于pending那么是异步函数，得在resolve方法中执行
    if (this.#state === PROMISESTATE.PENDING) {
      this.#callback.push(() => {
        onFulfilled(this.#result);
      });
    } else if (this.#state === PROMISESTATE.FULFILLED) {
      // 开启微任务执行
      queueMicrotask(() => {
        onFulfilled(this.#result);
      })
    }
  }

}

const mp = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("孙悟空");
  }, 100)
})


const thenResult = mp.then(result => {
  console.log("保存的值1", result);
})

console.log(thenResult);      // undefined 不支持链式调用
