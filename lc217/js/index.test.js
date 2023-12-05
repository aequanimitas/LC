const fun = require('./index')

test('ok', () => {
	// 1
	let nums = [1,2,3,1]
	expect(fun(nums)).toEqual(true)

	nums = [1,2,3,4]
	expect(fun(nums)).toEqual(false)

	nums = [1,1,1,3,3,4,3,2,4,2]
	expect(fun(nums)).toEqual(true)
})
