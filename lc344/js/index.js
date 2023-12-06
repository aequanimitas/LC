/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
	let e = s.length - 1
	let mid = Math.floor(e / 2)
	for(let i = 0; i <= mid; i++) {
		let x = s[e]
		s[e] = s[i]
		s[i] = x
		e--
	}

};

module.exports = reverseString
