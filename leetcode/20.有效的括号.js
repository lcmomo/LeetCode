/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

 /**
  * 
  * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
示例 4：

输入：s = "([)]"
输出：false
示例 5：

输入：s = "{[]}"
输出：true
 

提示：

1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成

*/

  /**
   * 
   * 思路： 使用栈 遍历字符串时，匹配到左括号时是将其相应的右括号进行了压栈，遇到右括时判断和栈顶元素是否相等即可，最后判断栈是否为空
   */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {

  let arr = [];
  if (s.length % 2) return false;
  for(let i = 0; i< s.length; i++) {
    let char = s[i];
    switch(char) {
      case "(": {
        arr.push(char)
        break;
    }
    case "[": {
        arr.push(char)
        break;
    }
    case "{": {
        arr.push(char)
        break;
    }
    case ")": {
        if (arr.pop() !== "(") return false
        break;
    }
    case "]": {
         if (arr.pop() !== "[") return false
        break;
    }
    case "}": {
        if (arr.pop() !== "{") return false
        break;
    }
    }
  }
  return !arr.length;
};

let str = "([)]";
console.log(isValid(str))
// @lc code=end

