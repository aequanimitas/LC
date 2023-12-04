/**
 * @param {number[][]} grid
 * @return {number}
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
	let c = 0
	let m = new Map()

	for(let i = 0; i < nums.length; i++) {
		if(m.has(nums[i])) {
			m.set(nums[i], m.get(nums[i]) + 1)
		} else {
			m.set(nums[i], 1)
		}
	}

	let i = m[Symbol.iterator]()

	m.forEach((val, key, map) => {
		if(val == 1) {
			c = c + key
		}
	})

	return c
};

module.exports = sumOfUnique
