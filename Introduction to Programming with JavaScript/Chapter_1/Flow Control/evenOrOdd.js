// evenOrOdd.js
function evenOrOdd(a) {
  if (Number.isInteger(a) === false) {
    console.log('a is not an integer');
} else if (a === 0) {
    console.log('a is neither odd nor even');
} else if (a % 2 === 0) {
    console.log('even');
} else {
    console.log('odd');
}
}
evenOrOdd(5);
evenOrOdd('fire');
evenOrOdd(0);

function foo(x) {
  if (x = true) {
  return 'bar';
  } else {
  return qux();
  }
}

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

let selectiveCaps = (words) => {
  if (words.length > 10) {
    return words.toUpperCase();
  } else {
    return words;
  }
}

console.log(selectiveCaps('hello'));
console.log(selectiveCaps('Hello World!'));

let numberRange = number => {
  if (number > 0 && number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 51 and 100`);
  } else if (number > 100) {
    console.log(`${number} is greater than 100`);
  } else if (number < 0) {
    console.log(`${number} is less than 0`);
  } else {
    console.log('Sorry, there is an error in the function.')
  }
}
numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
numberRange('potato');
