const fun = require('./index')
const util = require('util')

test('ok', () => {
	// 1
	let s = new fun(3)
	s.push(1)
	s.push(2)
	s.pop()
	s.push(2)
	s.push(3)
	s.push(4)
	s.increment(5, 100)
	console.log(util.inspect(s, {showHidden: false, depth: null, colors: true}))
	s.increment(2, 100)
	s.pop()
	s.pop()
	s.pop()
	console.log(s.pop())
	console.log(util.inspect(s, {showHidden: false, depth: null, colors: true}))
})
