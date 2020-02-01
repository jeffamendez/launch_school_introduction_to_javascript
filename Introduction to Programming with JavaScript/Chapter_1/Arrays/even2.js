//even2.js

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

/*
I need to log all even numbers from this nested array
first extract all the numbers, then run the even algorithm
first thought: try .slice to get the duplicate without modifying the array
- did nothing
second thought: use .filter;
- did not access the nested array

third thought: do a messy version where you access each nested array
- it works
fourth thought: find a way to loop the three nested arrays
*/


for (let i = 0; i < myArray.length; i += 1) {
  myArray[i].forEach(function (num) {
    if (num % 2 === 0) {
      console.log(num);
      }
  })
}
