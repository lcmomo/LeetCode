/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
  * 思路： 遍历每一层的节点，将节点值推入 subRes 数组中 
  * 将 subRes 数组推入 res 数组中
  */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {

  if(!root) return [];

  let result = []; // 结果数组
  let queue = [root]; //队列，根节点入队
  while(queue.length) { // 队不空
     let subRes = []; // 当前层级的遍历结果
     let curLen = queue.length; // 当前层级节点数(必须先保存当前节点数，因为入队出队过程queue.length是不断不断变化)
     for(let i = 0; i< curLen; i++) {
       let curRoot = queue.shift() // 出队
       subRes.push(curRoot.val) // 访问
       curRoot.left && queue.push(curRoot.left); // 当前节点下一层节点入队
       curRoot.right && queue.push(curRoot.right)
     }
     result.push(subRes);
  }
  return result;

};
// 时间复杂度 O（n2）
// 空间复杂度O(n)
// @lc code=end

