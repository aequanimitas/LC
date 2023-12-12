const fun = require('./index')

test('ok', () => {
	// 1
	let matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8, expected = 13
	expect(fun(matrix, k)).toEqual(expected)

	matrix = [[-5]], k = 1, expected = -5
	expect(fun(matrix, k)).toEqual(expected)

	matrix = [[1,2], [1,3]], k = 2, expected = 1
	expect(fun(matrix, k)).toEqual(expected)
})
