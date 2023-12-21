const fun = require('./index')

test('ok', () => {
	// 1
	s = "codeleet", indices = [4,5,6,7,0,2,1,3], expected = "leetcode"
	expect(fun(s, indices)).toEqual(expected)

	s = "abc", indices = [0,1,2], expected = "abc"
	expect(fun(s, indices)).toEqual(expected)
})
