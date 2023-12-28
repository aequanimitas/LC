/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	let map = new Map()

	for(let key = 0; key < nums.length; key++) {
		if(map.has(nums[key])) {
			return true
		} else {
			map.set(nums[key], null)
		}
	}
	return false
};

module.exports = containsDuplicate
