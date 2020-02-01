// oddLengths.js
/*
goal: determine the lengths of all elements, and keep the odd values
plan: you need to get the lengths first, then apply an even/odd filter
1. get the lengths first
  - .map will apply the .length to the elements
  - then use .filter on the modified array to get only the odd
2. so you start with the desired function name, within that start the .map,
- within the .map use the .filter

*/
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
function oddLengths(array) {
  let filteredNumbers = arr.map(words => {
    return words.length;
  }).filter(num => num % 2 === 1);
  return filteredNumbers;
}



console.log(oddLengths(arr)); // => [1, 5, 3]
