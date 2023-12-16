const fun = require('./index')

test('ok', () => {
	nums = [0,2,1,5,3,4], expected = [0,1,2,4,5,3]
	expect(fun(nums)).toEqual(expected)

	nums = [5,0,1,2,3,4], expected = [4,5,0,1,2,3]
	expect(fun(nums)).toEqual(expected)
})
