// mapLength.js

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
let oddLengths = arr.map(num => {
  return num.length;
  })

console.log(oddLengths)

console.log(oddLengths.filter(value => value % 2 == 1));
/*
plan: review map and filter syntax
try first: map method first; within, .length return for each element with an 'if'
statement; embed the .filter inside the map
error: oddLengths is not a function; fixed this, but returned undefined
next plan: try to do it one by one with map
result: it is undefined
what I did: I had to add return to it; I got the length right, but it is not filtering
*/
