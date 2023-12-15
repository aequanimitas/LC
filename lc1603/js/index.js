/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
	this.slots = new Array(3).fill(0)
	this.slots[0] = big
	this.slots[1] = medium
	this.slots[2] = small
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
	let v = this.slots[carType - 1]
	if(v > 0) {
		this.slots[carType - 1] = v - 1
		return true
	} else {
		return false
	}
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

module.exports = ParkingSystem
