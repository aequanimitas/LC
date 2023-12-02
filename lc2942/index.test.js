const fun = require('./index')

test('ok', () => {
	// 1
	let words = ["leet","code"]
	let x = "e"
	expect(fun(words, x)).toEqual([0,1])
	// 2
	words = ["abc","bcd","aaaa","cbc"]
	x = "a"
	expect(fun(words, x)).toEqual([0,2])

	words = ["abc","bcd","aaaa","cbc"]
	x = "z"
	expect(fun(words, x)).toEqual([])
})

