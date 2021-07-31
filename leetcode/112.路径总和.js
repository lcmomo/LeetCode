/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
  * 
  * @给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。

叶子节点 是指没有子节点的节点。

 

示例 1：


输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true
示例 2：


输入：root = [1,2,3], targetSum = 5
输出：false
示例 3：

输入：root = [1,2], targetSum = 0
输出：false
 

提示：

树中节点的数目在范围 [0, 5000] 内
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
  */

  /**
   * 
   * 思路：对root递归，判断 root的左，右子树中是否有满足和为： sum-root.value 的路径
   * 每遍历一个节点，sum就减去当前节点值，当遍历到叶子节点，如果sum-当前叶子节点值 === 0，就说明存在一个这样的路径
   */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (root === null) return false;// 遍历到null节点， 返回false
  // 遍历到叶子节点
  const currentPathValue = targetSum - root.val;
  if (root.left === null && root.right === null) {
    return currentPathValue === 0;
  }

  // 递归遍历(注意是或的关系，两个子树中有一个满足就可以)
  return hasPathSum(root.left, currentPathValue) || hasPathSum(root.right, currentPathValue);
};
// @lc code=end

