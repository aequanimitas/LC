const {TreeNode, kthSmallest} = require('./index')

test('ok', () => {
	root = [3,1,4,null,2], k = 1
	tree = arrToTree(root)
	expected = 1
	expect(kthSmallest(tree, k)).toEqual(expected)

	root = [5,3,6,2,4,null,null,1], k = 3
	tree = arrToTree(root)
	expected = 3
	expect(kthSmallest(tree, k)).toEqual(expected)
})

function arrToTree(arr) {
	if(arr === null) return null
	if(arr.length === 0) return []

	tree = new TreeNode(arr[0])
	for(let i = 1; i < arr.length; i++) {
		tree.insert(arr[i])
	}
	return tree
}
