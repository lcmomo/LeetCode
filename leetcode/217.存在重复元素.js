/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

 /**
  * 
  * 给定一个整数数组，判断是否存在重复元素。

    如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

    

    示例 1:

    输入: [1,2,3,1]
    输出: true
    示例 2:

    输入: [1,2,3,4]
    输出: false
    示例 3:

    输入: [1,1,1,3,3,4,3,2,4,2]
    输出: true
  */

  /**
   * 
   * 思路： has表或者map存储数组 
   */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set();
    for (let i of nums) {
        if (set.has(i)) {
            return true;
        }
        set.add(i);
    }
    return false;

};

// 时间复杂度 O（N）
// 空间复杂度 O（N） N为数组长度

// let arr = [1,1,1,3,3,4,3,2,4,2]
// console.log(containsDuplicate(arr));

// @lc code=end

