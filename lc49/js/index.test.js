const fun = require('./index')

test('ok', () => {
	// 1
	let	strs = ["eat","tea","tan","ate","nat","bat"]
	expected = [["bat"],["nat","tan"],["ate","eat","tea"]]
	expect(fun(strs)).toEqual(expected)

	strs = [""]
	expected = [[""]]
	expect(fun(strs)).toEqual(expected)

	strs = ["a"]
	expected = [["a"]]
	expect(fun(strs)).toEqual(expected)

	strs = []
	expected = []
	expect(fun(strs)).toEqual(expected)
})
