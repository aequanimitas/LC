const fun = require('./index')

test('ok', () => {
	// 1
	let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
	expect(fun(sentences)).toEqual(6)

	// 2
	sentences = ["please wait", "continue to fight", "continue to win"]
	expect(fun(sentences)).toEqual(3)
})

