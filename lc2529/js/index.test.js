const fun = require('./index')

test('ok', () => {
	nums = [-2,-1,-1,1,2,3], expected = 3
	expect(fun(nums)).toEqual(expected)

	nums = [-3,-2,-1,0,0,1,2]
	expect(fun(nums)).toEqual(expected)

	nums = [5,20,66,1314], expected = 4
	expect(fun(nums)).toEqual(expected)
})
