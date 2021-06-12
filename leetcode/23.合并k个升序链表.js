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
   * 思路:  step1:   遍历数组lists，寻找最小的节点(lists中每个链表的当前位置作为一个新数组进行排序，找出k个值中的最小的)
   *          - 假设第一个是最小的节点min
   *          - 循环判断min， 保证min有值
   *          - 如果min为空，移除，👎判断lists是否为空防止死循环
   *        step2: 遍历数组lists，寻找最小的节点，并记录索引
   *        step3: 排序
   *          - 最小节点排序，对应链表指针指向下一个节点
   *          - 判断链表是否已遍历完
   *          - 遍历完毕，从数组中移除
   * 
   */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */


//  方法一： 优先队列：
// class PriorityQueue {
//     constructor(){
//       this.queue = [];
//     }
//     empty () {
//       return !this.queue.length;
//     }
//     getQueues () {
//       return this.queue;
//     }
//     enqueue (item) {
//       if (this.empty()) {
//         this.queue.push(item)
//       } else {
//         let flag = false;
//         for (let i = 0; i< this.queue.length; i++ ) {
//           if (this.queue[i].val >= item.val) {
//             this.queue.splice(i, 0, item);
//             flag = true;
//             break;
//           }
//         }
//         if(!flag) {
//           this.queue.push(item);
//         }
//       }
//     }
 
//     dequeue () {
//       return this.queue.shift();
//     }
//     front () {
//       return this.queue[0];
//     }
//   }
//  var mergeKLists = function(lists) {
 
//    if (!lists) return null;
//    let dummy = new ListNode(0);
//    let priorityQuery = new PriorityQueue;
//    for (let i = 0; i < lists.length; i++) {
//      if (lists[i]) {
//        priorityQuery.enqueue(lists[i])
//      }
//    }
//    while (!priorityQuery.empty()) {
//      let p = priorityQuery.front();
//      priorityQuery.dequeue();
//      dummy.next = p;
//      dummy = p;
//      if (p.next) {
//        priorityQuery.enqueue(p.next)
//      }
//    }
 
//    return dummy.next;
     
//  };
//    const lists = [[1,4,5],[1,3,4],[2,6]]
//  const ll = [3, 1, 4,2,6,5]
//    let qe = new PriorityQueue();
//    ll.map(item => {
//        qe.enqueue(item);
//    })
//    console.log(qe.getQueues())
//  console.log(mergeKLists(lists))

// 方法二： 双重循环 

var mergeKLists = function(lists) {
  let head = new ListNode(0); // 保存结果的头指针
  let p = head;
  while(lists.length) {
    let min = lists[0];
    let minIndex = 0;
    while(min === null) {
      lists.shift();
      if (lists.length === 0) {
        return head.next;
      }
      min = lists[0];   // 假设第一个最小
    }
    lists.map((item, index) => {
      if(item && item.val < min.val) { // 如果有更小的
        min = item;
        minIndex = index;
      }  
    });
    p.next = min;  //  把当前最小的加到结果链表后面
    p = p.next; //  指针后移
    lists[minIndex] = lists[minIndex].next; // 指向最小节点的下一个节点
    if (lists[minIndex] === null) {  //  有链表遍历完毕，从lists中移除该链表
      lists.splice(minIndex, 1)
    } 
  }
  return head.next;
}

 // @lc code=end
 
 