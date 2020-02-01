// mapEven.js

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
// Desired result:
//  [
//    'odd', 'odd', 'even', 'odd',
//    'even', 'even', 'even', 'odd',
//    'odd', even', 'even',
//  ]

/*
first thought: need to make an if else function inside the map function
plan: review map structure, attempt to make if else
what happened: I first used console.log within the function, but it did
not give me the array, so I changed it to return; then I console.log(function)
to confirm the new array
*/
let evenOdd = myArray.map(num => {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
})

console.log(evenOdd);
