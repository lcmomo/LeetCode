/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 /**
  * 
  * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]



 

示例 1:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6 
解释: 节点 2 和节点 8 的最近公共祖先是 6。
示例 2:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
 

说明:

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉搜索树中。
  */

/**
 * 
 * @param {*} root 
 * @param {*} p 
 * @param {*} q 
 */


 // 递归

 /**
  * 
  * @param {*} root 
  * @param {*} p 
  * @param {*} q 
  */
/**
 * 思路：根据二叉搜索树性质: 如果p.val 和q.val都比root.val 小，则q，p都在root左子树，同理，则都在右子树。
 *  其他情况： 只要p.val 和q.val 不同在root的一个子树，则只有如下三种情况
 * 1. p,q分居root左右子树
 * 2. root就是p，q在p的子树
 * 3. root就是q，p在q的子树
 * 以上三种情况，p,q 最近公共祖先都是root
 */
// var lowestCommonAncestor = function(root, p, q) {
//     if (p.val < root.val && q.val < root.val) {
//       lowestCommonAncestor(root.left, p,q);
//     }
//     if (p.val > root.val && q.val > root.val) {
//       lowestCommonAncestor(root.right, p, q);
//     }
//     return root;
// };

// 迭代
/**
 *
 *
 * 思路 while 循环 root === null 时结束循环
 * p.val, q.val < root.val. root = root.left
 * 右子树同理
 * 否则，break 循环，返回root
 */
var lowestCommonAncestor = function(root, p, q) {
  while (root) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else if (p.val > root.val && q.val > root.val) {
          root = root.right;
    } else {
      break;
    }
  }
  return root;
}
// @lc code=end

