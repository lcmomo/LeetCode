const isComplexDataType = obj =>
(typeof obj === 'object' || typeof obj === 'function') && (obj !== null);

const deepClone = function (obj, hash = new WeakMap()) {
  if (hash.has(obj)) return hash.get(obj);

  let type = [Date, RegExp, Set, Map, WeakMap, WeakSet];
  // 如果成环了，参数obj = obj.loop = 最初的obj 会在WeakMap中找到第一次放入的obj，提前返回第一次放入WeakMap的cloneobj
  if (type.includes(obj.constructor)) return new obj.constructor(obj);

  let allDesc = Object.getOwnPropertyDescriptors(obj); // 遍历传入参数的所有键的特性
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc); // 继承原型
  hash.set(obj, cloneObj);

  // Reflect.ownKeys(obj) 可以拷贝不可枚举属性和符号类型
  for (let key of Reflect.ownKeys(obj)) {
    // 如果值是引用类型(非函数),则递归调用deepClone
    cloneObj[key] = (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') ?
    deepClone(obj[key], hash) : obj[key];

  }

  return cloneObj;

}

// 排列
const permute = function (nums) {
  const len = nums.length;
  // 记录当前的排列内容
  const cur = [];
  // 记录所有的排列顺序
  const res = [];
  // 用来避免重复使用同一个数字
  const visited = [];
  // 定义dfs的函数，入参是坑位的索引，从0开始
  function dfs(nth) {
    // 如果遍历到不存在的坑位(第len+1个)，则说明到了递归的边界
    if (nth === len) {
      // 此时前len个坑位已经填满，将对应的排序记录下来
      res.push(cur.slice());
      // 结束当前递归分支
      return;
    }
    // 检查手里剩下的数字有哪些
    for (let i = 0; i < len; i++) {
      // 如果nums[i] 之前没有被其它坑位记录过，说明这个数字是剩下的数字
      if (!visited[nums[i]]) {
        // 给nums[i] 打个已经用过的标记
        visited[nums[i]] = 1;
        // 将nums[i] 推入当前排列
        cur.push(nums[i]);
        // 基于这一个排序继续往下一个坑
        dfs(nth + 1);
        // nums[i] 让出当前坑位
        cur.pop();
        // 下掉已经用过的标识
        visited[nums[i]] = 0;
      }
    }
  }
  // 从索引为0开始,即第一个坑位开始dfs
  dfs(0);
  return res;
};


function pielie(nums, k) {
  if (!nums.length || k === 0) return;
  let res = [];
  let cur = [];
  let visited = [];
  let len = nums.length;

  const dfs = (nth) => {
    if(nth === k) {
      res.push(cur.slice());
      return;
    }

    for (let i = 0; i < len; i++) {
      if (!visited[nums[i]]) {
        visited[nums[i]] = 1;
        cur.push(num[i]);
        dfs(nth + 1);
        cur.pop();
        visited[nums[i]] = 0;
      }
    }
  }

  dfs(0);

  return res;
}
// 组合

function combine(nums, k) {
  if (!nums.length || k === 0) return;
  let res = [];
  let cur = [];

  let len = nums.length;
  const dfs = (nth) => {
    if (cur.length === k) {
      res.push(cur.slice());
      return;
    }

    for(let i = 0; i < len; i++) {
      cur.push(num[i]);
      dfs(nth + 1);
      cur.pop();
    }
  }
  dfs(0);
  return res;
}

// 滑动窗口
// 给定一个数组，和滑动窗口大小，找出所有滑动窗口最大值
// 示例
// 输入:
// nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;
// 输出:
// [3, 3, 5, 5, 6, 7];

// 1. 双指针+ 遍历
/**
 * 双指针 + 遍历
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  // 定义结果数组
  const res = [];
  const len = nums.length;
  // 处理边界情况
  if (k === 0 || len === 0) return res;

  // 初始化左右指针
  let left = 0,
    right = k - 1;
  // 当数组没有遍历完成时，执行循环体内的逻辑
  while (right < len) {
    // 计算当前窗口的最大值
    const max = calMax(nums, left, right);
    // 将最大值推入结果数组
    res.push(max);
    // 左右指针前进一步
    left++;
    right++;
  }
  return res;
};

/**
 * 求数组中的最大值
 * @param {nums[]} arr
 * @param {number} left
 * @param {number} right
 * @return {number} maxNum
 */
