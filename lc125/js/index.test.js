const fun = require('./index')

test('ok', () => {
	// 1
	s = "A man, a plan, a canal: Panama"
	expect(fun(s)).toEqual(true)

	s = "race a car"
	expect(fun(s)).toEqual(false)

	s = " "
	expect(fun(s)).toEqual(true)
})
