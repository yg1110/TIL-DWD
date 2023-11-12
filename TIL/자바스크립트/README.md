## forEach 안에서의 리턴은 함수 자체의 리턴이 아니라 콜백 함수의 리턴이다.
```javascript
function solution() {
  const socks = [];
  input.forEach(item => {
    socks[item] = socks[item] ? socks[item] + 1 : 1;
  })
  socks.forEach((item) => {
    if(item % 2 === 1) {
      return item;
    }
  })
  return -1;
}
console.log(solution());
```
알고리즘을 풀던 도중 원했던 결과는 forEach 안에서 아이템이 홀수 일경우 리턴이 되서 해당 값이 콘솔에 찍히길 원했지만, 결과는 항상 -1이였다.

forEach를 단순히 for문으로만 생각했기 때문에 일어난 실수였고, forEach가 받는 리턴값이 없긴 하지만, 콜백 함수이기 때문에 forEach 안에서의 리턴은 콜백함수의 리턴이다.

따라서 forEach에서만 빠져 나오게 되고 solution 함수자체는 빠져 나올수 없다.