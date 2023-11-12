const input = `5
Mickey 1 10 1991
Alice 30 12 1990
Tom 15 8 1993
Jerry 18 9 1990
Garfield 20 9 1990`.trim().split('\n');
// const input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

function solution() {
  const T = Number(input.shift());
  const addMonthDates = [0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  const students = [];
  for(let i=0; i<T; i++) {
    const [name, day, month, year] = input[i].split(" ");
    const age = (Number(year) * 365) + addMonthDates[Number(month)] + Number(day);
    students.push({ name, age })
  }
  students.sort((a, b) => b.age - a.age);
  console.log(students[0].name);
  console.log(students[students.length - 1].name)
}
solution();
