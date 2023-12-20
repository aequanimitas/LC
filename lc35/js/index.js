var searchInsert = function(nums, target) {
	let start = 0
	let end = nums.length - 1
	let mid = null

	while(start <= end) {
		mid = Math.floor((start + end) / 2)
		if(nums[mid] === target) {
			return mid
		} else if (target < nums[mid]) {
			end = mid - 1
		} else {
			start = mid + 1
		}
	}

	return start
}

module.exports = searchInsert
