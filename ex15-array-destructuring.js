const arr = [10, 20, 30, 40, 50];
const [first, second, third, ...rest] = arr;

console.log(first);
console.log(second);
console.log(third);
console.log(rest);