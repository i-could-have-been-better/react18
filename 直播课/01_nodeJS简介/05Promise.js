// 宏任务微任务
// JavaScript 是单线程，不像Java与python是可以开启额外的线程去处理，前端的处理方式通过异步，在最开始的时候没有区分宏任务与微任务
// 直到 Promise 的出现单纯的任务队列已经不满足了，开发师觉得如果Promise按照异步任务进行排任务的话那么会导致Promise性能变得比较差
// 所以 Promise 就是微任务，他比宏任务执行得更快、
// 划分的队列：执行队列，任务队列(微任务)、宏任务队列

// setTimeout(() => {                // 宏任务
//   console.log(1);
// })

// Promise.resolve().then(res => {   // 微任务
//   console.log(3);
// })

// console.log(2);                   // 执行任务

console.log("----------------");

console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

// 执行任务 1、7
// 微任务：3、5
// 宏任务：2、6
// 微任务嵌套宏任务: 4

// 执行循序 1、7、3、5、2、6、4
