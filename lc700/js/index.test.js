const {TreeNode, searchBST} = require('./index')

test('ok', () => {
	root = [4,2,7,1,3]
	tree = arrToTree(root)
	val = 2
	expected = arrToTree([2,1,3])
	expect(searchBST(tree, val)).toEqual(expected)

	root = [4,2,7,1,3]
	val = 5
	expected = null
	tree = arrToTree(root)
	expect(searchBST(tree, val)).toEqual(expected)
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
