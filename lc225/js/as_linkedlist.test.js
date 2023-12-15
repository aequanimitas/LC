const fun = require('./as_linkedlist.js')

test('ok', () => {
	// 1
	let s = new fun()
	s.push(1)
	s.push(2)
	expect(s.top()).toEqual(2)
	expect(s.pop()).toEqual(2)
	expect(s.empty()).toEqual(false)
})
