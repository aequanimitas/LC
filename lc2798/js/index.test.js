const fun = require('./index')

test('ok', () => {
	// 1
	let hours = [0,1,2,3,4], target = 2
	expect(fun(hours, target)).toEqual(3)

	hours = [5,1,4,2,2], target = 6
	expect(fun(hours, target)).toEqual(0)
})

