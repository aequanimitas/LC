/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
	if (!root) return 0;

	// store root
	let stack = [{node: root, depth: 1}], depp = -Infinity


	while(stack.length > 0) {
		// Remember: L->R->N
		let {node: node, depth: depth} = stack.pop()

		depp = Math.max(depth, depp)

		if(node.left) stack.push({node: node.left, depth: depth + 1})
		if(node.right) stack.push({node: node.right, depth: depth + 1})
	}

	return depp
};

module.exports = {
	maxDepth: maxDepth,
	TreeNode: TreeNode
}
