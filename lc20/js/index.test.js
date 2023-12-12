const fun = require('./index')

test('ok', () => {
	// 1
	let s = "()"
	expect(fun(s)).toEqual(true)

	s = "(]"
	expect(fun(s)).toEqual(false)

	s = "()[]{}"
	expect(fun(s)).toEqual(true)

	s = "["
	expect(fun(s)).toEqual(false)
})
