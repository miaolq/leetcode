/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (50.89%)
 * Likes:    1345
 * Dislikes: 0
 * Total Accepted:    320.7K
 * Total Submissions: 630.2K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 *
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *
 * 注意：给定 n 是一个正整数。
 *
 * 示例 1：
 *
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 *
 * 示例 2：
 *
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 1，2阶梯时，就是斐波那契额
var climbStairs = function (n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  let sumPre = 1
  let sumNow = 2
  for (let i = 3; i <= n; ++i) {
    let sumNowPre = sumNow
    sumNow = sumPre + sumNow
    sumPre = sumNowPre
  }
  return sumNow
}
// @lc code=end
