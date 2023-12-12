const fun = require('./index')

test('ok', () => {
	// 1
	let nums = [7,52,2,4], expected = 596
	expect(fun(nums)).toEqual(expected)

	nums = [5,14,13,8,12], expected = 673
	expect(fun(nums)).toEqual(expected)
})
