const fun = require('./index')

test('ok', () => {
	// 1
	let s = "()", expected = 1
	expect(fun(s)).toEqual(expected)

	s = "(a + ())", expected = 2
	expect(fun(s)).toEqual(expected)

	s = "(a + ()(()))", expected = 3
	expect(fun(s)).toEqual(expected)

	s = "(1+(2*3)+((8)/4))+1", expected = 3
	expect(fun(s)).toEqual(expected)
})
