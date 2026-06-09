const { createAccount } = require("../src/bank");

describe("Bank Account", () => {

    test("deposit increases balance", () => {
        const account = createAccount("Test", 1000);

        account.deposit(500);

        expect(
            account.getBalance()
        ).toBe(1500);
    });

    test("withdraw decreases balance", () => {
        const account = createAccount("Test", 1000);

        account.withdraw(300);

        expect(
            account.getBalance()
        ).toBe(700);
    });

    test("cannot withdraw more than balance", () => {
        const account = createAccount("Test", 1000);

        expect(() =>
            account.withdraw(2000)
        ).toThrow();
    });

});