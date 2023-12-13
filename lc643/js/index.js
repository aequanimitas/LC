/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var findMaxAverage = function(nums, k) {
	// keep track of the previous element
	let prev = 0, ave = Number.NEGATIVE_INFINITY, sum = 0

	for(let i = 0; i < nums.length; i++) {
		sum += nums[i]

		if((i - prev + 1) === k) {
			// get average, constant space
			ave = Math.max(sum/k, ave)
			// subtract the farthest value so that yo don't cache on next computation
			sum -= nums[prev]
			prev++
		}
	}

	return ave
};

module.exports = findMaxAverage
