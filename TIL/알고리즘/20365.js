const input = `8
BBRBRBBR`.trim().split('\n');
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function solution() {
  const T = Number(input.shift());
  const problem = input.shift();
  const bList = problem.split("B")
    .filter(item => item !== '')
    .map(item => item.length);
  const rList = problem.split("R")
    .filter(item => item !== '')
    .map(item => item.length);
  return bList.length > rList.length ? rList.length + 1 : bList.length + 1;
}
console.log(solution());
