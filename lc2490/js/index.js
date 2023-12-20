/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
	// 1. iterate through words
	// 2. get last character of word
	// 3. get first character of next word
	// 4. if counter + 1 == sentence.length, break
	sentence = sentence.split(' ')
	for(let i = 0; i < sentence.length; i++) {
		if(i + 1 === sentence.length) {
			return sentence[0].charAt(0) === sentence[i].charAt(sentence[i].length - 1)
		} else {
			let x = sentence[i]
			let y = sentence[i + 1]
			if(x.charAt(x.length - 1) === (y.charAt(0))) {
				continue;
			} else {
				return false
			}
		}
	}
	return false
};

module.exports = isCircularSentence
