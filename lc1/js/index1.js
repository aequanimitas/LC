	/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	let map = new Map()	
	for(let i = 0; i < nums.length; i++) {
		let key = target - nums[i]
		if (map.has(key)) {
			return [map.get(key), i];
		} else {
			map.set(nums[i], i)
		}
	}
	return []
};

module.exports = twoSum
