/*
 * @lc app=leetcode.cn id=976 lang=javascript
 *
 * [976] 三角形的最大周长
 */

 /**
  * 
    * 给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。

        如果不能形成任何面积不为零的三角形，返回 0。

        

        示例 1：

        输入：[2,1,2]
        输出：5
        示例 2：

        输入：[1,2,1]
        输出：0
        示例 3：

        输入：[3,2,3,4]
        输出：10
        示例 4：

        输入：[3,6,2,3]
        输出：8
        

        提示：

        3 <= A.length <= 10000
        1 <= A[i] <= 10^6
        */

/**
 * 
 * 思路：
 * 方法一：贪心 + 排序
 *  组成三角形👎面积不为0的必要条件： a < b < c,
 *   因此对排序数组，由大到小进行遍历 枚举最长边c，选小于c的最大两个数a，b， 满足必要条件，那么其周长必然最大
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  if (!A || !A.length) return 0;

  A.sort((a, b) => b - a );
  for (let i = 0; i < A.length - 2; i++) {
      if (A[i + 1] + A[i + 2] > A[i]) {
          return A[i] + A[i + 1] + A[i + 2];
      }
  }
  return 0;
};

const arr = [3,6,2,3]
console.log(largestPerimeter(arr));
// @lc code=end

