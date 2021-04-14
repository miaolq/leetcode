/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 *
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/description/
 *
 * algorithms
 * Hard (41.95%)
 * Likes:    1024
 * Dislikes: 0
 * Total Accepted:    101K
 * Total Submissions: 240.6K
 * Testcase Example:  '[2,1,5,6,2,3]'
 *
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 *
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 *
 *
 *
 *
 *
 * 以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。
 *
 *
 *
 *
 *
 * 图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。
 *
 *
 *
 * 示例:
 *
 * 输入: [2,1,5,6,2,3]
 * 输出: 10
 *
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let max = 0
  const length = heights.length
  for (let i = 0; i < length; ++i) {
    let minH = Number.MAX_SAFE_INTEGER
    for (let j = i; j < length; ++j) {
      minH = Math.min(minH, heights[j])
      //  const minH = Math.min(...heights.slice(i,j+1)) // 性能不好。 toknow。 把之前最小的记录下来。
      max = Math.max(minH * (j - i + 1), max)
    }
  }
  return max
}
// @lc code=end
