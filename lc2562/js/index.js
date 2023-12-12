/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
	let j = nums.length - 1, acc = 0
	for (let i = 0; i < nums.length; i++) {
		if(j < i) {
			return acc
		} else if (j == i){
			return acc + nums[j]
		} else {
			acc += parseInt(`${nums[i]}${nums[j]}`, 10)
			j--
		}
	}
	return acc
};
module.exports = findTheArrayConcVal
