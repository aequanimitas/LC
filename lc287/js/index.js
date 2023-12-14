var findDuplicate = function(nums) {
	let acc = new Array(nums.length).fill(-1)
	for(let i = 0; i < nums.length; i++) {
		if(acc[nums[i]] === 0) {
			return nums[i]

		} else{
			acc[nums[i]] = 0
		}
	}
};
module.exports = findDuplicate
