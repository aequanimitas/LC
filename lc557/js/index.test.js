const fun = require('./index')

test('ok', () => {
	// 1
	s = "Let's take LeetCode contest", expected = "s'teL ekat edoCteeL tsetnoc"
	expect(fun(s)).toEqual(expected)

	s = "Mr Ding", expected = "rM gniD"
	expect(fun(s)).toEqual(expected)
})
