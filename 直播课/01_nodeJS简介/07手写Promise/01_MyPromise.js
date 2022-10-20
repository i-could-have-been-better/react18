// 手写 Promise
// 支持存储与取出，不支持异步添加数据

class MyPromise {

  #result;
  #state = "pending" //pending fulfilled rejected 

  constructor(executor) {
    executor(this.#resolve.bind(this), this.#reject.bind(this));
  }

  #resolve(value) {
    if (this.#state != "pending") return;
    this.#result = value;
    this.#state = "fulfilled"
  }

  #reject() {

  }

  then(onFulfilled, onRejectd) {
    if (this.#state === "fulfilled") {
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
