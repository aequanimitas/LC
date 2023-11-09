const fun = require('./index')

test('ok', () => {
	let lst = [2,7,11,15]
  let v = 9
	expect(fun(lst, v)).toEqual([0,1])

	lst = []
  v = 9
	expect(fun(lst, v)).toEqual([])

	lst = [3,2,4]
  v = 6
	expect(fun(lst, v)).toEqual([1,2])

	lst = [3,3]
  v = 6
	expect(fun(lst, v)).toEqual([0, 1])
})
