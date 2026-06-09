/**
 * Композиція функцій справа наліво.
 *
 * @param  {...Function} fns Функції
 * @returns {Function}
 */
function compose(...fns) {
    return (value) =>
        fns.reduceRight(
            (acc, fn) => fn(acc),
            value
        );
}

/**
 * Конвеєр функцій зліва направо.
 *
 * @param  {...Function} fns Функції
 * @returns {Function}
 */
function pipe(...fns) {
    return (value) =>
        fns.reduce(
            (acc, fn) => fn(acc),
            value
        );
}

/**
 * Часткове застосування аргументів.
 *
 * @param {Function} fn Функція
 * @param  {...any} args Початкові аргументи
 * @returns {Function}
 */
function partial(fn, ...args) {
    return (...rest) =>
        fn(...args, ...rest);
}

module.exports = {
    compose,
    pipe,
    partial
};