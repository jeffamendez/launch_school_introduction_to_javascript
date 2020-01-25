
let rlSync = require('readline-sync');
let firstname = rlSync.question('What is your first name? ');
let lastname = rlSync.question('What is your last name? ');
console.log( `Hello, ${firstname} ${lastname}!`);
