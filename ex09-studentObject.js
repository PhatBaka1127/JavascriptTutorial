function computeAverage(arr) {
  let ans = 0
  for (let n in arr) {
    ans += n
  }
  return ans / arr.length
}

let student = { 
  name: "Phat", 
  age: 22, 
  scores: [8, 9, 7] 
};

console.log(student.name)
console.log(computeAverage(student.scores))