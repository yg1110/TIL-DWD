const input = `10`.trim();
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()

const N = Number(input);
const memo = [0, 1];
for(let i=2; i<=N; i++) {
  memo.push(memo[i - 2] + memo[i - 1]);
}
console.log(memo[N]);
