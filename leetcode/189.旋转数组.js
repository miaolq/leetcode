/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 *
 * https://leetcode-cn.com/problems/rotate-array/description/
 *
 * algorithms
 * Medium (43.58%)
 * Likes:    736
 * Dislikes: 0
 * Total Accepted:    179.4K
 * Total Submissions: 411.8K
 * Testcase Example:  '[1,2,3,4,5,6,7]\n3'
 *
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 *
 * 示例 1:
 *
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 *
 *
 * 示例 2:
 *
 * 输入: [-1,-100,3,99] 和 k = 2
 * 输出: [3,99,-1,-100]
 * 解释:
 * 向右旋转 1 步: [99,-1,-100,3]
 * 向右旋转 2 步: [3,99,-1,-100]
 *
 * 说明:
 *
 *
 * 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 * 要求使用空间复杂度为 O(1) 的 原地 算法。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function (nums, k) {
//   while (k > 0) {
//     --k
//     let last = nums[nums.length - 1]
//     for (let i = nums.length - 1; i > 0; --i) {
//       nums[i] = nums[i - 1]
//     }
//     nums[0] = last
//   }
//   return nums
// }
// 1. 一次移动k个
// 2。 toknow  k=  k %  nums.length 来优化
// 3. 同时用老的位置存储旧的数据即可.  k>1 无效
// var rotate = function (nums, k) {
//   k = k % nums.length
//   let helper = nums.slice(nums.length - k)
//   for (let i = nums.length - 1; i > k - 1; --i) {
//     let mid = nums[i]
//     nums[i] = nums[i - k]
//     nums[i - k] = mid
//   }
//   while (k > 0) {
//     nums[k - 1] = helper[k - 1]
//     --k
//   }
//   return nums
// }
// @lc code=end

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 1))
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 2))
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 4))
