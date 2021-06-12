/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 */

 /**
  * 
  * 给定一个非负整数 N，找出小于或等于 N 的最大的整数，同时这个整数需要满足其各个位数上的数字是单调递增。

    （当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。）

    示例 1:

    输入: N = 10
    输出: 9
    示例 2:

    输入: N = 1234
    输出: 1234
    示例 3:

    输入: N = 332
    输出: 299
    说明: N 是在 [0, 10^9] 范围内的一个整数。
  */

  /**
   * 
   * 思路： 贪心法
   *    如果这个数尽可能大，那么这个数从高位开始尽可能保持不变。
   *    1. 找出从高到低第一个满足str[i] > str[i+1] 的位置，然后把str[i] - 1,再把后面的位置都变为9即可
   *    2. 由于减小了str[i] 后，可能不满足str[i - 1] <= str[i] 了，这种情况，肯定有str[i-1]===str[i],此时需要str【i-1】-1，递归处理到某个位置str[idx],则会有
   *        str[idx] == str[idx+1]==... == str[i], 只要str[idx] - 1，后面都补上9即可  
   */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {

    let arr = N.toString().split('').map(v => +v);

    let max = -1;
    let idx = -1;

    for (let i = 0; i< arr.length - 1; i++) {
        if (max <arr[i]) {
            max = arr[i];
            idx = i;
        }
        if (arr[i] > arr[i + 1]) {
            arr[idx] -= 1;
            for (let j = idx + 1; j < arr.length; j++) {
                arr[j] = '9'
            }
            break;
        }
    }

    return parseInt(arr.join(''));

};

// 时间复杂度： O（logN）N为数字，log为位数
// 空间复杂度： O（logN）

// let n = 332;
// console.log(monotoneIncreasingDigits(n));
// @lc code=end

