/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */


 /**
  * 
  * 给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。


  */

  /**
   * 
   * 思路： 数的作答深度 = max(左子树深度， 右子树深度) + 1;
   * 递归终止条件
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
 * @return {number}
 */
// var maxDepth = function(root) {
//   if (root === null) return 0;
//   let leftMaxDepth = maxDepth(root.left);
//   let rightMaxDepth = maxDepth(root.right);
//   return Math.max(leftMaxDepth, rightMaxDepth) + 1;
// };

// BFS
var maxDepth = function(root) {
  if (root === null) return 0;
  const queue = [root];
  let depth = 1; // root不为空，则root节点深度为1
  while (queue.length) {
    const curLevelCount = queue.length;
    // 当前层节点依次出列
    for (let i = 0; i< curLevelCount; i++) {
      const currentNode = queue.shift(); // 当前出队的节点
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
     // 当前层所有节点出队完成，若队列不空，则有下一层，depth  +1
     if(queue.length){
      depth++;
    }
  }
  return depth;
};
// @lc code=end

