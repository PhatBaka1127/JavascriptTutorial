function square(arr) {
  let ans = []
  for (i = 0; i < arr.length; i++) {
    ans[i] = Math.pow(arr[i], 2)
  }
  return ans
}

console.log(square([1, 2, 3]))