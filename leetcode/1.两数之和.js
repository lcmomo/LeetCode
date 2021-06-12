/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */




 /**
  * 
  * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

 

  示例:

  给定 nums = [2, 7, 11, 15], target = 9

  因为 nums[0] + nums[1] = 2 + 7 = 9
  所以返回 [0, 1]
  */


// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let obj = {};
  for(let i = 0; i <nums.length; i++) {
    obj[nums[i]] = i;
  } 

  for (let j = 0; j< nums.length; j++) {
    let temp = target - nums[j]
    if (temp in obj && obj[temp] !== j) {
      return [j, obj[temp]]
    }
  }
};
// @lc code=end

