const mod = require('./index')

test('ok', () => {
	// 1
	let head = mod.arrToLList([0,3,1,0,4,5,2,0].reverse())
	let expected = mod.arrToLList([4,11].reverse())
	expect(mod.mergeNodes(head)).toEqual(expected)

	head = mod.arrToLList([0,1,0,3,0,2,2,0].reverse())
	expected = mod.arrToLList([1,3,4].reverse())
	expect(mod.mergeNodes(head)).toEqual(expected)
})
