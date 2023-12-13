const mod = require('./index')

test('ok', () => {
	// 1
	let head = [1,2,3,4,5]
	let expected = mod.arrToLList(head)

	head = mod.arrToLList(head.reverse())
	expect(mod.reverseList(head)).toEqual(expected)

	head = mod.arrToLList([].reverse())
	expected = mod.arrToLList([].reverse())
	expect(mod.reverseList(head)).toEqual(expected)
})
