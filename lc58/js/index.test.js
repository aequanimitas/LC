const fun = require('./index')

test('ok', () => {
	s = "Hello World"
	expect(fun(s)).toEqual(5)

	s = "   fly me   to   the moon  "
	expect(fun(s)).toEqual(4)

	s = "luffy is still joyboy"
	expect(fun(s)).toEqual(6)
})
