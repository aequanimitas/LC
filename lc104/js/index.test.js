const {TreeNode, maxDepth} = require('./index')

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

	expect(maxDepth(t3)).toEqual(3)

	let t1 = new TreeNode(1)
	let t2 = new TreeNode(2)

	t1.right = t2
	expect(maxDepth(t1)).toEqual(2)
})
