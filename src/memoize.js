/**
 * Мемоізація результатів функції.
 *
 * @param {Function} fn
 * @returns {Function}
 */
function memoize(fn) {

    const cache = {};

    return function (arg) {

        if (cache[arg] !== undefined) {
            return cache[arg];
        }

        const result = fn(arg);

        cache[arg] = result;

        return result;
    };
}

module.exports = {
    memoize
};