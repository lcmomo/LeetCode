/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */


 /**
  * 
    * 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

        注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

        

        示例 1：

        输入：
        s = "barfoothefoobarman",
        words = ["foo","bar"]
        输出：[0,9]
        解释：
        从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
        输出的顺序不重要, [9,0] 也是有效答案。
        示例 2：

        输入：
        s = "wordgoodgoodgoodbestword",
        words = ["word","good","best","word"]
        输出：[]
  */


  /**
   * 
   * 
   * 思路：
   * 一. 暴力穷举：
   *    1. 确定所有单词长度是否一致，不一致直接返回空
   *    2. 从s中拿出length个字符，查找给定的单词表，找出匹配单词， （将其保存在一个临时变量），再次匹配检查是否已经用过。 重复扫描每个位置字符
   *    3. 扫描到 length * n + 1 位置时，就可以不用扫描了（使用map保存单词表）
   * 
    *       时间复杂度：O(KN)
        N 为 s 的长度，K 为 words 一个单词的长度

        空间复杂度：O(N + M)
        N 为 s 的长度，M 为 words 的长度


   * 二。 滑动窗口法：
   *     
   */
// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!s || !words.length) return [];
    let 
};
// @lc code=end

