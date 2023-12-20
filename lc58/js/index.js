/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	s = s.trim().split(' ').filter((a) => a != ' ')
	return s[s.length - 1].length
};

module.exports = lengthOfLastWord
