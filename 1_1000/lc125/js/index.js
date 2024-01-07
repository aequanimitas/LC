/**
 * @param {number[]} nums
 * @return {number}
 */
var isPalindrome = function(s) {
	s = s.toLowerCase().replace(/[^a-z0-9]/gi, '')
	// two pointers
	let i = 0; j = s.length - 1
	while(j >= i) {
		if (s[i] != s[j]) return false
		i++
		j--
	}
	return true
};

module.exports = isPalindrome
