/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

/**
* 
* {编写一个函数来查找字符串数组中的最长公共前缀。

  如果不存在公共前缀，返回空字符串 ""。

  示例 1:

  输入: ["flower","flow","flight"]
  输出: "fl"
  示例 2:

  输入: ["dog","racecar","car"]
  输出: ""
  解释: 输入不存在公共前缀。
  说明:

  所有输入只包含小写字母 a-z 。} strs 
 */


 /**
  * 
  * 思路 1. 双重循环，外层扫描字符串数组，内层循环每个字符串
  * 2. 使用临时变量数组，保存每个字符串对应位置的值，判断其是否一致，不一致，则返回第一个到它前一个字符（注意字符串长度）
  */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
 let res = '';
 if (strs === null || strs.length === 0) return res;
 for(let i = 0; i < strs[0].length; i++) {
   let  tmp = strs[0].charAt(i);
   for (let j = 0; j < strs.length; j++ ) {
     if (i >= strs[j].length || tmp !== strs[j].charAt(i)) {
       return res;
     }
   }
   res += tmp
 }
 return res
};
// @lc code=end

