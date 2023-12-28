const fun = require('./index')
const util = require('util')

test('ok', () => {
	// 1
	let f = fun(0)
	f()
	console.log(util.inspect(f(), {showHidden: false, depth: null, colors: true}))
})
