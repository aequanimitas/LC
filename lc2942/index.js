/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
	let acc = []
	for (let i = 0; i < words.length; i++) {
		let word = words[i]
		if(`${word}`.includes(x)) {
			acc.push(i)
		}
	}
	return acc
};

module.exports = findWordsContaining
