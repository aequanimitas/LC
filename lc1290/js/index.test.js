const mod = require('./index')

test('ok', () => {
	// 1
	let head = [1,0,1], expected = 5
	expect(mod.getDecimalValue(mod.arrToLList(head.reverse()))).toEqual(expected)

	head = [0], expected = 0
	expect(mod.getDecimalValue(mod.arrToLList(head.reverse()))).toEqual(expected)

	head = [], expected = 0
	expect(mod.getDecimalValue(mod.arrToLList(head.reverse()))).toEqual(expected)
})
