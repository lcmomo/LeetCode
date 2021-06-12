/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
// var inorderTraversal = function(root) {
//   let result = [];

//   const preOrder = (root) => {
//     if(!root) return;
//     preOrder(root.left);
//     result.push(root.val);
//     preOrder(root.right);
//   }

//   preOrder(root);

//   return result;
// };

// 时间复杂度和空间复杂度见先序遍历

// 迭代
// 思路, 1. 根节点所有左子树入栈
// 2. 栈顶节点出栈，同时，右子节点入栈，相当于递归右子节点。
//   因为是中序遍历，在栈顶节点的右子节点压栈之前，要处理出栈节点的节点值，将它输出。
 //   3. 对新入栈的右子节点（右子树）递归，相当于第一步左子树入栈

// 递归不同的子树要做一样的事情，一样要先将它的左子节点不断压栈，然后再出栈，带出右子节点入栈。

var inorderTraversal = function(root) {

  let result = [];
  let stack = [];

  while(root) {
    stack.push(root);
    root = root.left; //根节点左子树全部入栈
  }
  while(stack.length) { // 栈不空
    let node = stack.pop(); // 栈顶节点弹出
      result.push(node.val);
      node = node.right;
      while(node) { // 右子树存在，右子树的左子树全部入栈
        stack.push(node);
        node = node.left;
      }
  }

  return result;

};

// 时间复杂度： O（n2） 双重循环

// @lc code=end

