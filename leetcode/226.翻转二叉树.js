/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

 /**
  * 
  * 翻转一棵二叉树。

示例：

输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
备注:
这个问题是受到 Max Howell 的 原问题 启发的 ：

谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。
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
 * @return {TreeNode}
 */

 // 递归
// var invertTree = function(root) {
//   if (root === null) {
//     return root;
//   }

//   const temp = root.left;
//   root.left = root.right;
//   root.right = temp;

//   invertTree(root.left);
//   invertTree(root.right);
//   return root;
// };

// BFS
var invertTree = function (root) {
  if (root === null) return root;

  let queue = [root]; // root节点入队
  // 队不空
  while (queue.length) {
    const cur = queue.shift(); // 当前节点出队
    [cur.left, cur.right] = [cur.right, cur.left]; // 交换左右子树
    if (cur.left) {
      queue.push(cur.left);
    }
    if (cur.right) {
      queue.push(cur.right);
    }
  }
  return root;
}
// @lc code=end

