/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (30.06%)
 * Likes:    2763
 * Dislikes: 0
 * Total Accepted:    367.2K
 * Total Submissions: 1.2M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？请你找出所有满足条件且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 *
 *
 * 示例：
 *
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 *
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 *
 *
 */

// 暴力  含重复的
// var threeSum = function (nums) {
//   const length = nums.length
//   const res = []
//   for (let i = 0; i < length; ++i) {
//     for (let j = i + 1; j < length; ++j) {
//       for (let m = j + 1; m < length; ++m) {
//         if (nums[i] + nums[j] + nums[m] === 0) {
//           res.push([nums[i], nums[j], nums[m]])
//         }
//       }
//     }
//   }
//   return res
// }

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 排序后3指针
// 如果不排序，直接三指针.  无法确定 左右指针如何走下一步
var threeSum = function (nums) {
  nums.sort((a, b) => a - b) // ascii码字符顺序 toNote '-1'<'-4'
  const length = nums.length
  let res = []
  for (let k = 0; k < length - 2; ++k) {
    if (k > 0 && nums[k] === nums[k - 1]) {
      continue
    }
    for (let i = k + 1, j = length - 1; i < j; ) {
      if (i > k + 1 && nums[i] === nums[i - 1]) {
        ++i
        continue
      }
      if (j < length - 1 && nums[j] === nums[j + 1]) {
        --j
        continue
      }
      if (nums[k] + nums[i] + nums[j] < 0) {
        ++i
      } else if (nums[k] + nums[i] + nums[j] === 0) {
        res.push([nums[k], nums[i], nums[j]])
        ++i // dont forget
      } else {
        --j
      }
    }
  }
  return res
}

// @lc code=end

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]))
