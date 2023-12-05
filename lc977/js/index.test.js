const fun = require('./index')

test('ok', () => {
	// 1
	let nums = [-4,-1,0,3,10], expected = [0,1,9,16,100]
	expect(fun(nums)).toEqual(expected)

	nums = [-7,-3,2,3,11], expected = [4,9,9,49,121]
	expect(fun(nums)).toEqual(expected)
})
