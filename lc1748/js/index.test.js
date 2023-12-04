const fun = require('./index')

test('ok', () => {
	// 1
	let	nums = [1,2,3,2]
	expect(fun(nums)).toEqual(4)

	nums = [1,1,1,1,1]
	expect(fun(nums)).toEqual(0)

	nums = [1,2,3,4,5]
	expect(fun(nums)).toEqual(15)
})

