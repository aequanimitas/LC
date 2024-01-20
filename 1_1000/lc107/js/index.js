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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) return [];

    // store root
    let q = [root], acc = []

    while(q.length > 0) {
	let sze = q.length, acc1 = []

	while(sze > 0) {
	    sze--
	    let node = q.shift()

	    acc1.push(node.val)

	    if (node.left != null) q.push(node.left)
	    if (node.right != null) q.push(node.right)
	}

	acc.push(acc1)
    }

    return acc.reverse()
};

module.exports = {
    levelOrderBottom: levelOrderBottom,
    TreeNode: TreeNode
}
