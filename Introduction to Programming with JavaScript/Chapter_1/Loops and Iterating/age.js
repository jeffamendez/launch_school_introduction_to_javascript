let readlineSync = require('readline-sync');
let age = Number(readlineSync.question('What is your age? '));

let array = [10, 20, 30, 40]
console.log(`You are ${age} years old.`);
for (i = 0; i < array.length; i += 1) {
  console.log(`In ${array[i]} years, you will be ${age + array[i]} years old.`);
}


console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);
