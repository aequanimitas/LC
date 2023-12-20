/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
	let acc = new Array(indices.length).fill('')
	for(let i = 0; i < indices.length; i++) {
		acc[indices[i]] = s.charAt(i)
	}

	return acc.join('')
};

module.exports = restoreString
