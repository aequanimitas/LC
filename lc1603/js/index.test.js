const fun = require('./index')

test('ok', () => {
	// 1
	s = new fun(1, 1, 0)
	expect(s.addCar(1)).toEqual(true)
	//expect(s.addCar(1)).toEqual(false)
	//expect(s.addCar(2)).toEqual(true)
})
