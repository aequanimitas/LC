const fun = require('./index')

test('ok', () => {
	// 1
	let s = new fun()
	s.add(1)
	s.add(2)
	expect(s.contains(1)).toEqual(true)
	s.add(2)
	expect(s.contains(2)).toEqual(true)
	s.remove(2)
	expect(s.contains(2)).toEqual(false)
})
