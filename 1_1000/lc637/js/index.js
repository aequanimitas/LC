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
var averageOfLevels = function(root) {
    if (!root) return 0;

    // store root
    let q = [root], acc = []

    while(q.length > 0) {
        let sze = q.length, sum = 0, i = 0

        while(sze > 0) {
            sze--
            i++
            let node = q.shift()
            sum += node.val
            if (node.left != null) q.push(node.left)
            if (node.right != null) q.push(node.right)
        }

        acc.push(sum / i)
    }

    return acc
};

module.exports = {
    averageOfLevels: averageOfLevels,
    TreeNode: TreeNode
}
