const { createAccount } = require("./bank");
const {
    compose,
    pipe,
    partial
} = require("./toolkit");

const { memoize } =
    require("./memoize");

const { curry } =
    require("./curry");

console.log("\n=== БАНКІВСЬКА СИСТЕМА ===");

const account =
    createAccount(
        "Михайло",
        1000
    );

account.deposit(500);
account.withdraw(200);

console.log(
    "Баланс:",
    account.getBalance()
);

console.table(
    account.getTransactionHistory()
);

console.log(
    "\n=== COMPOSE ==="
);

const add1 =
    x => x + 1;

const multiply2 =
    x => x * 2;

const composed =
    compose(
        multiply2,
        add1
    );

console.log(
    composed(5)
);

console.log(
    "\n=== PIPE ==="
);

const piped =
    pipe(
        add1,
        multiply2
    );

console.log(
    piped(5)
);

console.log(
    "\n=== PARTIAL ==="
);

function multiply(a, b) {
    return a * b;
}

const double =
    partial(
        multiply,
        2
    );

console.log(
    double(10)
);

console.log(
    "\n=== MEMOIZE ==="
);

const square =
    memoize(
        n => {
            console.log(
                "Обчислення..."
            );
            return n * n;
        }
    );

console.log(square(5));
console.log(square(5));

console.log(
    "\n=== CURRY ==="
);

const add =
    curry(
        (a, b) =>
            a + b
    );

console.log(
    add(5)(10)
);