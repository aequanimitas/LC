const fun = require('./index')

test('ok', () => {
	// 1
	let matrix = [[1,2,3],[4,5,6],[7,8,9]], expected = [[1,4,7],[2,5,8],[3,6,9]]
	expect(fun(matrix)).toEqual(expected)

	matrix = [[1,2,3],[4,5,6]], expected = [[1,4],[2,5],[3,6]]
	expect(fun(matrix)).toEqual(expected)
})
