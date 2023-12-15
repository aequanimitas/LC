function Node(val, next, min) {
	this.val = val
	this.next = next
	this.min = min
}

var MinStack = function() {
	this.stack = null
	this.size = 0
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
	if(this.stack === null) {
		this.stack = new Node(val, null, val)
	} else {
		this.stack = new Node(val, this.stack, Math.min(val, this.getMin()))
	}
	this.size++
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	this.stack = this.stack.next
	this.size--
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
	return this.stack.val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
	return this.stack.min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

module.exports = MinStack
