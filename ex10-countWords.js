function countWords(str) {
    return str.trim().split(/\s+/).length
}
console.log(countWords("Hello world"))