/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

 /**
  * 
  * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

  示例 1：

  输入: "babad"
  输出: "bab"
  注意: "aba" 也是一个有效答案。
  示例 2：

  输入: "cbbd"
  输出: "bb"
*/

/**
 * 
 * 思路： 中心扩展法（直接暴力法，时间复杂度为n^ 3）
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

 function expandAroundCenter (str, left, right) {
  let l = left;
  let r = right;
  while (l >= 0 && r < str.length && str.charAt(l) === str.charAt(r)) {
    l = l - 1;
    r = r + 1;
  }
  return {
    left: l + 1,
    right: r - 1
  };
 }
var longestPalindrome = function(s) {
  if (s === null || s.length === 0) return '';
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    let oddLen = expandAroundCenter(s, i, i);
    let evenLen = expandAroundCenter(s, i, i + 1);
    let islonger = oddLen.right - oddLen.left > evenLen
    .right - evenLen.left;
    let maxLen = islonger ? oddLen : evenLen;
    if (maxLen.right - maxLen.left > end - start) {
      start = maxLen.left;
      end = maxLen.right;
    }
  
  }
  return s.substring(start, end + 1);

};

console.log(longestPalindrome("cbbd"));
// @lc code=end

