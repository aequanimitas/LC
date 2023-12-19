/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var deleteDuplicates = function(head) {
	let curr = head
	while(curr != null && curr.next != null) {
		if (curr.val === curr.next.val) {
			curr.next = curr.next.next
		} else {
			curr = curr.next
		}
	}
	return head
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

function llistToArr(l) {
	let acc = []
	if(l === null) {
		return acc
	} else {
		while(l.next) {
			acc.push(l.value)
		}
	}
	return acc
}

module.exports = {
	node: ListNode,
	deleteDuplicates:	deleteDuplicates,
	arrToLList: arrToLList,
	llistToArr: llistToArr
}
