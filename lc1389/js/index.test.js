const fun = require('./index')

test('ok', () => {
	// 1
	let	nums = [0,1,2,3,4], index = [0,1,2,2,1], expected = [0,4,1,3,2]
	expect(fun(nums, index)).toEqual(expected)
})
