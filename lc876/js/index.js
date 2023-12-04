/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var middleNode = function(head) {
	let acc = new Array()

	if(head == null) {
		return arrToLList(acc.reverse())
	} else {
		let x = head
		while(x != null) {
			acc.push(x.val)
			x = x.next
		}
		// get mid
		return arrToLList(acc.slice(Math.floor(acc.length / 2)).reverse())
	}
};

function arrToLList(arr) {
	return arr.reduce((acc, c) => {
		if(acc === null) {
			acc = new ListNode(c)
		} else {
			acc = new ListNode(c, acc)
		}
		return acc
	}, null)
}

module.exports = {
	middleNode: middleNode,
	arrToLList: arrToLList
}
