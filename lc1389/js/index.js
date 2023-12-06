/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
	let acc = new Array(nums.length)
	let it = index.values()

	for(let i of it) {
		acc[i] = nums[i]
	}

	console.log(acc)
	return acc
};

module.exports = createTargetArray
