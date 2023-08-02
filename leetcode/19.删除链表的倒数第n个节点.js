/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 /**
  * 
  * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

    示例：

    给定一个链表: 1->2->3->4->5, 和 n = 2.

    当删除了倒数第二个节点后，链表变为 1->2->3->5.
    说明：

    给定的 n 保证是有效的。

    进阶：

    你能尝试使用一趟扫描实现吗？

    思路： 1. 注意，倒数第n个，则正数链表长度-n + 1（此处是一个陷阱）
          2.  双指针移动，两指针间隔距离为n
  */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0); //保存结果头结点
  dummy.next = head; // 在原始头结点前插入一个空值节点（为了找到倒数第n个节点的前一个节点）
  let firstPointer = dummy; 
  let secondPointer = dummy; // 开始两指针都指向头结点
  for (let i = 1; i <= n + 1;  i++ ) {
    firstPointer = firstPointer.next;
  }
  while (firstPointer) {
    firstPointer = firstPointer.next
    secondPointer = secondPointer.next;
  }
  secondPointer.next = secondPointer.next.next;

  return dummy.next; // 返回去掉空值节点的链表  
};
// @lc code=end