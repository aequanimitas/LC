/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
	return Math.max(...accounts.map((account) => account.reduce((acc, v) => { return v + acc }, 0)))
};

module.exports = maximumWealth
