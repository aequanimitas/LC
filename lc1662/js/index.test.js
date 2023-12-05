const fun = require('./index')

test('ok', () => {
	// 1
	let word1 = ["ab", "c"], word2 = ["a", "bc"]
	expect(fun(word1, word2)).toBe(true)

	word1 = ["a", "cb"], word2 = ["ab", "c"]
	expect(fun(word1, word2)).toBe(false)

	word1 = ["abc", "d", "defg"], word2 = ["abcddefg"]
	expect(fun(word1, word2)).toBe(true)
})
