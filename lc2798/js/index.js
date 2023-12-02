/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
	// FILTER
	let counter = 0
	for(const hour of hours) {
		if (hour >= target) {
			counter++
		}
	}
	return counter
};

module.exports = numberOfEmployeesWhoMetTarget
