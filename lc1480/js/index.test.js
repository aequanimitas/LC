const fun = require('./index')

test('ok', () => {
	// 1
	let nums = [1,2,3,4]
	expect(fun(nums)).toEqual([1,3,6,10])
	// 2
	nums = [1,1,1,1,1]
	expect(fun(nums)).toEqual([1,2,3,4,5])

	nums = [3,1,2,10,1]
	expect(fun(nums)).toEqual([3,4,6,16,17])
})

