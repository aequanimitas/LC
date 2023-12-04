/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
	let acc = new Array()
	let lNode = new ListNode
	if(head == null) {
		return arrToLList(acc.reverse())
	} else if(!head.next) {
		head.val !== val ? acc.push(head.val) : null
	} else {
		let x = head
		acc = llistRecurse(head, acc, val)
	}

	return arrToLList(acc.reverse())
};

function llistRecurse(list, acc, target) {
	if(list.next) {
		if(list.val !== target) {
			acc.push(list.val)
		}
		return llistRecurse(list.next, acc, target)
	} else {
		if(list.val !== target) {
			acc.push(list.val)
		}
		return acc
	}
}

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
	removeElements:	removeElements,
	arrToLList: arrToLList,
	llistToArr: llistToArr
}
