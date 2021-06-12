//    一. 数组
// 数组常用方法

// 链式结点统一格式
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 链表

class LinkedList {
  constructor() {
    this.head = null; // 不带头结点的链表
    // this.head = new Node(null); // 包含头结点，头结点值为null
    this.length = 0;
    this.tail = null; // 尾结点，双向链表使用
  }
  // 链表尾部追加结点
  /**
   * 
   * @param {*} val  要插入的值
   */
  append(val) {
    let newNode = new Node(val);
    let cur = null; // 当前结点
    if (this.head === null) {
      this.head = newNode;
    } else {
      cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = newNode;
    }
    this.length++;
  }

  // 指定位置添加结点
  /**
   * 
   * @param {*} value  插入的值
   * @param {*} index  插入位置
   */
  insert(value, index) {
    if (index <= this.length) {
      const newNode = new Node(value);
      let cur = this.head;
      let pre = null;
      let idx = 0; // 用于查找插入位置前驱结点的索引
      if (index <= 0) { // 第一个位置插入
        newNode.next = this.head;
        this.head = newNode;
      } else {
        while (idx++ < index) {
          pre = cur;
          cur = cur.next;
        }
        newNode.next = cur;
        pre.next = newNode;
      }
      this.length++;
    } else { // 插入位置为链表尾部
      this.append(value);
    }
  }
  /**
   * 
   * @param {*} index 从指定位置删除一个结点
   */
  deleteAt(index) {
    if (index > -1 && index < this.length) {
      let cur = this.head;
      let idx = 0;
      let pre = null;
      let value = null; //  返回删除结点的值
      if (index === 0) { // 删除第一个结点
        pre = this.head;
        this.head = this.head.next;
        value = pre.value;
        cur = null;
      } else {
        while (idx++ < index) {
          pre = cur;
          cur = cur.next;
        }
        pre.next = cur.next;
        value = cur.value
        cur = null;;
      }
      this.length--;
      return value;
    } else {
      return null;
    }
  }

  toString() {
    let cur = this.head;
    let str = '';
    while (cur) {
      str = `${str},${cur.value}`;
      cur = cur.next;
    }
    return str;
  }

  getLength() {
    return this.length;
  }

  // 查找指定元素的位置
  indexOf(value) {
    let cur = this.head;
    let idx = -1;
    while (cur) {
      if (cur.value === value) {
        return idx;
      }
      cur = cur.next;
      idx++;
    }
    return idx;
  }
}

// 测试
//  let linkList = new LinkedList();
//  linkList.append(1);
//  linkList.append(2);
//  linkList.append(4);
//  console.log(linkList.toString());
//  console.log(linkList.getLength());

//  linkList.insert(3, -1);
//  console.log(linkList.toString());
//  console.log(linkList.getLength());

//  linkList.insert(5, 2);
//  console.log(linkList.toString());
//  console.log(linkList.getLength());

//  console.log(linkList.deleteAt(2));
//  console.log(linkList.toString());
//  console.log(linkList.getLength());

// 二. 栈
// 1. 数组方式
class Stack {
  constructor() {
    this.storage = [];
    this.top = 0;
  }

  // 获取所有元素
  getStack() {
    return this.storage;
  }
  // 入栈
  push(value) {
    // this.storage.push(value) // 数组自带push方法
    this.storage[this.top++] = value;
  }
  // 出栈
  pop() {
    // 是否是空栈
    if (this.top === 0) return null;
    // const topValue = this.storage.pop(); // 数组自带pop方法
    const topValue = this.storage[this.top - 1];
    this.storage.splice(this.top - 1, 1);
    this.top--;
    return topValue;
  }
  // 获取栈顶元素
  getPeek() {
    return this.storage[this.top - 1];
  }
  length() {
    return this.top;
  }
}

// 测试
// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(4);

// console.log(stack.getStack());
// console.log(stack.length());
// console.log(stack.getPeek());
// console.log(stack.pop());
// console.log(stack.length());
// console.log(stack.getPeek());

// 2.1 链表实现

class LinkStack {
  constructor() {
    this.top = null; // 栈顶指针
    this.head = null; // 头指针
    this.length = 0; // 长度
  }

  push(value) {
    let newNode = new Node(value);
    let cur = this.top;
    // 栈为空
    if (!this.top) {
      this.top = newNode;
    } else {
      cur = this.top;
      newNode.next = cur;
      this.top = newNode;
    }
    this.length++;
    return true;
  }
  pop() {
    let cur = this.top;
    let value = null;
    if (cur) {
      this.top = cur.next;
      value = cur.value;
      cur.next = null;
      cur = null;
      this.length--;
      return value;
    } else {
      return null;
    }
  }

  getLength() {
    return this.length;
  }

  getTop() {
    return this.top;
  }

  toString() {
    let cur = this.top;
    let str = '';
    while (cur) {
      str = `${str},${cur.value}`;
      cur = cur.next;
    }
    return str;
  }

  clear() {
    this.top = null;
    this.length = 0;
    return null;
  }

}

// 测试
// let linkStack = new LinkStack();

// linkStack.push(1);
// linkStack.push(3);
// linkStack.push(2);
// console.log(linkStack.toString());
// console.log(linkStack.getLength());

// linkStack.pop();

// console.log(linkStack.toString());
// console.log(linkStack.getLength());

// 三、 队列
// 3.1 数组实现
class Queue {
  constructor() {
    this.storage = []; // 存储队列元素的数组
  }
  enqueue(value) {
    this.storage.push(value);
  }
  dequeue() {
    return this.storage.shift();
  }

  toString() {
    return this.storage.toString();
  }
  isEmpty() {
    return this.storage.length === 0;
  }
  length() {
    return this.storage.length;
  }
  front() {
    return this.storage[0];
  }
  rear() {
    return this.storage[this.storage.length - 1];
  }

}

