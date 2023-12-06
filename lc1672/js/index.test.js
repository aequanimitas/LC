const fun = require('./index')

test('ok', () => {
	// 1
	let accounts = [[1,2,3],[3,2,1]], expected = 6
	expect(fun(accounts)).toEqual(expected)

	accounts = accounts = [[1,5],[7,3],[3,5]], expected = 10
	expect(fun(accounts)).toEqual(expected)

	accounts = [[2,8,7],[7,1,3],[1,9,5]], expected = 17
	expect(fun(accounts)).toEqual(expected)
})
