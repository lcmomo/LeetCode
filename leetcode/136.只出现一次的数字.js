/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

 /**
  * 
  * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

  说明：

  你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

  示例 1:

  输入: [2,2,1]
  输出: 1
  示例 2:

  输入: [4,1,2,1,2]
  输出: 4
  */

  /**
   * 
   * 思路： 线性复杂度+ 不用额外空间 ，想到位运算，该题使用异或运算，相同两数异或为0 ，不同为其本身，最后剩下的就是只出现一次的数
   */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let res = 0;
  for (let num of nums) {
      res ^=num;
  }
  return res;
};

// let numbers = [4,1,2,1,2];
// console.log(singleNumber(numbers))
// @lc code=end

