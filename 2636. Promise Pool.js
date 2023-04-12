/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
    let idx = n

    const executeNextPromise = () => {
        if (idx < functions.length) {
            return functions[idx++]().then(executeNextPromise)
        }
    }

    return Promise.all(functions.slice(0, n).map(promise => promise().then(executeNextPromise)))
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
