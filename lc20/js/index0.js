/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
	let stack = []

	for(let i = 0; i < s.length; i++) {
		switch(s.charAt(i)) {
			case '(':
			case '[':
			case '{':
				stack.push(s.charAt(i))
				break;

			case ')':
				if(stack.pop() !== '(') {
					return false
				}
				break;

			case '}':
				if(stack.pop() !== '{') {
					return false
				}
				break;

			case ']':
				if(stack.pop() !== '[') {
					return false
				}
				break;

			default:
				null
		}
	}
	return stack.length == 0
};

module.exports = isValid
