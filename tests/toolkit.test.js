const {
    compose,
    pipe,
    partial
} = require("../src/toolkit");

describe("Functional Toolkit", () => {

    test("compose works correctly", () => {

        const add1 = x => x + 1;
        const multiply2 = x => x * 2;

        const fn =
            compose(
                multiply2,
                add1
            );

        expect(fn(5))
            .toBe(12);
    });

    test("pipe works correctly", () => {

        const add1 = x => x + 1;
        const multiply2 = x => x * 2;

        const fn =
            pipe(
                add1,
                multiply2
            );

        expect(fn(5))
            .toBe(12);
    });

    test("partial works correctly", () => {

        const multiply =
            (a, b) =>
                a * b;

        const double =
            partial(
                multiply,
                2
            );

        expect(
            double(10)
        ).toBe(20);
    });

});