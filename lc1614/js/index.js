/**
 * @param {string} s
 * @return {boolean}
 */

var maxDepth = function(s) {
	let stack = []
	let max = 0

	for(let i = 0; i < s.length; i++) {
		switch(s.charAt(i)) {
			case '(':
				stack.push(s.charAt(i))
				break;

			case ')':
				stack.pop()

			default:
				null
		}
		max = Math.max(stack.length, max)
	}

	return max
};

module.exports = maxDepth
