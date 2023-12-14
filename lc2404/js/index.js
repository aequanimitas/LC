/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostFrequentEven = function(nums) {
	let map = new Map
	let max_val = 0
	let max_key = -1
	for(let n of nums) {
		if(n % 2 === 0) {
			if(map.has(n)) {
				map.set(n, map.get(n) + 1)
			} else {
				map.set(n, 1)
			}
		}
	}
	for(let i of map) {
		if (i[1] > max_val) {
			max_key = i[0]
			max_val = i[1]
		} else if (i[1] === max_val) {
			max_key = i[0] > max_key ? max_key : i[0]
			max_val = i[1]
		} else {
			null
		}
	}

	return max_key
};

module.exports = mostFrequentEven
