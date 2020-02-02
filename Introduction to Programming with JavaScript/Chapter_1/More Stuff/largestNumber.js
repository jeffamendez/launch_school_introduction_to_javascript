// largestNumber.js

/*
goal: output the largest number in a list
plan: use forEach or map to get through each nested array, then use filter to
apply the condition

*/

let arr = [
  [1, 6, 3, 2],
  [-1, -6, -3, -2],
  [2, 2]
];


arr.forEach(function(nestedArray) {
  nestedArray.reduce(function(a, b) {
    console.log(Math.max(a, b));
  })
})
