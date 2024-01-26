const fun = require('./index')

test('ok', () => {
	// 1
	let nums = [1,2,1]
	expect(fun(nums)).toEqual([1,2,1,1,2,1])
	// 2
	nums = [1,3,2,1]
	expect(fun(nums)).toEqual([1,3,2,1,1,3,2,1])
})

