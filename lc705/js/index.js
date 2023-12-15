var MyHashSet = function() {
	this.set = []
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
	if (this.set[key] === undefined) {
		this.set[key] = 0
	}
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
	if (this.set[key] !== undefined) {
		this.set[key] = undefined
	}
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
	return this.set[key] !== undefined
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

module.exports = MyHashSet
