//even.js

let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];
/*
initial thought: use the filter function; has to include an if statement with % 2 === 0
second thought: forEach is better
*/

myArray.forEach(function (num) {
  if (num % 2 === 0) {
    console.log(num);
    }
});
