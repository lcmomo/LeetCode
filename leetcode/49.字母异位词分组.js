/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

 /**
  * 
  * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

    示例:

    输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
    输出:
    [
    ["ate","eat","tea"],
    ["nat","tan"],
    ["bat"]
    ]
    说明：

    所有输入均为小写字母。
    不考虑答案输出的顺序。

  */

  /**
   * 
   * 思路：一 排序
   * 互为字母异位词的两个字符串包含的字母相同，因此对两个字符串分别进行排序之后得到的字符串一定是相同的，故可以将排序后的字符串作为hash表的键
   *    二。 计数
   *       互为字母异位词的字符串字母相同，因此两个字符串中相同字母出现的次数一定相同，可以将每个字母出现的次数使用字符串表示，作为hash的键
   *        
   *    由于字符串 只包含小写字母，对每个字符串，使用长度为26的数组记录每个字母出现的次数。
   */

   

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for (let str of strs) {
        let array = Array.from(str);
        array.sort();
        let key = array.toString();
        let list = map.get(key) ? map.get(key) : new Array()
        list .push(str);
        map.set(key, list);
    }
    return Array.from(map.values());
};

    

/**
 * 时间复杂度：O（n * k * logk）n 是strs中字符串数量，k是strs中字符串最大长度，需要遍历n个字符串，对每个字符串需要排序
 * 空间复杂度 O（N* K） n是字符串数量，k是strs中字符串最大长度
 */


// var groupAnagrams = function(strs) {
//     const map = new Object();
//     for (let s of strs) {
//         const count = new Array(26).fill(0);
//         for (let c of s) {
//             count[c.charCodeAt() - 'a'.charCodeAt()]++;
//         }
//         map[count] ? map[count].push(s) : map[count] = [s];
//     }
//     return Object.values(map);
// }


// const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
// console.log(groupAnagrams(arr));
// @lc code=end

