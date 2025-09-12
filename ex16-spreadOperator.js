const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1,2,3,4,5]

const arr4 = [0, ...arr1, 6];
console.log(arr4); // [0,1,2,3,6]