function calMax(arr, left, right) {
  // 处理数组为空的边界情况
  if (!arr || !arr.length) {
    return;
  }
  // 初始化 maxNum 为窗口的第一个元素
  let maxNum = arr[left];
  // 遍历窗口内的所有元素，更新maxNum 的值
  for (let i = left; i <= right; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  // 返回最大值
  return maxNum;
}

// 2. 双端队列时间复杂度O(n)

const maxSlidingWindow = function (nums, k) {
  // 定义结果数组
  const res = [];
  const len = nums.length;
  // 处理边界情况
  if (k === 0 || len === 0) return res;

  // 创建双端队列
  let queue = [];
  // 遍历
  for (let i = 0; i < len; i++) {
    // p判断是否推入双端队列（双端队列队尾元素小当前元素）
    while (queue.length && queue[queue.length - 1] < nums[i]) {
      queue.pop();
    }
    // push 索引
    queue.push(i);

    // 保持双端队列有效性，只维持当前窗口的元素
    // 判断队头元素索引是否在窗口内，不在则队头元素出队
    while(queue.length && queue[0] <= i - k) {
      queue.shift();
    }

    if (i >= k -1) {
      res.push(nums[queue[0]]);
    }
  }
  return res;
};

// 双栈实现队列
class Queue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }
  push(val) {
    this.inStack.push(val);
  }

  in2Out() {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop());
    }
  }
  pop() {
    if(!this.outStack.length) {
      this.in2Out();
    }
    return this.outStack.pop();
  }
  empty() {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}

// 链表是否有环，并返回第一个入环节点（快慢指针）
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function (head) {
  if (head === null || head.next === null) {
    return null;
  }
  let slow = head,
    fast = head;
  while (fast !== null) {
    slow = slow.next;
    if (fast.next !== null) {
      fast = fast.next.next;
    } else {
      return null;
    }
    if (slow === fast) {
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      return ptr;
    }
  }
  return null;
};

// 翻转从位置m, 到n的链表（一次循环实现）
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.null = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = function (head, m, n) {
  //  定义pre、cur，用leftHead 来承接整个区间的前驱结点
  let pre, cur, leftHead;
  // 创建一个结点，处理头结点为空等一些边界问题
  const dummy = new ListNode();
  // dummy的后继结点是头结点
  dummy.next = head;
  // point 是一个游标，用于遍历
  let point = dummy;
  // point 往前走m-1步，走到整个区间的前驱结点处
  for (let i = 0; i < m - 1; i++) {
    point = point.next;
  }
  // 缓存整个前驱结点到leftHead里
  leftHead = point;
  // start 是翻转区间的第一个结点
  let start = leftHead.next;
  // pre指向start
  pre = start;
  // cur指向start的下一个结点
  cur = pre.next;
  // 开始重复翻转动作
  for (let i = m; i < n; i++) {
    // 记录next结点
    let next = cur.next;
    // 翻转指针
    cur.next = pre;
    // pre 往前走一步
    pre = cur;
    // cur 往前走一步
    cur = next;
  }
  // leftHead 的后继结点此时为翻转后的区间的第一个结点
  leftHead.next = pre;
  // 将区间翻转后的最后一个结点 next 指向cur
  start.next = cur;
  // dummy.next 永远指向链表头结点
  return dummy.next;
};

// 翻转链表
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  // 初始化前驱结点为null
  let pre = null;
  // 初始化目标结点为头结点
  let cur = head;
  // 只要目标结点不为null，就继续遍历
  while (cur !== null) {
    // 记录next结点
    let next = cur.next;
    // 翻转指针
    cur.next = pre;
    // pre 往前走一步
    pre = cur;
    // cur 往前走一步
    cur = next;
  }
  // 翻转结束，pre就会变成新链表的头结点
  return pre;
};

// 三个数和等于0
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeNum = function (nums) {
  // 存放结果
  let res = [];
  // 数组排序-双指针使用的前提
  nums = nums.sort((a, b) => a - b);
  const len = nums.length;
  // 这里遍历到倒数第三个数就可以了，因为左右指针会遍历其中两个数
  for (let i = 0; i < len - 2; i++) {
    // 左右指针
    let j = i + 1,
      k = len - 1;
    // 遇到重复数字跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < 0) {
        // 小于0，左指针前进
        j++;
        // 处理左指针重复
        while (nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        // 大于0，右指针后退
        k--;
        while (nums[k] === nums[k + 1]) {
          k--;
        }
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        // 左右指针一起前进
        j++;
        k--;
        while (nums[j] === nums[j - 1]) {
          j++;
        }
        while (nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }
  return res;
};

// 将一个升序排列的有序数组，转换为一颗高度平衡二叉搜索树

var sortedArrayToBST = function(nums) {
  return dfs(0, nums.length - 1);

  function dfs(start, end) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let node = new TreeNode(nums[mid]);
    node.left = dfs(start, mid - 1);
    node.right = dfs(mid + 1, end);
    return node;
  }
}

// 获取相交链表第一个相交点
// 双指针
// 双指针同时跑， 因为2个链表长度不一样，如果长度一样很容易找到相交点，可以使得两个链表加上彼此，保证长度一样
// 即同时遍历，能找到相交点

function findFirstCommonNode(headA, headB) {
  const h1 = headA;
  const h2 = headB;
  while (h1 !== h2) {
    h1 = h1 ? headB : h1.next;
    h2 = h2 ? headA: h2.next;
  }
  return h1;
}