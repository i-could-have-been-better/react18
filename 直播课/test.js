// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);

const detailAddress = '湖南省长沙市岳麓区，某某街道，某小区，'
const arr1 = [1, 2, 3, 5, 9]
const arr2 = ['一', '十']
const address1 = ['小区', "楼", "村", "栋"]
const address2 = ['省', '市']

let flag = false  // false 的时候为通过 true 就不通过

// 验证 1 
for (const item of arr1) {
  if (detailAddress.indexOf(item) != -1) {
    flag = true;
  }
}
for (const item of arr2) {
  if (detailAddress.indexOf(item) != -1) {
    flag = true;
  }
}

// 1 通过的时候
if (flag) {

  // 验证2
  for (const item of address1) {
    if (detailAddress.indexOf(item) != -1) {
      flag = true;
    }
  }

  // 2通过的时候
  if (flag) {

    // 验证3
    // 最后一个字符
    const lengthStr = detailAddress.at(-1);
    if (address2.indexOf(lengthStr) != -1) {
      flag = false;
    }

    // 3通过的时候
    if (flag) {
      if (detailAddress.length < 12) {
        flag = false
        console.log("长度不能小于12字符");
      }
    } else {
      console.log("最后一个位不能为", address2.join());
    }

  } else {
    console.log("必须包含小区。。。。");
  }
} else {
  console.log("必须包含数组0~9或者零~十");
}

console.log(flag, "状态");