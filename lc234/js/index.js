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
var isPalindrome = function(head) {
	let acc = new Array()

	if(head == null) {
		return false
	} else {
		let x = head
		while(x != null) {
			acc.push(x.val)
			x = x.next
		}
		if(acc.length == 1) {
			return true
		} else {
			// get mid
			let ret = true
			let mid = Math.floor(acc.length / 2)
			let n = mid

			if (acc.length % 2 !== 0) {
				n++
			}

			let x = acc.slice(0, mid)
			let y = acc.slice(n).reverse()

			//let x = acc.slice(0, mid)
			//let y = acc.slice(n).reverse()

			// if length is odd

			for(let i = 0; i < x.length; i++) {
				if (x[i] != y[i]) {
					ret = false
				}
			}
			return ret

		}
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
	isPalindrome: isPalindrome,
	arrToLList: arrToLList
}
