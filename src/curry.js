/**
 * Каррінг для функції з двома аргументами.
 *
 * @param {Function} fn
 * @returns {Function}
 */
function curry(fn) {
    return (a) =>
        (b) =>
            fn(a, b);
}

module.exports = {
    curry
};