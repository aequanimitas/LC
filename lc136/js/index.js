var singleNumber = function(nums) {
	let x = 0
	// XOR
  for(let i = 0; i < nums.length; i++) x = x ^ nums[i]
  return x
};

module.exports = restoreString
