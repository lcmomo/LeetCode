/*
 * @lc app=leetcode.cn id=842 lang=javascript
 *
 * [842] 将数组拆分成斐波那契序列
 */

 /**
  * 
  * 给定一个数字字符串 S，比如 S = "123456579"，我们可以将它分成斐波那契式的序列 [123, 456, 579]。

        形式上，斐波那契式序列是一个非负整数列表 F，且满足：

        0 <= F[i] <= 2^31 - 1，（也就是说，每个整数都符合 32 位有符号整数类型）；
        F.length >= 3；
        对于所有的0 <= i < F.length - 2，都有 F[i] + F[i+1] = F[i+2] 成立。
        另外，请注意，将字符串拆分成小块时，每个块的数字一定不要以零开头，除非这个块是数字 0 本身。

        返回从 S 拆分出来的任意一组斐波那契式的序列块，如果不能拆分则返回 []。

        

        示例 1：

        输入："123456579"
        输出：[123,456,579]
        示例 2：

        输入: "11235813"
        输出: [1,1,2,3,5,8,13]
        示例 3：

        输入: "112358130"
        输出: []
        解释: 这项任务无法完成。
        示例 4：

        输入："0123"
        输出：[]
        解释：每个块的数字不能以零开头，因此 "01"，"2"，"3" 不是有效答案。
        示例 5：

        输入: "1101111"
        输出: [110, 1, 111]
        解释: 输出 [11,0,11,11] 也同样被接受。
        

        提示：

        1 <= S.length <= 200
        字符串 S 中只含有数字。
    */

    /**
     * 
     * 思路： 回溯 + 剪枝
     * 
     * 使用列表存储拆分出的数，回溯过程中维护该列表元素，列表初始为空，遍历字符串所有可能的前缀，作为当前被拆分的数，然后对剩余部分继续拆分，直到整个字符串拆分完毕
     *  剪枝：
     *      1. 拆分出的数如果不是0， 则不能以0开头，如果字符串剩余部分以0开头，就不需要考虑拆分出长度大于1的数，因为长度大于1的数以0开头不符合要求
     *      2. 拆分出的数必须符合32位有符号整数，每个数必须在[ 0, 2^(31) - 1 ] 之间
     *      3. 如果列表中至少有两个数，且拆分出的数已经大于最后两个数和，就不需要继续拆分。
     * 当整个字符串拆分完毕，如果列表至少有3个数，则得到一个符合要求的斐波那契数列，返回列表
     * 
     */
// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */

const backtrack = (list, S, length, index, sum, prev) => {
    if (index === length) {
        return list.length >= 3;
    }

    let currentLength = 0;
    for (let i = index; i < length; i++) {
        if (i > index && S[index] === '0') {  // 不能以0开头
            break;
        }

        currentLength = currentLength * 10 + S[i].charCodeAt() - '0'.charCodeAt();
        if (currentLength > Math.pow(2, 31) -1) {  // 必须是32位有符号整数
            break;
        }

        let curr = currentLength;
        if (list.length >= 2) {
            if(curr < sum) {
                continue;
            } else if (curr > sum) {
                break;
            }
        }

        list.push(curr);
        if (backtrack(list, S, length, i + 1, prev + curr, curr)) {
            return true;
        } else {
            list.splice(list.length -1, 1);
        }

    }
    return false;
}
var splitIntoFibonacci = function(S) {
    let list = new Array().fill(0);
    backtrack(list, S, S.length, 0, 0, 0);
    return list;


};

// const S = "11235813";
// console.log(splitIntoFibonacci(S))

// 时间复杂度： O（nlog^2 C） (n是字符串长度， 
// C是题目规定的整数范围，回溯过程中，真正进行回溯的只有前个数，
// 3个数起，整个斐波那契数列是可以被唯一确定的，回溯只起到验证作用，
// 对于前两个数，他们的位数不能超过（log10 · C），那么枚举的空间为O（log^2 C），
// 对于后面的数，回溯过程是没有分支的，时间复杂度为O（n）相乘即为总时间复杂度 O（nlog^2 C)
// )
// 空间复杂度： O（n） （n是字符串长度，空间复杂度主要取决去递归过程中递归调用层数）
// @lc code=end

