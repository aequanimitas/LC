/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeNodes = function(head) {
	let curr = head
	let dummy = new ListNode()
	let h = dummy
	let tail = dummy
	let acc = 0

	while(curr) {
		if (curr.val == 0) {
			if(acc != 0) {
				let n = new ListNode(acc)
				tail.next = n
				tail = n
				acc = 0
			}
		} else {
			acc += curr.val
		}
		curr = curr.next
	}

	return h.next
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
	mergeNodes:	mergeNodes,
	arrToLList: arrToLList,
	llistToArr: llistToArr
}
