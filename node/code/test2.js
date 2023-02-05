const array = Array.from({length: 100000}, (_, i) => i + 1);

const start = process.hrtime.bigint();

const max = array.reduce((a, b) => Math.max(a, b));

const diff = process.hrtime.bigint() - start;
const time = Number(diff) / 1000000000;
console.log(`Node.js 18.14: Czas wykonania:\t${time.toFixed(9)} sekund.`);