const mod = require('./index')

test('ok', () => {
	// 1
	let head = [1,2,3,4,5], expected = false
	expect(mod.isPalindrome(mod.arrToLList(head.reverse()))).toEqual(expected)

	head = [], expected = false
	expect(mod.isPalindrome(mod.arrToLList(head.reverse()))).toEqual(expected)

	head = [1,1], expected = true
	expect(mod.isPalindrome(mod.arrToLList(head.reverse()))).toEqual(expected)

	head = [1,2,2], expected = false
	expect(mod.isPalindrome(mod.arrToLList(head.reverse()))).toEqual(expected)

	head = [1,2,1], expected = true
	expect(mod.isPalindrome(mod.arrToLList(head.reverse()))).toEqual(expected)

	head = [1,1,2,1], expected = false
	expect(mod.isPalindrome(mod.arrToLList(head.reverse()))).toEqual(expected)
})
