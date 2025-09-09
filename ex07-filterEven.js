function filterEven(arr) {
  let ans = []
  for (let n of arr) {
    if (n % 2 === 0) {
      ans.push(n)
    }
  }
  return ans
}

console.log(filterEven([1, 2, 3, 4, 5, 6]))