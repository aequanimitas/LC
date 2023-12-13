/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/*
 * Reverse in place
 */
var reverseList = function(head) {
	let curr = head, next = null, prev = null;
	while(curr) {
		// 1. to track the linked list until it ends, point here
		next = curr.next
		// 2. for current.next, point it to the previous element which is an accumulator
		//    of all previous `curr` nodes and defaults to `null` if its the `head`
		curr.next = prev
		// 3. now collect, on next iteration, this will point to the old node
		prev = curr
		// 4. point to `next` which is an accumulator for the remaining nodes
		curr = next
	}

	return prev
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
	reverseList:	reverseList,
	arrToLList: arrToLList,
	llistToArr: llistToArr
}
