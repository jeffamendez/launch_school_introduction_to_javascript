// multiply.js

let multiply = prompt => {
  let rlSync = require('readline-sync');
  let number = rlSync.question(prompt);
  return number;
}

let firstNumber = Number(multiply('Enter the first number: '));
let secondNumber = Number(multiply('Enter the second number: '));
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
