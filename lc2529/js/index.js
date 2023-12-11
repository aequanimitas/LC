/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
	let p = 0, n = 0
	for(let i = 0; i < nums.length; i++) {
		nums[i] < 0 ? n++ : nums[i] > 0 ? p++ : null
	}
	return Math.max(p, n)
};

// TODO: convert this to binary search!
// - check mid
// - if mid is greater than 0....check left half
// -

module.exports = maximumCount
