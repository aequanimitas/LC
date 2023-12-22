const fun = require('./index')

test('ok', () => {
	arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
	expect(fun(arr, k, threshold)).toEqual(3)

	arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
	expect(fun(arr, k, threshold)).toEqual(6)
})
