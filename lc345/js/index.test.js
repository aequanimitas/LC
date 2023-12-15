const fun = require('./index')

test('ok', () => {
	// 1
	s = 'hello', expected = 'holle'
	expect(fun(s)).toEqual(expected)

	s = "leetcode", expected = "leotcede"
	expect(fun(s)).toEqual(expected)
})
