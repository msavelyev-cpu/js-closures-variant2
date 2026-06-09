/**
 * Створює банківський рахунок з приватним балансом.
 *
 * @param {string} owner Власник рахунку
 * @param {number} initialBalance Початковий баланс
 * @returns {Object} API рахунку
 */
function createAccount(owner, initialBalance = 0) {
    let balance = initialBalance;
    let transactionId = 1;

    const transactions = [];

    function addTransaction(type, amount) {
        transactions.push({
            id: transactionId++,
            type,
            amount,
            timestamp: new Date().toISOString()
        });
    }

    return {
        owner,

        deposit(amount) {
            if (amount <= 0) {
                throw new Error(
                    "Сума поповнення повинна бути більшою за 0"
                );
            }

            balance += amount;
            addTransaction("deposit", amount);

            return balance;
        },

        withdraw(amount) {
            if (amount <= 0) {
                throw new Error(
                    "Сума зняття повинна бути більшою за 0"
                );
            }

            if (amount > balance) {
                throw new Error(
                    "Недостатньо коштів"
                );
            }

            balance -= amount;
            addTransaction("withdraw", amount);

            return balance;
        },

        getBalance() {
            return balance;
        },

        getTransactionHistory() {
            return [...transactions];
        }
    };
}

module.exports = {
    createAccount
};