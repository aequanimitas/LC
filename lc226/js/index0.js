/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
	if (!root) return null;

	// store root
	let stack = [root]

	while(stack.length > 0) {
		let node = stack.pop()
		// swap nodes
		// Remember: L->R->N
		// get left node first and store it, we need to swap
		let temp = node.left
		node.left = node.right
		// then store the right node on the left node
		node.left = node.right
		// finally store the old left node to the right node
		node.right = temp

		// Note that the positions are already inverted here and we'll start handling the next child nodes
		// using the L -> R -> N direction
		// left push first,
		if(node.left) stack.push(node.left);
		// right
		if(node.right) stack.push(node.right);
	}

	return root
};

module.exports = {
	invertTree: invertTree,
	TreeNode: TreeNode
}
