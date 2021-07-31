/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */


/**
 * 
 * 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

 

示例 1：


输入：p = [1,2,3], q = [1,2,3]
输出：true
示例 2：


输入：p = [1,2], q = [1,null,2]
输出：false
示例 3：


输入：p = [1,2,1], q = [1,1,2]
输出：false
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

// 递归写法

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function(p, q) {
//   if (p === null && q === null) return true;
//   if (p === null || q === null) return false;
//   return (p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };

// 非递归
// 思路
// 维护一个队列，
// 先把「整个树的比较」入列，
// 进行一些判断后，带出「子树的比较」入列，
// 继续出列、入列，直到没有子树可入列比较，
// 就比较完了。



var isSameTree = function (p, q) {
  const queue = [{ p, q }]; // 初始，整个树比较
  while (queue.length) {
    const cur = queue.shift();
    if (cur.p === null && cur.q === null) continue;
    if (cur.p === null || cur.q === null) return false;
    if (cur.p.val !== cur.q.val) return false;
    // 子树的比较
    queue.push({
      p: cur.p.left,
      q: cur.q.left
    }, {
      p: cur.p.right,
      q: cur.q.right
    });
  }
  return true;
}
// @lc code=end

