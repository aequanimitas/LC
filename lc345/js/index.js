/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
	// 1. store the vowels as stack
	// 2. store the indices as queue
	let vowels = []
	let indices = []
	let ss = s.split('')

	for(let i = 0; i < ss.length; i++) {
		switch(ss[i]) {
			case 'a':
			case 'A':
			case 'e':
			case 'E':
			case 'i':
			case 'I':
			case 'o':
			case 'O':
			case 'u':
			case 'U':
				vowels.push(ss[i])
				indices.push(i)
			default:
				continue
		}
	}

	indices.reverse()

	for(let i =0; i < indices.length; i++) {
		ss[indices[i]] = vowels[i]
	}

	return ss.join('')
};
module.exports = reverseVowels
