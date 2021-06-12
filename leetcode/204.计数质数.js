/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

 /**
  * 
  * @统计所有小于非负整数 n 的质数的数量。

 

        示例 1：

        输入：n = 10
        输出：4
        解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
        示例 2：

        输入：n = 0
        输出：0
        示例 3：

        输入：n = 1
        输出：0
        

        提示：

        0 <= n <= 5 * 106
  */

  /**
   * 
   * 思路： 方法一：枚举  
   * 时间复杂度：O(n\sqrt{n})O(n n
​	)。单个数检查的时间复杂度为 O(\sqrt{n})O( 
​	)，一共要检查 O(n)O(n) 个数，因此总时间复杂度为 O(n\sqrt{n})O(n ）

​	
 )。

    空间复杂度：O(1)O(1)。
    思路二： 筛质数
    枚举没有考虑到数与数的关联性，因此难以再继续优化时间复杂度。接下来我们介绍一个常见的算法，该算法由希腊数学家厄拉多塞（\rm EratosthenesEratosthenes）提出，称为厄拉多塞筛法，简称埃氏筛。

    我们考虑这样一个事实：如果 xx 是质数，那么大于 xx 的 xx 的倍数 2x,3x,\ldots2x,3x,… 一定不是质数，因此我们可以从这里入手。

    我们设 \textit{isPrime}[i]isPrime[i] 表示数 ii 是不是质数，如果是质数则为 11，否则为 00。从小到大遍历每个数，如果这个数为质数，则将其所有的倍数都标记为合数（除了该质数本身），即 00，这样在运行结束的时候我们即能知道质数的个数。

    这种方法的正确性是比较显然的：这种方法显然不会将质数标记成合数；另一方面，当从小到大遍历到数 xx 时，倘若它是合数，则它一定是某个小于 xx 的质数 yy 的整数倍，故根据此方法的步骤，我们在遍历到 yy 时，就一定会在此时将 xx 标记为 \textit{isPrime}[x]=0isPrime[x]=0。因此，这种方法也不会将合数标记为质数。

    当然这里还可以继续优化，对于一个质数 xx，如果按上文说的我们从 2x2x 开始标记其实是冗余的，应该直接从 x\cdot xx⋅x 开始标记，因为 2x,3x,\ldots2x,3x,… 这些数一定在 xx 之前就被其他数的倍数标记过了，例如 22 的所有倍数，33 的所有倍数等。


   */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {

    let  isPrime = new Array(n).fill(1);
    let res = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            res += 1;
            for(let j = i * i; j < n; j += i) {
                isPrime[j] = 0;
            }
        }
    }
    return res;
};


/**
 * 时间复杂度：O(n\log \log n)O(nloglogn)。
 * 空间复杂度：O(n)O(n)。我们需要 O(n)O(n) 的空间记录每个数是否为质数。
 */
// console.log(countPrimes(3))
// @lc code=end

