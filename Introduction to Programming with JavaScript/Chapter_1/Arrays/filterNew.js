// filterNew.js

let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let newArray = array.filter(num => {
  if (Number.isInteger(num) === true) {
    return num;
  }
});
console.log(newArray); // => [1, 3, -4]

/*
plan: review the filter method syntax, look up the isNumber method
what happened: using .isInteger on num led to a syntax error
what I did next: looked up MDN doc, saw that it had to be Number.isInteger(value)
i.e. it needed the function Number to work
*/
