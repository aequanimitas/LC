const {TreeNode, levelOrder} = require('./index')

test('ok', () => {
	let t3 = new TreeNode(3)
	let t7 = new TreeNode(7)
	let t9 = new TreeNode(9)
	let t15 = new TreeNode(15)
	let t20 = new TreeNode(20)

	// ROOT
	t3.left = t9
	t3.right = t20

	t20.left = t15
	t20.right = t7

	expected = [[3], [9,20], [15, 7]]
	expect(levelOrder(t3)).toEqual(expected)

	expect(levelOrder(null)).toEqual([])

	t3 = new TreeNode(1)
	expect(levelOrder(t3)).toEqual([[1]])
})
