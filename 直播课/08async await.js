/**
 * async 将普通函数变成异步函数，函数的返回值是一个Promise
 *    fun1 等价于 fun2
 * 
 * 
*/
async function fun1() {
  console.log(1);
  console.log(2);
  console.log(3);
}

function fun2() {
  return new Promise(resovle => {
    console.log(1);
    console.log(2);
    console.log(3);
    resovle();
  })
}

// fun1()

// fun2();


/**
 * await 将Promise.resolve的返回值直接返回，并且当前块后面的代码需要等待上一个 await 执行之后才能执行
 *    await 只能在async修饰的函数中使用，或者在es模块化中使用，(html 中script的type值为module 或者以 .mjs文件中使用)
 * 
 */

function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000)
  })
}

async function fun3() {
  sum(123, 456)
    .then(res => sum(res, 7))
    .then(res => sum(res, 8))
    .then(res => console.log(res))
}

async function fun4() {
  let result = await sum(123, 456);
  result = await sum(result, 7)
  result = await sum(result, 8)
  console.log(result);
}

// fun4();

// 执行顺序     
/**
 * fun5 与 fun6 等价 await 修饰同步代码的时候，当前代码执行后，会把后续代码放入then
 * 
*/

async function fun5() {
  console.log(1);
  await console.log(2);
  console.log(3);
}

function fun6() {
  return new Promise(resolve => {
    console.log(1);
    console.log(2);
    resolve()
  }).then(res => {
    console.log(3);
  })
}

// fun6()
// console.log(4);

// 执行顺序 1 2 4 3


//立即执行函数  注意要加这个分号
; (async () => {
  await console.log(4);
})()

