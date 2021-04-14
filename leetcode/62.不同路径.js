/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 *
 * https://leetcode-cn.com/problems/unique-paths/description/
 *
 * algorithms
 * Medium (63.96%)
 * Likes:    850
 * Dislikes: 0
 * Total Accepted:    201.2K
 * Total Submissions: 314.5K
 * Testcase Example:  '3\n7'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 *
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 *
 * 问总共有多少条不同的路径？
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：m = 3, n = 7
 * 输出：28
 *
 * 示例 2：
 *
 *
 * 输入：m = 3, n = 2
 * 输出：3
 * 解释：
 * 从左上角开始，总共有 3 条路径可以到达右下角。
 * 1. 向右 -> 向右 -> 向下
 * 2. 向右 -> 向下 -> 向右
 * 3. 向下 -> 向右 -> 向右
 *
 *
 * 示例 3：
 *
 *
 * 输入：m = 7, n = 3
 * 输出：28
 *
 *
 * 示例 4：
 *
 *
 * 输入：m = 3, n = 3
 * 输出：6
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 题目数据保证答案小于等于 2 * 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 暴力递归
var uniquePaths1 = function (m, n) {
  if (m === 1 || n === 1) {
    return 1
  }
  return uniquePaths(m - 1, n) + uniquePaths(m, n - 1)
}
// 缓存
var uniquePaths2 = function (m, n) {
  var fn = (m, n, cache = {}) => {
    if (m === 1 || n === 1) {
      return 1
    }
    var cacheData = cache[`${m}-${n}`]
    if (cacheData !== undefined) {
      return cacheData
    }
    return (cache[`${m}-${n}`] = fn(m - 1, n, cache) + fn(m, n - 1, cache))
  }
  return fn(m, n, {})
}
// 自底向上， 循环
var uniquePaths = function (m, n) {
  var res = {}
  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      res[i] = res[i] === undefined ? {} : res[i]
      if (i === 1 || j === 1) {
        res[i][j] = 1
      } else {
        res[i][j] = res[i - 1][j] + res[i][j - 1]
      }
    }
  }
  return res[m][n]
}
// @lc code=end

uniquePaths(2, 2)
