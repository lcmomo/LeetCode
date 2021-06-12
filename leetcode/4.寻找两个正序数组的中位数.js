/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

 /**
  * 
  * @param {*} nums1 
  * @param {*} nums2 
  */

// @lc code=start
/**
     * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。

    进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？

    

    示例 1：

    输入：nums1 = [1,3], nums2 = [2]
    输出：2.00000
    解释：合并数组 = [1,2,3] ，中位数 2
    示例 2：

    输入：nums1 = [1,2], nums2 = [3,4]
    输出：2.50000
    解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
    示例 3：

    输入：nums1 = [0,0], nums2 = [0,0]
    输出：0.00000
    示例 4：

    输入：nums1 = [], nums2 = [1]
    输出：1.00000
    示例 5：

    输入：nums1 = [2], nums2 = []
    输出：2.00000
    

    提示：

    nums1.length == m
    nums2.length == n
    0 <= m <= 1000
    0 <= n <= 1000
    1 <= m + n <= 2000
    -106 <= nums1[i], nums2[i] <= 106
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // to ensure m<=n 对短的数组做二分
  if(nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  const m = nums1.length;
  const n = nums2.length;
  
  let low = 0; 
  let high = m;
  while (low <= high) {
    let i = low + Math.floor((high - low) / 2); // nums1 以nums1[i] 做partition
    let j = Math.floor((m + n + 1) / 2 ) - i;  // nums2 以nums2[j] 做partition    满足i + j = （m + n + 1）/ 2
    
    const maxLeftA = i === 0 ? -Infinity : nums1[i-1];   // A数组左边最大的为i-1(注意边界用Infinity标识)
    const minRightA = i === m ? Infinity : nums1[i];    // A数组右边最小的为i
    const maxLeftB = j === 0 ? -Infinity : nums2[j-1];   // B数组同理
    const minRightB = j === n ? Infinity: nums2[j];

    if (maxLeftA <= minRightB && minRightA >= maxLeftB) {  // 满足该条件 
      return (m + n) % 2 === 0 ? (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2 : Math.max(maxLeftA, maxLeftB);
    } else if (maxLeftA > minRightB) {  // 左边的区间数大，i-1
      high = i - 1;
    } else { // 右边区间数大，low + 1
      low = low + 1
    }
  } 

};

// const nums1 = [2]
// const nums2 = [1]
// console.log(findMedianSortedArrays(nums1, nums2))
// @lc code=end

