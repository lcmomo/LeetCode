/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

 /**
  * 
  * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807} l1 
  * 
  */

  /**
   * 
   * 思路：
   * 1. 首先取出“+”左右两边两个数的最低位，也就是
   *  let val1 = l1.val
      let val2 = l2.val

     2. 其次求出他们的和并作为输出结果的最低位（由于输出的结果是链表的形式保存，所以我们应该写成这种形式）

      let sum = new ListNode('0')
      sum.next = new ListNode(“结果” % 10) //之所以要“结果” % 10是因为我们的计算结果是有可能大于10的，所以需要取余

     3. 加法运算是有进位的，所以考虑将进位加入代码中
     4. 如果值不存在时，将其设置为0，然后再进行相加


   */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0); // 创建头结点保存结果
  let head = dummyHead; // 保存头节点用于返回
  let carry = 0;   // carry 变量保存进位结果
 while (carry || l1 || l2) {
   let x = l1 && l1.val ? l1.val : 0;
   let y = l2 && l2.val ? l2.val : 0;
   let sum = x + y + carry;
   carry = sum >= 10 ? 1 : 0;
   dummyHead.next = new ListNode(sum % 10);
   dummyHead = dummyHead.next;
   if (l1) l1 = l1.next;
   if (l2) l2 = l2.next;
 }
 return head.next;
};
// @lc code=end

