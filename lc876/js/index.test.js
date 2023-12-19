const mod = require('./index')

test('ok', () => {
	// 1
	let head = [1,2,3,4,5], expected = [3,4,5]
	head = mod.arrToLList(head.reverse())
	console.log(mod.middleNode(mod.arrToLList(head.reverse())))
	expect(mod.middleNode(mod.arrToLList(head.reverse()))).toEqual(expected)
})
