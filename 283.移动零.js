/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (63.47%)
 * Likes:    866
 * Dislikes: 0
 * Total Accepted:    274.1K
 * Total Submissions: 431.9K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 示例:
 *
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 *
 * 说明:
 *
 *
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 *
 *
 */

// solu1: 滚雪球法/ 滑标法
// var moveZeroes = function (nums) {
//   const zeros = []
//   for (let i = 0; i < nums.length; i += 1) {
//     if (nums[i] === 0) {
//       zeros.push(i)
//     } else if (zeros.length > 0) {
//       const m = zeros[0]
//       zeros.shift() // dont forget
//       zeros.push(i) // dont forget
//       nums[m] = nums[i]
//       nums[i] = 0
//     }
//   }
//   return nums
// }

// solu2: 将所有非0，前移。 剩余的填0（如果不是0的话，可以用一个数组存起来）
// var moveZeroes = function (nums) {
//   let noZeroI = 0
//   for (let num of nums) {
//     if (num !== 0) {
//       nums[noZeroI++] = num
//     }
//   }
//   while (noZeroI < nums.length) {
//     nums[noZeroI++] = 0
//   }
//   return nums
// }

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// solu3:
var moveZeroes = function (nums) {
  for (let lastNonZeroIndex = 0, i = 0; i < nums.length; i += 1) {
    if (nums[i] !== 0) {
      const mid = nums[lastNonZeroIndex]
      nums[lastNonZeroIndex] = nums[i]
      lastNonZeroIndex++
      nums[i] = mid
    }
  }
  return nums
}

// @lc code=end
