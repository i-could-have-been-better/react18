// 手写 Promise
// 支持异步存储与取出，但是异步任务不支持连续取值，并且代码不符合微任务执行机制

const PROMISESTATE = {
  PENDING: 1,
  FULFILLED: 2,
  REJECTD: 3
}


class MyPromise {

  #result;
  #state = PROMISESTATE.PENDING //pending fulfilled rejected 

  #callback;

  constructor(executor) {
    executor(this.#resolve.bind(this), this.#reject.bind(this));
  }

  #resolve(value) {
    if (this.#state != PROMISESTATE.PENDING) return;
    this.#result = value;
    this.#state = PROMISESTATE.FULFILLED

    this.#callback && this.#callback(this.#result);
  }

  #reject() {

  }

  then(onFulfilled, onRejectd) {
    // then第一进入的时候state还处于pending那么是异步函数，得在resolve方法中执行
    if (this.#state === PROMISESTATE.PENDING) {
      this.#callback = onFulfilled;
    } else if (this.#state === PROMISESTATE.FULFILLED) {
      onFulfilled(this.#result);
    }
  }

}

const mp = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("孙悟空");
  }, 1000);
})

mp.then(result => {
  console.log("保存的值", result);
}, reject => {

})
