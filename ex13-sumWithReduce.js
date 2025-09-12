function sumWithReduce(arr) {
    return arr.reduce((acc, val) => acc + val, 0)
}

console.log(sumWithReduce([1, 2, 3, 4]))