const mod = require('./index')

test('ok', () => {
	// 1
	let head = [1,2,3,4,5], expected = [3,4,5]
	expect(mod.middleNode(mod.arrToLList(head.reverse()))).toEqual(expected)

	head = [1,2,3,4,5,6], expected = [4,5,6]
	expect(mod.middleNode(mod.arrToLList(head.reverse()))).toEqual(expected)
})
