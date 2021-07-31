/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 */

 /**
  * 
  * 给定一个二叉树，返回所有从根节点到叶子节点的路径。

说明: 叶子节点是指没有子节点的节点。

示例:

输入:

   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]

解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
  */

  /**
   * 
   * 遍历完左子树，构建出合格的路径，加入解集，遍历右子树之前，路径要撤销最末尾的选择，如果path用的是数组，就会弹出最后一项。
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
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let res = [];

  const buildPath = (root, pathStr) => {
    // 遍历到null，当前路径递归结束
    if (root === null) {
      return ;
    }
    // 叶子节点
    if (root.left === null && root.right === null) {
      pathStr += root.val; // 叶子节点，不用加箭头
      res.push(pathStr);
      return; // 找到了一条路径，当前路径递归结束，回到上一个节点
    }
    pathStr += root.val + '->'; // 非叶子节点，加箭头
    buildPath(root.left, pathStr);
    buildPath(root.right, pathStr); // 递归遍历左右子树

  }
  buildPath(root, '');
  return res;
};
// @lc code=end

