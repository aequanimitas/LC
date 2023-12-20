const fun = require('./index')

test('ok', () => {
	nums = [1,3,5,6], target = 5, expected = 2
	expect(fun(nums, target)).toEqual(expected)

	nums = [1,3,5,6], target = 2, expected = 1
	expect(fun(nums, target)).toEqual(expected)

	nums = [1,3,5,6], target = 7, expected = 4
	expect(fun(nums, target)).toEqual(expected)
})
