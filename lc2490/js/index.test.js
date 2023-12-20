const fun = require('./index')

test('ok', () => {
	sentence = "leetcode exercises sound delightful"
	expect(fun(sentence)).toEqual(true)

	sentence = "eetcode"
	expect(fun(sentence)).toEqual(true)

	sentence = "Leetcode is cool"
	expect(fun(sentence)).toEqual(false)

	sentence = "Leetcode eisc cool"
	expect(fun(sentence)).toEqual(false)
})
