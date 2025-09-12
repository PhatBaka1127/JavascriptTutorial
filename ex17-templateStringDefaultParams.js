function greet(name = 'Phat') {
    return `Hi, ${name}!`;
}

console.log(greet()); // "Hi, Phat!"
console.log(greet('Alice')); // "Hi, Alice!"