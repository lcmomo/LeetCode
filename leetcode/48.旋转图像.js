/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */


 /**
  * 
  * 
  * 给定一个 n × n 的二维矩阵表示一个图像。

        将图像顺时针旋转 90 度。

        说明：

        你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

        示例 1:

        给定 matrix = 
        [
        [1,2,3],
        [4,5,6],
        [7,8,9]
        ],

        原地旋转输入矩阵，使其变为:
        [
        [7,4,1],
        [8,5,2],
        [9,6,3]
        ]
        示例 2:

        给定 matrix =
        [
        [ 5, 1, 9,11],
        [ 2, 4, 8,10],
        [13, 3, 6, 7],
        [15,14,12,16]
        ], 

        原地旋转输入矩阵，使其变为:
        [
        [15,13, 2, 5],
        [14, 3, 4, 1],
        [12, 6, 8, 9],
        [16, 7,10,11]
        ]
  */

  /**
   * 
   * 思路： 一、 使用辅助数组
   *    对于数组元素a[i][j], 翻转后辅助数组中位置为： b[j][n - i -1]
   *    将翻转后的结果复制到原数组中
   *    时间复杂度： O（N^2）
   *    空间复杂度： O（N^2）
   * 
   *       二、 使用翻转替代旋转
   *    1.  水平翻转：以示例二为例：
   *    
   *    [                                   [
   *        [5 1 9 11],                         [15 14 12 16],
   *        [2 4 8 10],          水平翻转 =>     [13 3 6 7 ],
   *                                            [2 4 8 10],
   *        [13 4 8 10],                        [5 1 9 11]
                                       ]
   *        [15 14 12 16] 
   *    ]  
   *    2 . 主对角线翻转
   *      =>      
   *    [
   *        [15 13  2 5],
   *        [14 3 4 1],
   *        [12 6 8 9],
   *        [16 7 19 11]
   *    ]
   * 
   *    对于水平轴翻转，只需要枚举矩阵上半部分元素，和下半部分交换即可: matrix[row][col] = matrix[n- row - 1][col]
   *    主对角线翻转：
   *    枚举主对角线左侧元素，和右侧进行交换
   *    matrix[row][col] = matrix[col][n - row - 1]
   *    
   *        
   */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const length = matrix.length;
    // 水平翻转
    for (let i = 0; i < Math.floor(length / 2); i++) {
        for (let j =0; j< length; j++) {
            [ matrix[i][j], matrix[length - i - 1][j] ] = [ matrix[length - i -1][j], matrix[i][j]];
        }
    }
    // 主对角线翻转
    for (let i = 0; i < length; i++) {
        for(let j = 0; j < i; j++) {
            [ matrix[i][j], matrix[j][i] ] = [ matrix[j][i], matrix[i][j]];
        }
    }

    return matrix;
};

// 时间复杂度： O（N^2）
// 空间复杂度： O(1)
// @lc code=end

