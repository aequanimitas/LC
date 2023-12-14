const fun = require('./index')

test('ok', () => {
	// 1
	let s = new fun()
	s.push(-2)
	s.push(0)
	s.push(-3)
	expect(s.getMin()).toEqual(-3)
	s.pop()
	expect(s.top()).toEqual(0)
	expect(s.getMin()).toEqual(-2)
})
