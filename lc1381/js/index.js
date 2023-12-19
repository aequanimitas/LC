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

/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
	this.max = (maxSize === undefined ? 0 : maxSize)
	this.size = 0
	this.stack = null
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
	if (this.stack === null) {
		this.stack = new ListNode(x)
		this.size++
	} else {
		if (this.size < this.max) {
			this.size++
			this.stack = new ListNode(x, this.stack)
		}
	}
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
	if (this.stack === null) {
		return -1
	} else {
		let node = this.stack
		this.stack = node.next
		this.size--
		return node.val
	}
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
	let curr = this.stack
	let ct = this.size

	while(curr) {
		if (ct <= k) {
			curr.val += val
		}
		ct--
		curr = curr.next
	}
};


/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

module.exports = CustomStack
