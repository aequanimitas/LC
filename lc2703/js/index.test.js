const fun = require('./index')

test('ok', () => {
	// 1
	num = 38
	expect(fun(num)).toEqual(2)

	num = 0
	expect(fun(num)).toEqual(0)
})
