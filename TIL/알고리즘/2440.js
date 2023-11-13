const input = `5`.trim();
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
const N = Number(input);
for(let i=0; i<N; i++) {
  console.log("*".repeat(N - i))
}