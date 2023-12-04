/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
	let acc = new Array()

	if(head == null) {
		return 0
	} else {
		let x = head
		while(x != null) {
			acc.push(x.val)
			x = x.next
		}
		return parseInt(acc.join(''), 2)
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
	getDecimalValue: getDecimalValue,
	arrToLList: arrToLList
}
