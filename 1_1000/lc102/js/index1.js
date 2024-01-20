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
    let s = [root], acc = []

    while(s.length > 0) {
        let acc1 = []
        let x = s.length

        while(x > 0) {
            let node = s.pop()
            acc1.push(node.val)

            // push right first as its a stack
            if (node.right !== null) s.push(node.right);
            if (node.left !== null) s.push(node.left);

            x--
        }
        acc.push(acc1)
    }

    return acc
};

module.exports = {
    TreeNode: TreeNode,
    levelOrder: levelOrder
}
