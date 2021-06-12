/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

 /**
  *
  * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
  提示：

  树中节点数目在范围 [0, 100] 内
  -100 <= Node.val <= 100

进阶：递归算法很简单，你可以通过迭代算法完成吗？
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
// 递归
// var preorderTraversal = function(root) {
//   let result = [];

//   const preOrder = (root) => {
//     if(!root) return;
//     result.push(root.val);
//     preOrder(root.left);
//     preOrder(root.right);
//   }

//   preOrder(root);

//   return result;
// };

// 时间复杂度 : O(n),n为节点数
// 空间复杂度: O(n),n为递归栈的深度

 // 非递归（迭代）
//  维护一个栈，先把root入栈
// 当栈不为空时，弹出栈顶元素 node，把node的值存在结果数组中，先把node的右节点放入栈中，再把左节点入栈
// 遍历直到栈为空时结束

var preorderTraversal = function(root) {
  let result = [];
  let stack = [root]; // 根节点入栈
  while(stack.length) {  // 栈不空
    let node = stack.pop(); // 退栈
    if (node) {
      result.push(node.val); // 访问
      stack.push(node.right); // 先遍历左子树，故而有字数先入栈，左子树后入栈，先出栈
      stack.push(node.left); //左右子树进栈
    }
  }

  return result;
};
// @lc code=end

