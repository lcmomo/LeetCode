/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */
    // 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
    // 输入: 5
    // 输出:
    // [
    //      [1],
    //     [1,1],
    //    [1,2,1],
    //   [1,3,3,1],
    //  [1,4,6,4,1]
    // ]



// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 0 ) {
        return [];
    }
    let res = [];
    for(let i = 0; i< numRows; i++) {
        let row = new Array(i + 1).fill(1);
        for( let j = 1; j < row.length -1; j++) {
            row[j] = res[i - 1][j - 1] + res[i - 1][j];
        }
        res.push(row);
    }
    return res;
    

};

// 时间复杂度

// console.log(generate(5))
// @lc code=end

