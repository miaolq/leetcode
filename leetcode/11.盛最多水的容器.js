/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 *
 * https://leetcode-cn.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (64.43%)
 * Likes:    1995
 * Dislikes: 0
 * Total Accepted:    321.6K
 * Total Submissions: 499.2K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为
 * (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 *
 * 说明：你不能倾斜容器。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49
 * 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 *
 * 示例 2：
 *
 *
 * 输入：height = [1,1]
 * 输出：1
 *
 *
 * 示例 3：
 *
 *
 * 输入：height = [4,3,2,1,4]
 * 输出：16
 *
 *
 * 示例 4：
 *
 *
 * 输入：height = [1,2,1]
 * 输出：2
 *
 *
 *
 *
 * 提示：
 *
 *
 * n = height.length
 * 2
 * 0
 *
 *
 */

// 暴力解法
// var maxArea = function (height) {
//     const n = height.length
//     if (n <= 1) {
//       return 0
//     }
//     let max = 0
//     for (let i = 1; i < n; i += 1) {
//       for (let j = 0; j < i; j += 1) {
//         const num = Math.min(height[j], height[i]) * (i - j)
//         num > max && (max = num)
//       }
//     }
//     return max
//   }

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

// 左右双指针，向中间收敛
var maxArea = function (height) {
  let max = 0
  for (let i = 0, j = height.length - 1; i < j; ) {
    const num = Math.min(height[i], height[j]) * (j - i)
    max = Math.max(num, max)
    height[i] > height[j] ? --j : ++i
  }
  return max
}

// @lc code=end
