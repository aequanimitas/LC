const fun = require('./index')

test('ok', () => {
	nums = [-1,0,3,5,9,12], target = 3, expected = 2
	expect(fun(nums, target)).toEqual(expected)

	nums = [-1,0,3,5,9,12], target = 9, expected = 4
	expect(fun(nums, target)).toEqual(expected)

	nums = [-1,0,3,5,9,12], target = 2, expected = -1
	expect(fun(nums, target)).toEqual(expected)

	nums = [], target = 2, expected = -1
	expect(fun(nums, target)).toEqual(expected)

	nums = [5], target = 5, expected = 0
	expect(fun(nums, target)).toEqual(expected)

	nums = [2,5], target = 5, expected = 1
	expect(fun(nums, target)).toEqual(expected)
})//
