/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
	let acc = []

	for(let i = 0; i < matrix[0].length; i++) {
		let acc2 = []
		for(let j = 0; j < matrix.length; j++) {
			acc2.push(matrix[j][i])
		}
		acc.push(acc2)
	}
	return acc
};

module.exports = transpose
