const input = `5`.trim();
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
const N = Number(input);
for(let i=1; i<=N; i++) {
  console.log(" ".repeat(N - i) + "*".repeat(i + i - 1))
}
for(let i=1; i<N; i++) {
  console.log(" ".repeat(i) + "*".repeat(2 * N - (i + i + 1)))
}