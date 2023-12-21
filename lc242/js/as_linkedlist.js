function Node(val, next, min) {
	this.val = val
	this.next = next
}

var MyStack = function() {
	this.stack = null
	this.size = 0
};

/**
 * @param {number} val
 * @return {void}
 */
MyStack.prototype.push = function(val) {
	if(this.stack === null) {
		this.stack = new Node(val, null, val)
	} else {
		this.stack = new Node(val, this.stack)
	}
	this.size++
};

/**
 * @return {void}
 */
MyStack.prototype.pop = function() {
	let v = this.stack.val
	this.stack = this.stack.next
	this.size--
	return v
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
	return this.stack.val
};

/**
 * @return {number}
 */
MyStack.prototype.empty = function() {
	return this.size == 0
};

module.exports = MyStack
