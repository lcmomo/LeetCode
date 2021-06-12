/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */



 /**
  * 
  * 根据一棵树的前序遍历与中序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
  */

/**
 * 
 * 思路： 先序遍历的第一个点为根节点，根据中序可以判断左子树和右子树，依次类推
 * 优化，每次定位根节点位置，如果用indexOf，那么查找时间为O（n），可以考虑用map存储中序节点和其在数组中的位置，查找时间复杂度为O（1）
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
// 用map存储中序节点和其在数组中的位置，查找时间复杂度为O（1）
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  const myBuildTree = (pre_start, pre_end, in_start, in_end) => {
    if (pre_start > pre_end) return null;
    let rootValue = preorder[pre_start]; // 根节点的值
    let root = new TreeNode(rootValue); // 根节点
    let middle = map.get(rootValue); // 根节点在中序中的位置
    let leftCount = middle - in_start; // 左子树节点数
    root.left = myBuildTree(pre_start + 1, pre_start + leftCount, in_start, middle - 1);
    root.right = myBuildTree(pre_start + leftCount + 1, pre_end, middle + 1, in_end);
    return root;
  }
  return myBuildTree(0, preorder.length - 1, 0, inorder.length - 1)
};
// @lc code=end

