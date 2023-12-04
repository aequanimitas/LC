const mod = require('./index')

test('ok', () => {
	// 1
	let head = [1,2,6,3,4,5,6], val = 6
	head = mod.arrToLList(head.reverse())
	let expected = mod.arrToLList([1,2,3,4,5].reverse())
	expect(mod.removeElements(head, val)).toEqual(expected)

	head = mod.arrToLList([].reverse())
	val = 1
	expected = mod.arrToLList([].reverse())
	expect(mod.removeElements(head, val)).toEqual(expected)

	head = mod.arrToLList([7,7,7,7])
	val = 7
	expected = mod.arrToLList([].reverse())
	expect(mod.removeElements(head, val)).toEqual(expected)

	head = mod.arrToLList([1])
	val = 2
	expected = mod.arrToLList([1].reverse())
	expect(mod.removeElements(head, val)).toEqual(expected)

	head = mod.arrToLList([1,1])
	val = 2
	expected = mod.arrToLList([1,1].reverse())
	expect(mod.removeElements(head, val)).toEqual(expected)
})
