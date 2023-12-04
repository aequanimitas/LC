const fun = require('./index')

test('ok', () => {
	// 1
	let grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
	expect(fun(grid)).toEqual(8)

	grid = [[3,2],[1,0]]
	expect(fun(grid)).toEqual(0)
})

