// extract.js
/*
goal is to extract a specific element within a nested array
based on other code with nested arrays you can do the following:
1. use double .forEach
2. use two for loops

Plan: use option 1 but modify it by:
a. start with .forEach
b. second layer uses .filter

remember .forEach returns undefined so you have to use console.log for it
to print the value you want
*/

let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];
arr.forEach(function(nestedArray) {
  nestedArray.filter(word => {
    if (word === "mem") {
      console.log(word);
    };
  })
})

console.log(arr[1][2]);
