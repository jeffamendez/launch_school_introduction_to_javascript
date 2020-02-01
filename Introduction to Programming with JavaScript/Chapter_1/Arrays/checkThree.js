//checkThree.js
/*
plan check if three is in any of the arrays
Qs: what is a good method for this? filter
1. write a function that uses .filter
having trouble incorporating true/false here

*/
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkThree(array) {
  let checker = array.filter(num => (num === 3));
  return checker;
}

console.log(checkThree(numbers1));
console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));
