/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
// var postorderTraversal = function(root) {
//   let result = [];

//   const preOrder = (root) => {
//     if(!root) return;
//     preOrder(root.left);
//     preOrder(root.right);
//     result.push(root.val);
//   }

//   preOrder(root);

//   return result;
// };

// 非递归
var postorderTraversal = function(root) {
  let result = [];
  let stack = [];
  let supportStack = [];
  if(root) {
    stack.push(root); // 根节点入栈
  }
  while(stack.length) { // 栈不空
    let top = stack.pop(); // 栈顶元素弹出
    supportStack.push(top); // 进入辅助栈
    top.left && stack.push(top.left); // 左子树，右子树都入栈
    top.right && stack.push(top.right);
  }

  while(supportStack.length) {
    let supTop = supportStack.pop(); // 访问根节点
    result.push(supTop.val);
  }
  return result;
};
// @lc code=end

