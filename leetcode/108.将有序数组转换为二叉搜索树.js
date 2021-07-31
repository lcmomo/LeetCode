/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

/**
 
  "高度平衡”——构建 root 时，选数组的中间元素作为 root 节点值，即可保证平衡
 */
 

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

const buildBST = (nums, start, end) => {
  if (start > end) return null;
// 找中间位置索引
  let midIndex = Math.floor((start + end) / 2);
  let root = new TreeNode(nums[midIndex]); // 构建root
  root.left = buildBST(nums, start, midIndex - 1); // 构建左子树
  root.right = buildBST(nums, midIndex + 1, end);
  return root;
}
var sortedArrayToBST = function(nums) {
  return buildBST(nums, 0, nums.length - 1);
};
// @lc code=end

