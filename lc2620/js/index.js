/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let x = n
    return function() {
        return x++
    };
};


/**
 * argumentsLength(1, 2, 3); // 3
 */

module.exports = createCounter
