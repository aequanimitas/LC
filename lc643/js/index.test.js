const fun = require('./index')

test('ok', () => {
	// 1
	nums = [1,12,-5,-6,50,3], k = 4, expected = 12.75
	expect(fun(nums, k)).toEqual(expected)

	nums = [5], k = 1, expected = 5.00
	expect(fun(nums, k)).toEqual(expected)

	nums = [-1], k = 1, expected = -1.00
	expect(fun(nums, k)).toEqual(expected)
})
