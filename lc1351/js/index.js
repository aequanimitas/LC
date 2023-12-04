/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
	let acc = []
	let c = 0
	for(let i = 0; i < grid.length; i++) {
		acc = acc.concat(grid[i])
	}

	acc.sort()

	for(let i = 0; i < acc.length; i++) {
		if(acc[i] < 0) {
			c++
		} else {
			return c
		}
	}

	return c
};

module.exports = countNegatives
