function countCharacter(str, char) {
  let count = 0;
  for (let c of str.split("")) {
    if (c === char) {
      count++;
    }
  }
  return count
}

console.log(countCharacter("banana", "a"))