/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	if (s.length != t.length) return false;
	let s2 = [], t2 = []

	for(let i = 0; i < s.length; i++) {
		s2.push(s.charCodeAt([i]))
	}

	for(let i = 0; i < t.length; i++) {
		t2.push(t.charCodeAt(i))
	}

	s2 = s2.sort((a, b) => a - b).join(' ')
	t2 = t2.sort((a, b) => a - b).join(' ')

	return s2 === t2
};

module.exports = isAnagram
