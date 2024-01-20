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
var levelOrder = function(root) {
    if (root === null) return [];

    let q = [root],
        acc = []

    while (q.length > 0) {
        let s = q.length,
            acc1 = []

        while (s > 0) {
            let node = q.pop()
            acc1.push(node.val)

            if (node.right !== null) q.push(node.right);
            if (node.left !== null) q.push(node.left);
            s--
        }

        acc.push(acc1)
    }

    return acc
};

module.exports = {
    TreeNode: TreeNode,
    levelOrder: levelOrder
}
