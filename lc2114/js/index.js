/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
	let max = 0

	for(const sentence of sentences) {
		let sLen = `${sentence}`.split(" ").length
		if(max <= sLen) {
			max = sLen
		}
	}

	return max
};

module.exports = mostWordsFound
