/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

 /**
  * 
  * 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。

    这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

    示例1:

    输入: pattern = "abba", str = "dog cat cat dog"
    输出: true
    示例 2:

    输入:pattern = "abba", str = "dog cat cat fish"
    输出: false
    示例 3:

    输入: pattern = "aaaa", str = "dog cat cat dog"
    输出: false
    示例 4:

    输入: pattern = "abba", str = "dog dog dog dog"
    输出: false
  */

  /**
   * 
   *  思路： 利用hash表记录每一个字符对应的字符串，以及每个字符串对应的字符，然后枚举每一对字符与字符串的配对过程，不断更新hash表，如发生冲突，则说明给定的输入不满足双射关系。
   * 实际代码中，枚举pattern 中每个字符，利用双指针来均摊线性的找到该字符在str中对应的字符串，每次确定一个字符串与字符的组合，就坚持是否有冲突，最后检查两字符串是否比较完毕。
   */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {

    const words = s.split(" ");
    if (words.length !== pattern.length) return false;

    let word2char = new Map();
    let char2word = new Map();
    for (let [i, word] of words.entries()) {
        const char = pattern[i];
        if (word2char.has(word) && word2char.get(word) !== char || char2word.has(char) && char2word.get(char) !== word) {
            return false;
        }
        word2char.set(word, char);
        char2word.set(char, word);
    }
    return true;

};

// let pattern = "abba";
// let str = "dog dog dog dog";
// console.log(wordPattern(pattern, str));

/**
 *  时间复杂度：O（n + m），其中n为pattern长度，m为str长度，插入和查询hash表均摊时间复杂度O（n + m），每个字符之多只被遍历一次。
 *  空间复杂度：O（n + m），其中n为pattern的长度，m为str的长度，最坏情况，需要存储pattern 中的每一个字符和str中每一个字符
 */
// @lc code=end

