/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
	let acc = []

	for(let i = 0; i < matrix.length; i++) {
		acc = acc.concat(matrix[i])
	}

	return acc.sort((a, b) => a - b)[k - 1]
};

module.exports = kthSmallest
