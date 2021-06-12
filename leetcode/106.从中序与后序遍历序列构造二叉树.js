/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 */

/**
 * 
 * 根据一棵树的中序遍历与后序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
 */

 /**
  * 
  * 思路：后序遍历的最后一个节点为根节点，中序中根节点位置左边的为左子树
  * 
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {

  const map = new Map();
  for(let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  const myBuildTree = (post_start, post_end, in_start, in_end) => {
    if(post_start > post_end || in_start > in_end) return null;
    let rootVal = postorder[post_end]; // 根节点值
    let root = new TreeNode(rootVal); // 根节点
    let middle = map.get(rootVal); // 根节点在中序中的位置
    let leftCount = middle - in_start; // 左子树节点个数
    root.left = myBuildTree(post_start, post_start + leftCount - 1, in_start, middle - 1);
    root.right = myBuildTree(post_start + leftCount , post_end - 1, middle + 1, in_end);
    return root;
  }

  return myBuildTree(0, postorder.length - 1, 0, inorder.length - 1);
};
// @lc code=end

