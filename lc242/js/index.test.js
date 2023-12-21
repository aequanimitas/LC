const fun = require('./index')

test('ok', () => {
	// 1
	s = "anagram", t = "nagaram"
	expect(fun(s, t)).toEqual(true)

	s = "rat", t = "car"
	expect(fun(s, t)).toEqual(false)
})