// 3.2 链表实现

class LinkQueue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.front) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
  }
  dequeue() {
    if (!this.front) {
      return null;
    }
    let value = this.front.value;
    this.front = this.front.next;
    if (!this.front) {
      this.rear = null; //出队后队列为空，则把rear置空
    }
    this.length--;
    return value;
  }
  front() {
    return this.front.value || null;
  }
  rear() {
    return this.rear.value || null;
  }
  isEmpty() {
    return this.front === this.rear && this.front === null;
  }
  toString() {
    if (!this.front) {
      return '';
    }
    let cur = this.front;
    let str = '';
    while (cur) {
      str = `${str},${cur.value}`;
      cur = cur.next;
    }
    return str;
  }
}

// 测试

// let linkQueue = new LinkQueue();
// linkQueue.enqueue(3);
// linkQueue.enqueue(1);
// linkQueue.enqueue(2);
// console.log(linkQueue.toString());

// console.log('出队元素：', linkQueue.dequeue());

// 二叉树

// 统一的树节点

class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

class BinaryTree {
  constructor(val) {
    this.root = new TreeNode(val);
  }

  // 根据先序中序序列遍重建二叉树
  pre_in_buildTree(preorder, inorder) {
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

  // 中序后序序列重建二叉树
  in_post_buildTree(inorder, postorder) {
    const map = new Map();
    for (let i = 0; i < inorder.length; i++) {
      map.set(inorder[i], i);
    }
    const myBuildTree = (post_start, post_end, in_start, in_end) => {
      if (post_start > post_end || in_start > in_end) return null;
      let rootVal = postorder[post_end]; // 根节点值
      let root = new TreeNode(rootVal); // 根节点
      let middle = map.get(rootVal); // 根节点在中序中的位置
      let leftCount = middle - in_start; // 左子树节点个数
      root.left = myBuildTree(post_start, post_start + leftCount - 1, in_start, middle - 1);
      root.right = myBuildTree(post_start + leftCount, post_end - 1, middle + 1, in_end);
      return root;
    }
    return myBuildTree(0, postorder.length - 1, 0, inorder.length - 1);
  };

  // 二叉树先序遍历(递归)
  preorderTraversal_Recursive(root) {
    let result = [];
    const preOrder = (root) => {
      if (!root) return;
      result.push(root.val);
      preOrder(root.left);
      preOrder(root.right);
    }

    preOrder(root);
    return result;
  };
  // 先序遍历（非递归）
  preorderTraversal_Iter(root) {
    let result = [];
    let stack = [root];
    while (stack.length) {
      let node = stack.pop();
      if (node) {
        result.push(node.val);
        stack.push(node.right); // 先遍历左子树，故而右子树先入栈，左子树后入栈，先出栈
        stack.push(node.left);
      }
    }
    return result;
  };

  // 中序遍历-递归
  inorderTraversal_Recursive(root) {
    let result = [];

    const preOrder = (root) => {
      if (!root) return;
      preOrder(root.left);
      result.push(root.val);
      preOrder(root.right);
    }

    preOrder(root);

    return result;
  }

  // 中序遍历-非递归
  inorderTraversal_Iter(root) {

    let result = [];
    let stack = [];
    while (root) {
      stack.push(root);
      root = root.left; //根节点左子树全部入栈
    }
    while (stack.length) { // 栈不空
      let node = stack.pop(); // 栈顶节点弹出
      result.push(node.val);
      node = node.right;
      while (node) { // 右子树存在，右子树的左子树全部入栈
        stack.push(node);
        node = node.left;
      }
    }

    return result;

  };

  // 后序遍历-递归
  postorderTraversal_Recursive(root) {
    let result = [];

    const preOrder = (root) => {
      if (!root) return;
      preOrder(root.left);
      preOrder(root.right);
      result.push(root.val);
    }

    preOrder(root);

    return result;
  };

  //后序遍历-非递归
  postorderTraversal_Iter(root) {
    let result = [];
    let stack = [];
    let supportStack = [];
    if (root) {
      stack.push(root); // 根节点入栈
    }
    while (stack.length) { // 栈不空
      let top = stack.pop(); // 栈顶元素弹出
      supportStack.push(top); // 进入辅助栈
      top.left && stack.push(top.left); // 左子树，右子树都入栈
      top.right && stack.push(top.right);
    }

    while (supportStack.length) {
      let supTop = supportStack.pop(); // 访问根节点
      result.push(supTop.val);
    }
    return result;
  };

  // 层序遍历
  levelOrder (root) {

    if(!root) return [];
  
    let result = []; // 结果数组
    let queue = [root]; //队列，根节点入队
    while(queue.length) { // 队不空
       let subRes = []; // 当前层级的遍历结果
       let curLen = queue.length; // 当前层级节点数(必须先保存当前节点数，因为入队出队过程queue.length是不断不断变化)
       for(let i = 0; i< curLen; i++) {
         let curRoot = queue.shift() // 出队
         subRes.push(curRoot.val) // 访问
         curRoot.left && queue.push(curRoot.left); // 当前节点下一层节点入队
         curRoot.right && queue.push(curRoot.right)
       }
       result.push(subRes);
    }
    return result;
  
  };

}

let pre_order = [3, 9, 20, 15, 7];
let in_order = [9, 3, 15, 20, 7];
let post_order = [9, 15, 7, 20, 3];
let myTree = new BinaryTree();
console.log(myTree.pre_in_buildTree(pre_order, in_order));
console.log(myTree.in_post_buildTree(in_order, post_order));

let binaryTree_arr = [1, null, 2, 3];

