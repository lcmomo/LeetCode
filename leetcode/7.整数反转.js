/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */




 /**
  * 
  * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

  */


  /**
   * 
   * 1. int, long ,long long , float, double
   *     32   32       64         IEEE 浮点数标准
   */

   // 思路:
  //  循环取整（求余%10）
  //  取整（x = x / 10） 注意判断是否溢出
  //  反向*10+ 余
// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let MAX_VALUE = Math.pow(2, 31) - 1; // 指数运算用pow函数，不能用 (2 ^ 31)
  let MIN_VALUE = Math.pow(-2, 31);
  let rev = 0;
  while (x != 0) {
    let p = parseInt(x % 10); 
    x = parseInt(x / 10);
    // 1. 测试反转后的长度
    // 2. 如果预计正好在溢出长度，要和最大值MAX_VALUE 首位数比较，检查是否有溢出的可能
    // 3. 注意不能使用Number.MAX_VALUE, Number.MIN_VALUE 按浮点数取值
    if ((rev > parseInt(MAX_VALUE / 10)) || (rev == parseInt(MAX_VALUE / 10) && p > 7)) { // 正溢出
      return 0;
    }
    if ((rev < parseInt(MIN_VALUE / 10)) || (rev == parseInt(MIN_VALUE / 10) && p < -8)) { // 负溢出
      return 0;
    }
    rev = rev * 10 + p;
  }
  return rev;

};

console.log(reverse(321))
// @lc code=end

