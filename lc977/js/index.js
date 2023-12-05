/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = (nums) => { return nums.map((x) => x * x).sort((x, y) => x - y) }

module.exports = sortedSquares
