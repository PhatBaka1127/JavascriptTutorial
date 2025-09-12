function sumArray(arr) {
  let ans = 0
  for (let n of arr) {
    ans += n
  }
  return ans
}

console.log(sumArray([5, 10, 15, 20]))