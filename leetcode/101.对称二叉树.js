/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

 /**
  * 
  * 给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3

进阶：

你可以运用递归和迭代两种方法解决这个问题吗？
  */

  /**
   * 
   * 思路：
   * 一个树是对称的，则它的左右子树都是镜像对称的
   * 镜像对称： 1. 根节点值相同， 2， 一个树的右子树，和另一个树的左子树镜像对称
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
 * @return {boolean}
 */

 // 递归

//  var isSymmetric = function(root) {
//    const checkSymmetric = (left, right) => {
//      // 两个子树都为null，是对称的
//      if (left === null && right === null) return true;
//      if (left && right) {
//        return left.val === right.val && checkSymmetric(left.left, right.right) && checkSymmetric(left.right, right.left);
//      }
//      return false; // 一个子树存在，另一个不存在，不对称
//    };
//    // root 是空的，那也是对称的
//    if (root == null) {
//      return true;
//    }

//    return checkSymmetric(root.left, root.right);

// };

// BFS
// 使用队列, 根节点左右子树入列
// 1. 每次出队一对节点，判断是否对称
// 不对称： 那整个树就不对称，BFS结束
// 不对称情况： 一个null一个不为null ，都存在但root值不同，这两种情况直接返回false
// 2. 将这两个节点的子树成对入列，顺序为
// （1）左子树的左子树，右子树的右子树
// （2）左子树的右子树，右子树的左子树

var isSymmetric = function(root) {
  if (root === null) return true;

  const queue = [];
  queue.push(root.left, root.right); // 根节点左右子树入队

  // 队不空
  while(queue.length) {
    const levelCount = queue.length; // 当前层节点个数（因为队列的长度是变化的，所以在循环开始前保存当前层节点个数，不能再循环过程中使用queue.length 获取）
    for (let i = 0; i < levelCount; i += 2) { // 当前层的节点是成对出队的
      const left = queue.shift();
      const right = queue.shift();
      if ((left && right === null) || (left === null && right)) {
        return false; // 只存在一个，返回false
      }
      // 两个都存在，但节点值不同，不对称
      if (left && right) {
        if (left.val !== right.val) {
          return false;
        }
        queue.push(left.left, right.right); // 入队下一层的一对节点
        queue.push(left.right, right.left);
      }
    }
  }
  return true;

};
// @lc code=end

