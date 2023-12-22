/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
	let left = 0, c = 0, acc = 0

	for(let i = 0; i < arr.length; i++) {
		acc += arr[i]

		// sliding window, when counted elements reach `k`
		// eg: if `k` = 3, and `i` is `2` (which means 3rd element of array), start sliding
		// also the constant space accumulator helps here
		if((i - left + 1) === k) {
			((acc / k) >= threshold) ? c++ : null;
			// subtract the old value from accumulator
			acc -= arr[left]
			// increase counter
			left++
		}
	}

	return c
};

module.exports = numOfSubarrays
