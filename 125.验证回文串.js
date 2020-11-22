/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (46.61%)
 * Likes:    296
 * Dislikes: 0
 * Total Accepted:    178.4K
 * Total Submissions: 382.9K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 *
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 *
 * 示例 1:
 *
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "race a car"
 * 输出: false
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0,
    j = s.length - 1
  while (i < j) {
    const strI = s.charAt(i).toLowerCase()
    if (!/[0-9a-z]/i.test(strI)) {
      i += 1
      continue
    }
    const strJ = s.charAt(j).toLowerCase()
    if (!/[0-9a-z]/i.test(strJ)) {
      j -= 1
      continue
    }
    if (strI !== strJ) {
      return false
    }
    i += 1
    j -= 1
  }

  return true
}
// @lc code=end

isPalindrome('A man, a plan, a canal: Panama')
