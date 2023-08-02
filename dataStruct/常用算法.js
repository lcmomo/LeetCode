// es6 数组reduce高级用法
// 1. 统计数组中各个元素出现的次数
let numbers = [1, 2,3,2,4,4,3, 5];

let numCount = numbers.reduce((pre, cur) => {
  if (cur in pre) {
    pre[cur]++;
  } else {
    pre[cur] = 1;
  }
  return pre;
}, {});
console.log(numCount);

// 2. 数组去重
let uniqueNumber = numbers.reduce((pre, cur) => {
  if (!pre.includes(cur)) {
    return pre.concat(cur);
  } else return pre;
}, []);
console.log(uniqueNumber);

// 3. 二维数组转一维数组
let arr1 = [[0, 1], [2, 3], [4, 5]];
let newArr1 = arr1.reduce((pre, cur) => {
  return pre.concat(cur);
}, []);
console.log(newArr1);

// 4. 多维数组转一维数组
let arr2 = [[0,1], [2, 3], [4, [5, 6, 7]]];
const newArr2 = function(arr) {
  return arr.reduce((pre, cur) => 
  pre.concat(Array.isArray(cur) ? arguments.callee(cur) : cur), []);
}

console.log(newArr2(arr2))