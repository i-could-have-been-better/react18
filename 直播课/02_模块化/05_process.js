// 全局对象，在node环境中 没有window 通过 globalThis 指定全局变量
// console.log(window); 报错
console.log(globalThis);


// process 进程
console.log(process);


// process.exit 结束进程
// process.nextTick 开启一个tick任务队列，比微任务队列优先级高，是微任务队列出来前的解决方案

console.log(1111);
// process.exit(); 
// process.exit(111);    // 指定结束的类型
console.log(2222);
console.log(3333);


setTimeout(() => {
  console.log(1);
})

console.log(2);

process.nextTick(() => {
  console.log(3);
})

queueMicrotask(() => {
  console.log(4);
})

console.log(5);

// 执行结果 25431