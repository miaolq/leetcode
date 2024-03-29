/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (48.93%)
 * Likes:    693
 * Dislikes: 0
 * Total Accepted:    234K
 * Total Submissions: 478.3K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 *
 *
 *
 * 说明：
 *
 *
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 *
 *
 *
 *
 * 示例：
 *
 *
 * 输入：
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 *
 * 输出：[1,2,2,3,5,6]
 *
 *
 *
 * 提示：
 *
 *
 * -10^9
 * nums1.length == m + n
 * nums2.length == n
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const res = []
  let i = 0
  let j = 0
  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      res.push(nums1[i])
      ++i
    } else {
      res.push(nums2[j])
      ++j
    }
  }
  while (i < m) {
    res.push(nums1[i])
    ++i
  }
  while (j < n) {
    res.push(nums2[j])
    ++j
  }
  return res
}
// @lc code=end
