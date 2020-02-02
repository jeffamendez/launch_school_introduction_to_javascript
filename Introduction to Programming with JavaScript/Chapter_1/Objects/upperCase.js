let myArray = {
  0: 1,
  1: 5,
  2: 3,
  length: 3,
}

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

/*
extract only the keys into an array, then .toUpperCase

*/
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let extractKeys = Object.keys(obj);

console.log(extractKeys.map(key => key.toUpperCase()));

//book code below
let objValues = Object.keys(obj).map((key) => key.toUpperCase());
console.log(objValues);
