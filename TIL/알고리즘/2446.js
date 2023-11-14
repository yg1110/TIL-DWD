const input = `5`.trim();
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
const N = Number(input);
for(let i=0; i<N; i++) {
  console.log(" ".repeat(i) + "*".repeat(2 * N - 2 * i - 1));
}
for(let i=N-2; i>=0; i--) {
  console.log(" ".repeat(i) + "*".repeat(2 * N - i * 2 - 1))
}

