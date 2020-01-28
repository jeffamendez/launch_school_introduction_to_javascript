
function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter
  }
  return result;
}
console.log(factorial(4));
/*
 for above: first declare the variable counter, start the count at the top
 then go backwards
via the -= operator
then to chain the numbers to be multiplied together you have to use the
*= operator
*/


function factorialTwo(number) {
  if (number < 2) {
    return 1;
  } else {
    return (number) * factorial(number - 1);
  }
}

console.log(factorialTwo(5));
/*
to be recursive, the function has to refer to a previous version of itself

*/
