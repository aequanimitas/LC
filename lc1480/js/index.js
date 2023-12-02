/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
	let arr = []
	let prev = 0
	for(let i = 0; i < nums.length; i++) {
		arr[i] = prev + nums[i]
		prev+= nums[i]
	}
	return arr
};

module.exports = runningSum
