/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {

    return function() {
        n++
        return n-1
    };
};
