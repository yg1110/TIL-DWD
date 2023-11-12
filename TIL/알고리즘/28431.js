// const input = `0
// 0
// 0
// 0
// 0`.trim().split('\n');
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function solution() {
  const socks = [];
  input.forEach(item => {
    socks[item] = socks[item] ? socks[item] + 1 : 1;
  })
  return socks.findIndex((item) => item % 2 === 1);
}
console.log(solution());
