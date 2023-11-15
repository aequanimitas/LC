/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var intersection1 = function(nums1, nums2) {
	if(nums1.length === 0 || nums2.length === 0) {
		return []
	} else {
		let hash_map = nums1.reduce((acc, value) => ({ ...acc, [value]: null}), {})
		let acc = []

		for(let i = 0; i < nums2.length; i++) {
			let addr = nums2[i]
			let z = hash_map[addr]
			if (z === null) {
				hash_map[addr] = 1
				acc.push(addr)
			}
		}

		return acc
	}
};

// The proper solution is to use Set()

module.exports = intersection1
