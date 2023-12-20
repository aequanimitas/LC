const fun = require('./index')

test('ok', () => {
	// 1
	n = 3, expected = ["1","2","Fizz"]
	expect(fun(n)).toEqual(expected)

	n = 5, expected = ["1","2","Fizz","4","Buzz"]
	expect(fun(n)).toEqual(expected)

	n = 15, expected = ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
	expect(fun(n)).toEqual(expected)
})
