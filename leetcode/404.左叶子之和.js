/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @计算给定二叉树的所有左叶子之和。

示例：

    3
   / \
  9  20
    /  \
   15   7

在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24

 
/**
 *
 *
 * 思路： DFS，求当前子树的所有左叶子之和，用一个boolean值判断是否是左子树，遍历到null节点，返回0
 * 遍历的是叶子节点且isLeft，返回root.val， 否则返回0，
 * 遍历到别的节点，递归左右子树，isLeft分别指定true，和false
 *
 * 
 * 
/**
 *
 *
 * @param {*} root
 */
// var sumOfLeftLeaves = function(root) {
//   const dfs = (root, isLeft) => {
//     if (root === null) return 0;
//     if (root.left === null && root.right === null) {
//       if (isLeft) return root.val;
//       return 0;
//     }
//     return dfs(root.left, true) + dfs(root.right, false);
//   }
//   return dfs(root, false);
// };


/**
 *
 *
 * BFS
 * 根节点存在，先入队，根节点出队，左右子节点入队，累加左叶子节点值，直到队空
 */
const sumOfLeftLeaves = function(root) {
  if (root === null) return 0;
  let sum = 0;
  let queue = [root];
  while(queue.length) {
    let cur = queue.shift();
    if (cur.left) {
      // 找到符合条件的
      if (cur.left.left === null && cur.left.right === null) {
        sum += cur.left.val;
      } else {
        queue.push(cur.left);
      }
    }
    if (cur.right) {
      queue.push(cur.right);
    }
  }
  return sum;
}
// @lc code=end

