/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	if (s.length <= 1) return false
	let stack = []
	let open = new Map([
		['{', '}'],
		['(', ')'],
		['[', ']']
	])

	let close = new Map([
		['}', '{'],
		[')', '('],
		[']', '[']
	])

	for(let i = 0; i < s.length; i++) {
		if (open.has(s.charAt(i))) {
			stack.push(s.charAt(i))
		} else {
			if (close.get(s.charAt(i)) === stack.pop()) {
				continue;
			} else {
				return false;
			}
		}
	}

	return stack.length == 0;
};

module.exports = isValid
