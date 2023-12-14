const fun = require('./index')

test('ok', () => {
	// 1
	nums = [1,3,4,2,2], expected = 2
	expect(fun(nums)).toEqual(expected)

	nums = [3,1,3,4,2], expected = 3
	expect(fun(nums)).toEqual(expected)
})
