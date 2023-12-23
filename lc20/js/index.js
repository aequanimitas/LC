/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	let stack = []

	let o = new Map([
		['(', ')'],
		['[', ']'],
		['{', '}']
	])

	let c = new Map([
		[')', '('],
		[']', '['],
		['}', '{']
	])

	for (let i = 0; i < s.length; i++) {
		if (o.has(s.charAt(i))) {
			stack.push(s.charAt(i))
		} else {
			if (c.get(s.charAt(i)) !== stack.pop()) {
				return false
			}
		}
	}

	return stack.length === 0
};

module.exports = isValid
