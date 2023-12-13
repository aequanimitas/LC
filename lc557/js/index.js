/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var reverseWords = function(s) {
	let acc = []
	for(let word of s.split(' ')) {
		let i = 0, j = word.length - 1
		word = word.split('')
		while(i < j) {
			temp = word[j]
			word[j] = word[i]
			word[i] = temp
			i++
			j--
		}
		acc.push(word)
	}

	for(let i = 0; i < acc.length; i++) {
		acc[i] = acc[i].join('')
	}

	return acc.join(' ')
};

module.exports = reverseWords
