const start = process.hrtime.bigint();

const length = 100000;
let string = "";
for (let i = 0; i < length; i++) {
    string += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const uppercase = string.toUpperCase();

const diff = process.hrtime.bigint() - start;
const time = Number(diff) / 1000000000;
console.log(`Node.js 18.14: Czas wykonania:\t${time.toFixed(9)} sekund.`);