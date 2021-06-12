/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
  * 给你一个链表数组，每个链表都已经按升序排列。

  请你将所有链表合并到一个升序链表中，返回合并后的链表。

  

  示例 1：

  输入：lists = [[1,4,5],[1,3,4],[2,6]]
  输出：[1,1,2,3,4,4,5,6]
  解释：链表数组如下：
  [
    1->4->5,
    1->3->4,
    2->6
  ]
  将它们合并到一个有序链表中得到。
  1->1->2->3->4->4->5->6
  示例 2：

  输入：lists = []
  输出：[]
  示例 3：

  输入：lists = [[]]
  输出：[]
  

  提示：

  k == lists.length
  0 <= k <= 10^4
  0 <= lists[i].length <= 500
  -10^4 <= lists[i][j] <= 10^4
  lists[i] 按 升序 排列
  lists[i].length 的总和不超过 10^4
  */

  /**
   * 
   * 思路 
   */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

 class PriorityQueue {
   constructor(){
     this.queue = [];
   }
   isEmpty () {
     return !this.queue.length;
   }
   getQueues () {
     return this.queue;
   }
   enqueue (item) {
     if (this.isEmpty()) {
       this.queue.push(item)
     } else {
       let flag = false;
       for (let i = 0; i< this.queue.length; i++ ) {
         if (this.queue[i].val <= item.val ) {
           this.queue.splice(i, 0, item);
           flag = true;
           break;
         }
       }
       if(!flag) {
         this.queue.push(item);
       }
     }
   }

   dequeue () {
     return this.queue.shift();
   }
   front () {
     return this.queue[0];
   }
 }
var mergeKLists = function(lists) {

  if (!lists.length || !lists.length) return null;
  let dummy = new ListNode(0);
  let priorityQuery = new PriorityQueue;
  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) {
      priorityQuery.enqueue(lists[i])
    }
  }
  while (!priorityQuery.isEmpty()) {
    let p = priorityQuery.front();
    priorityQuery.dequeue();
    dummy.next = p;
    dummy = p;
    if (p.next) {
      priorityQuery.enqueue(p.next)
    }
  }

  return dummy.next;
    
};
// @lc code=end

