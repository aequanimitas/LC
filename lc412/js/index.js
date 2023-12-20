/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
	let acc = [], i = 1

	while(i <= n) {
		if ((i % 3 === 0) && (i % 5 === 0)) {
			acc.push("FizzBuzz")
		} else if (i % 3 === 0) {
			acc.push("Fizz")
		} else if (i % 5 === 0) {
			acc.push("Buzz")
		} else {
			acc.push(`${i}`)
		}
		i++
	}
	return acc
};

module.exports = fizzBuzz
