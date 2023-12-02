/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
	let size = nums.length * 2
	let arr = new Array(size)
	let ct = 0
	let numCt = 0

	while (ct < size) {
		arr[ct] = nums[numCt]

		if(numCt == nums.length - 1) {
			numCt = 0
		} else {
			numCt++
		}

		ct++
	}

	return arr
};

module.exports = getConcatenation
