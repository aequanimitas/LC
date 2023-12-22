/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	let map = new Map()
	let ct = 0

	for(num of nums) {
		x = target - num

		if(map.get(x) === undefined) {
			map.set(num, ct);
			ct += 1;
		} else {
			return [map.get(x), ct]
		}
	}

	return [];
};

module.exports = twoSum
