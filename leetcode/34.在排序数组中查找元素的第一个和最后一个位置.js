/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

 /**
  * 
  给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

    如果数组中不存在目标值 target，返回 [-1, -1]。

    进阶：

    你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
    

    示例 1：

    输入：nums = [5,7,7,8,8,10], target = 8
    输出：[3,4]
    示例 2：

    输入：nums = [5,7,7,8,8,10], target = 6
    输出：[-1,-1]
    示例 3：

    输入：nums = [], target = 0
    输出：[-1,-1]
    

    提示：

    0 <= nums.length <= 105
    -109 <= nums[i] <= 109
    nums 是一个非递减数组
    -109 <= target <= 109

  */

  /**
   * 
   * 思路：二分法
   * 注意点:  1. 目标元素target 在有序数组中可能存在多个
   *         2. 当处在中间位置的元素值nums[middle] 恰好等于目标元素target时，还需继续查找
   *         3. 比较容易陷入误区的是线性查找，正确做法继续二分查找
   * 
        * 考虑 target 开始和结束位置，其实我们要找的就是数组中「第一个等于 target 的位置」（记为leftIdx）和「第一个大于 target 的位置减一」（记为rightIdx）。

        二分查找中，寻找 leftIdx 即为在数组中寻找第一个大于等于target 的下标，寻找rightIdx 即为在数组中寻找第一个大于target 的下标，然后将下标减一。两者的判断条件不同，为了代码的复用，我们定义 binarySearch(nums, target, lower) 表示在 \textit{nums}nums 数组中二分查找 \textit{target}target 的位置，如果 \textit{lower}lower 为 \rm truetrue，则查找第一个大于等于 target 的下标，否则查找第一个大于 target 的下标。

        最后，因为target 可能不存在数组中，因此我们需要重新校验我们得到的两个下标 leftIdx 和rightIdx，看是否符合条件，如果符合条件就返回 [leftIdx,rightIdx]，不符合就返回 [-1,-1][−1,−1]。

   */

// @lc code=start

const binarySearch = (nums, target, lower) => {
    let left = 0;
    let right = nums.length - 1;
    let ans = nums.length;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (nums[middle] > target || nums[middle] >= target && lower) { //   注意第二个条件是 >=  (= 才是边界)
            right = middle -1;
            ans = middle;
        } else {
            left = middle + 1;
        }
    }
    return ans;
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let ans = [-1, -1];

    const leftIndex = binarySearch(nums, target, true);
    const rightIndex = binarySearch(nums, target, false) - 1;
    if (leftIndex <= rightIndex && rightIndex < nums.length && nums[leftIndex] === target && nums[rightIndex] === target) {
        ans = [leftIndex, rightIndex];
    }

    return ans;

};

// 复杂度分析
//   时间复杂度 O(logN)
//   空间复杂度 O(1)
// const nums = [];
// const target = 0;
// console.log(searchRange(nums, target));
// @lc code=end

