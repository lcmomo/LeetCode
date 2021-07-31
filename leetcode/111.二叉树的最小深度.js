/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

/**
 * 
 * 给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。

 

示例 1：


输入：root = [3,9,20,null,null,15,7]
输出：2
示例 2：

输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
 

提示：

树中节点数的范围在 [0, 105] 内
-1000 <= Node.val <= 1000
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
// DFS
// var minDepth = function(root) {
//   if (root === null) return 0;

//   if (root.left && root.right) {
//     return 1 + Math.min(minDepth(root.left), minDepth(root.right));
//   } else if (root.left) {
//     return 1 + minDepth(root.left);
//   } else if (root.right) {
//     return 1 + minDepth(root.right);
//   } else {
//     return 1;
//   }
// };

// BFS
var minDepth = function (root) {
  if (root === null) return 0;

  let queue = [root]; // 根节点入队
  let depth = 1; // 当前层深度
  while (queue.length) {
    let currentSize = queue.length;
    for (let i = 0; i < currentSize; i++) {
      let cur = queue.shift();
      // 没有子树，返回当前层深度
      if (cur.left === null && cur.right === null) {
        return depth;
      }
      // 有子树，入队
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    depth++; // 当前层完毕，没有返回，则说明有下一层，depth+1
  }
  return depth;

}


// @lc code=end

