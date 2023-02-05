const start = process.hrtime.bigint();

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const result = factorial(20);

const diff = process.hrtime.bigint() - start;
const time = Number(diff) / 1000000000;
console.log(`Node.js 18.14: Czas wykonania:\t${time.toFixed(9)} sekund.`);