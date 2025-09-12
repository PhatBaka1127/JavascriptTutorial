function factorial(n) {
  let ans = 1;
  for (i = 1; i <= n; i++) {
    ans *= i;
  }
  return ans;
}

console.log(factorial(3))