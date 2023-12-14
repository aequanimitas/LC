const fun = require('./index')

test('ok', () => {
	// 1
	nums = [0,1,2,2,4,4,1], expected = 2
	expect(fun(nums)).toEqual(expected)

	nums = [4,4,4,9,2,4], expected = 4
	expect(fun(nums)).toEqual(expected)

	nums = [29,47,21,41,13,37,25,7], expected = -1
	expect(fun(nums)).toEqual(expected)
})
