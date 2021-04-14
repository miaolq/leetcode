/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (79.23%)
 * Likes:    895
 * Dislikes: 0
 * Total Accepted:    173.9K
 * Total Submissions: 219.4K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 *
 * 说明：解集不能包含重复的子集。
 *
 * 示例:
 *
 * 输入: nums = [1,2,3]
 * 输出:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function (nums) {
//   let res = [[]]
//   for (let i = 0; i < nums.length; ++i) {
//     const resLength = res.length
//     for (let j = 0; j < resLength; ++j) {
//       const temp = [...res[j]]
//       temp.push(nums[i])
//       console.log('tep', temp)
//       res.push(temp)
//       console.log(res)
//     }
//   }
//   console.log(res)
//   return res
// }
var subsets = function (nums) {
  let res = []
  function dfs(line = [], index) {
    if (index === nums.length) {
      // 每条line是一种可能
      res.push(line)
      return
    }
    dfs(line, index + 1)
    dfs(line.concat(nums[index]), index + 1)
  }

  dfs([], 0)
  console.log(res)
  return res
}
// @lc code=end

subsets([1, 2, 3])
