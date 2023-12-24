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

TreeNode.prototype.insert = function(val) {
		if(val < this.val) {
			if(this.left === null) {
				if (val === null) return
				this.left = new TreeNode(val)
			} else {
				this.left.insert(val)
			}
		} else if (val > this.val) {
			if(this.right === null) {
				if (val === null) return
				this.right = new TreeNode(val)
			} else {
				this.right.insert(val)
			}
		} else {
			null
		}
}

var searchBST = function(root, val) {
	let stack = [], curr = root

	if (curr === null) return acc

	while(curr || stack.length) {
		while(curr) {
			stack.push(curr)
			curr = curr.left
		}

		let n = stack.pop()
		if (n.val == val) {
			return n
		} else if (n.val > val) {
			return null
		} else {
			null
		}
		curr = n.right
	}
	return null
};

module.exports = {
	searchBST: searchBST,
	TreeNode: TreeNode
}
